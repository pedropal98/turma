import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["list", "calendar"]

  connect() {
    console.log(this.listTarget);
  }
}
