import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ['list', 'calendarr', 'logo', 'add', 'toRootLogo']
  static values = {open: Boolean}





  toggleCalendar() {
    this.calendarrTarget.classList.toggle("hidden");
    this.listTarget.classList.toggle("hidden");
    this.logoTarget.classList.toggle("open");
  }

  closeCalendar() {
    this.calendarrTarget.classList.add("hidden");
    this.listTarget.classList.remove("hidden");
    this.openTarget.classList.remove("hidden");
    this.closeTarget.classList.add("hidden");
  }


}
