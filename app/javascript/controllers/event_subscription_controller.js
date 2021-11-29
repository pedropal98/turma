import { Controller } from "stimulus";
import consumer from "../channels/consumer";

export default class extends Controller {
  static values = { eventId: Number }
  static targets = ['form']

  connect() {
    this.channel = consumer.subscriptions.create(
      { channel: "EventChannel", id: this.eventIdValue },
      { received: data => this.element.insertAdjacentHTML("beforeend", data) },
      //  console.log(formTarget)


    )
  }

  disconnect() {
    this.channel.unsubscribe()
  }
}
