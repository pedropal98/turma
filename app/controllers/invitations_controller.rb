class InvitationsController < ApplicationController
  def index
    @invitations = Invitation.where(user: current_user)
  end

  def create
    @invitation = Invitation.new(invitation_params)
    @invitation.event_id = params[:event_id]
    if @invitation.user = User.where("name ILIKE ?", "%#{params[:invitation][:user_id]}%").first
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
      status = true
    else
      status = false
    end
    @invitation.update(status: status)
    redirect_to event_path(params[:event_id])
  end

  def destroy
    @invitation = Invitation.find(params[:id])
    @invitation.destroy
    redirect_to events_path
  end

  private

  def invitation_params
    params.require(:invitation).permit(:user_id, :content)
  end
end
