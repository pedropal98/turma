import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['formSubmit'];

  submit() {
    setTimeout(() => {

      console.log(this.element);
      console.log(this.formSubmitTarget);
      this.formSubmitTarget.reset();
    }, 300);
  }

}
