import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ['list', 'calendarr', 'open', 'close']
  static values = {open: Boolean}

  connect() {
    if (this.openValue) {
      this.closeCalendar()
    }
  }

  openCalendar() {
    this.calendarrTarget.classList.remove("hidden");
    this.listTarget.classList.add("hidden");
    this.openTarget.classList.add("hidden");
    this.closeTarget.classList.remove("hidden");
    this.openTarget.classList.add("open");
  }

  closeCalendar() {
    this.calendarrTarget.classList.add("hidden");
    this.listTarget.classList.remove("hidden");
    this.openTarget.classList.remove("hidden");
    this.closeTarget.classList.add("hidden");
  }
}
