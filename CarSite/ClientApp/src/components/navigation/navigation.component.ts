import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: 'navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  selector: 'navigation',
})
export class NavigationComponent {
  constructor(private router: Router) { }

  onHomeClick() {
    this.router.navigate(['/home']);
  }
  onProfileClick() {
    this.router.navigate(['/home']);
  }
  onCarsClick() {
    this.router.navigate(['/home']);
  }
  onImagesClick() {
    this.router.navigate(['/home']);
  }
}
