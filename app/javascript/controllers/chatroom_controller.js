import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['formSubmit', 'messages', 'input'];

  connect() {
  }

  submit() {
    setTimeout(() => {
      this.inputTarget.focus();
      this.messagesTarget.scrollTop = this.messagesTarget.scrollHeight;
      this.formSubmitTarget.reset();
    }, 300);
  }

}
