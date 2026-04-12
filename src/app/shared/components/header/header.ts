import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Angular } from "../../ui/svg/angular/angular";

@Component({
  selector: 'app-header',
  imports: [RouterLink, Angular],
  templateUrl: './header.html',
})
export class Header {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
