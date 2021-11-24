class InvitationsController < ApplicationController
  def index
    @invitations = Invitation.where(user: current_user)
  end

  def create
    @invitation = Invitation.new(invitation_params)
    @invitation.event_id = params[:event_id]
    @invitation.user = User.find_by(name: params[:invitation][:user_id])
    if @invitation.save!
      flash[:alert] = "Reservation requested!"
      redirect_to event_path(params[:event_id])
    else
      flash[:alert] = "invitation failed"
    end
  end

  def destroy
    @invitation = Invitation.find(params[:id])
    @invitation.destroy
    redirect_to event_path
  end

  def update
    @invitation = Invitation.find(params[:id])
    if params[:status] = "true"
      status = true
    else
      status = false
    end
    @invitation.update(status: status)
    redirect_to event_invitation_path(params[:event_id])
  end

  private

  def invitation_params
    params.require(:invitation).permit(:user_id, :content)
  end
end
