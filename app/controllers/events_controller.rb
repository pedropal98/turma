class EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  private

  def event_params
    params.require(:event).permit(:travel, :date, :accomodation, :food, :category, :technician, :rider, :driver)
  end
end
