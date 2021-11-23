class InvitationsController < ApplicationController
  def index
    @invitations = Invitation.where(event: params[:event_id])
  end

  def create
    @invitation = Invitation.new(invitation_params)
    @invitation.user = current_user
    @invitation.event_id = params[:event_id]
    if @invitation.save!
      flash[:alert] = "invitation!"
      redirect_to event_path(params[:event_id])
    else
      flash[:alert] = "invitation failed"
    end
  end

  def accept

  end

  def decline

  end

  def update
    @invitation = Invitation.find(params[:id])
    if params[:approved] === "true"
      approved = true;
    else
      approved = false;
    end
    @invitation.update(approved: approved)
    redirect_to event_invitations_path(params[:event_id])
  end

  private

  def invitation_params
    params.require(:invitation).permit(:event_id)
  end
end
