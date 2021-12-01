import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ['search', 'open', 'close', 'submit', 'searchForm']
  static values = { open: Boolean }

  connect() {
    if (this.searchTarget.value != '') {
      this.openTarget.classList.add("active");
      this.searchTarget.classList.add("open-bar");
    }
  }

  openSearch() {
    let activeSearch = this.openTarget.classList.contains("active");

    if (!activeSearch) {

      this.searchTarget.classList.add("open-bar");
      this.openTarget.classList.add("active");
      this.searchTarget.focus();
    }
    else {
      if (this.searchTarget.value == '') {
        this.searchTarget.classList.remove("open-bar");
        this.openTarget.classList.remove("active");
      }
      else {
        this.searchFormTarget.submit();
      }
    }

  }
}
