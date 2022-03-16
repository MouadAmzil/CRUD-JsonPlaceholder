import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.hiddenNav();
  }
  ngOnDestroy(): void {
    this.DisplayNav();
  }
  hiddenNav() {
    let nav = document.getElementById('navBar');
    nav.style.display = 'none';
  }
  DisplayNav() {
    let nav = document.getElementById('navBar');
    nav.style.display = 'block';
  }
}
