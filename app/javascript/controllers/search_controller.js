import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ['search', 'open', 'close', 'submit', 'searchForm', 'input']
  static values = { open: Boolean }


  connect() {
    if (this.searchTarget.value != '') {
      this.openTarget.classList.add("active");
      this.searchTarget.classList.add("open-bar");
    }
  }

  openSearch(e) {
    let activeSearch = this.openTarget.classList.contains("active");

    if (!activeSearch) {

      this.searchTarget.classList.remove("hidden");
      setTimeout(() => {
        this.searchTarget.classList.add("open-bar");
        this.openTarget.classList.add("active");

      }, 100);
      this.inputTarget.focus();
    }
    else {
      if (this.inputTarget.value == '') {
        this.searchTarget.classList.remove("open-bar");
        this.openTarget.classList.remove("active");
        setTimeout(() => {
          this.searchTarget.classList.add("hidden");
        }, 100);
      }
      else {
        this.searchFormTarget.submit();
      }
    }

  }
}
