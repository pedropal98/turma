import { Controller } from "stimulus";
import consumer from "../channels/consumer";

export default class extends Controller {
  static values = { eventId: Number }

  connect() {
    this.channel = consumer.subscriptions.create(
      { channel: "EventChannel", id: this.eventIdValue },
      { received: data => this.element.insertAdjacentHTML("afterbegin", data) }
    )
  }


}
