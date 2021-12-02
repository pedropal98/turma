import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['tab', 'close', 'content', 'formUrl', 'messages'];


  open() {
    this.tabTarget.classList.add("open");
    setTimeout(() => {
      this.closeTarget.classList.remove("hidden");
      this.contentTarget.classList.remove("hidden");
      this.messagesTarget.scrollTop = this.messagesTarget.scrollHeight;
    }, 300);

    // Add autofocus to form
    // Scroll to last message
    fetch(this.formUrlTarget.action, {
      method: 'PATCH',
      headers: { 'Accept': 'text/plain' },
      body: {}
    }).then(response => response.text())
      .then((data) => {
        this.tabTarget.classList.remove('notification');

      })

  }

  close() {
    this.tabTarget.classList.remove("open");
    this.closeTarget.classList.add("hidden");
    this.contentTarget.classList.add("hidden");
  }
}
