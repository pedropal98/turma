import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ['list', 'calendarr', 'logo', 'add', 'toRootLogo']
  static values = {open: Boolean}

  connect() {
    if (this.openValue) {
      this.closeCalendar()
    }
  }

  toggleCalendar() {
    this.calendarrTarget.classList.toggle("hidden");
    this.listTarget.classList.toggle("hidden");
    this.logoTarget.classList.toggle("open");
  }

  resize() {
    this.toRootLogoTarget.classList.toggle("rezise")
  }
}
