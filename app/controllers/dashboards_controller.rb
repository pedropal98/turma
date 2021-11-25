class DashboardsController < ApplicationController
  def show
    @invitations = Invitation.where(user: current_user)
    @events = Event.where(user: current_user)
  end
end
