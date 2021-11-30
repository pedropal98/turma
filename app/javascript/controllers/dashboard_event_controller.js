import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['tab', 'close', 'content'];

  open() {
    this.tabTarget.classList.add("open");
    this.closeTarget.classList.remove("hidden");
    this.contentTarget.classList.remove("hidden");

  }

  close() {
    this.tabTarget.classList.remove("open");
    this.closeTarget.classList.add("hidden");
    this.contentTarget.classList.add("hidden");
  }
}
