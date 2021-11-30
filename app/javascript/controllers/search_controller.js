import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ['search', 'open', 'close']
  static values = { open: Boolean }

  openSearch() {
    this.searchTarget.classList.remove("hidden");
    this.openTarget.classList.add("hidden");
  }
}
