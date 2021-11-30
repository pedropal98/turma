import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['tab', 'close', 'content', 'formUrl'];

  open() {
    this.tabTarget.classList.add("open");
    setTimeout(() => {
      this.closeTarget.classList.remove("hidden");
      this.contentTarget.classList.remove("hidden");
    }, 500);

    // Add autofocus to form
    // Scroll to last message
    fetch(this.formUrlTarget.action, {
      method: 'PATCH',
      headers: { 'Accept': 'text/plain' },
      body: {}
    }).then(response => response.text())
      .then((data) => {
        console.log(data);
      })

  }

  close() {
    this.tabTarget.classList.remove("open");
    this.closeTarget.classList.add("hidden");
    this.contentTarget.classList.add("hidden");
  }
}
