import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ['list', 'calendarr', 'open', 'close']

  openCalendar() {
    console.log("hello");
    this.calendarrTarget.classList.remove("hidden");
    this.listTarget.classList.add("hidden");
    this.openTarget.classList.add("hidden");
    this.closeTarget.classList.remove("hidden");
  }

  closeCalendar() {
    this.calendarrTarget.classList.add("hidden");
    this.listTarget.classList.remove("hidden");
    this.openTarget.classList.remove("hidden");
    this.closeTarget.classList.add("hidden");
  }
}
