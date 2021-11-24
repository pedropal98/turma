class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :index ]

  def home
    redirect_to events_path if user_signed_in?
  end
end
