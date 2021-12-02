import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ['search', 'open', 'close', 'submit', 'searchForm', 'input']
  static values = { open: Boolean }


  connect() {
    this.searchTarget.value = ''
    this.openTarget.classList.remove("active");
    this.searchTarget.classList.remove("open-bar");

  }

  openSearch(e) {
    let activeSearch = this.openTarget.classList.contains("active");

    if (!activeSearch) {

      this.searchTarget.classList.remove("hidden");
      setTimeout(() => {
        this.searchTarget.classList.add("open-bar");
        this.openTarget.classList.add("active");

      }, 200);
      this.inputTarget.focus();
    }
    else {
      if (this.inputTarget.value == '') {
        this.searchTarget.classList.remove("open-bar");
        this.openTarget.classList.remove("active");
        setTimeout(() => {
          this.searchTarget.classList.add("hidden");
        }, 200);
      }
      else {
        this.searchFormTarget.submit();
      }
    }

  }
}
