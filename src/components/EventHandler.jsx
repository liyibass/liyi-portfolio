export class EventHandler {
  constructor() {
    this.menuIcon = document.querySelector(".header__menu-icon");
    this.menuContent = document.querySelector(".options");

    this.events();
  }

  events() {
    console.log("fired");

    this.menuIcon.addEventListener("click", () => {
      this.ToggleTheMenu();
    });
  }
  ToggleTheMenu() {
    this.menuContent.classList.toggle("options--is-visible");
    this.menuContent.classList.toggle("options--is-expanded");
    this.menuIcon.classList.toggle("header__menu-icon--close-x");
  }
}
