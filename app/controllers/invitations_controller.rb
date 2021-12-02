class InvitationsController < ApplicationController
  def index
    @invitations = Invitation.where(user: current_user)
  end

  def create
    @invitation = Invitation.new(invitation_params)
    @invitation.event_id = params[:event_id]
    if @invitation.user = User.where("email ILIKE ?", "%#{params[:invitation][:user_id]}%").first
      @invitation.save!
      flash[:alert] = "Invitation requested!"
    else
      flash[:alert] = "invitation failed"
    end
    redirect_to event_path(params[:event_id])
  end

  def update
    @invitation = Invitation.find(params[:id])
    if params[:status] == "true"
      @invitation.update(status: true)
      flash[:alert] = "Invitation approved!"
      redirect_to event_path(params[:event_id])
    else
      @invitation.update(status: false)
      flash[:alert] = "Invitation declined!"
      redirect_to  dashboards_path
    end

  end

  def destroy
    @invitation = Invitation.find(params[:id])
    @invitation.destroy
    redirect_to dashboards_path
  end

  private

  def invitation_params
    params.require(:invitation).permit(:user_id, :content)
  end
end
