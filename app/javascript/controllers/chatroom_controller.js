import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['formSubmit'];

  submit() {
    setTimeout(() => {

      this.formSubmitTarget.reset();
    }, 300);
  }

}
