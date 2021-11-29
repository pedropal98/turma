import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['tab', 'close', 'content'];

  open() {
    this.tabTarget.classList.add("open");
    setTimeout(() => {
      this.closeTarget.classList.remove("hidden");
      this.contentTarget.classList.remove("hidden");
    }, 500);



  }

  close() {
    this.tabTarget.classList.remove("open");
    this.closeTarget.classList.add("hidden");
    this.contentTarget.classList.add("hidden");
  }
}
