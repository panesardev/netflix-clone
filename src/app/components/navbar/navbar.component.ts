import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <div class="logo">
        <img src="assets/img/logo.png" loading="lazy" alt="netflix_logo">
      </div>
      <div class="nav-links">
        <a class="active py-2 py-md-0">Home</a>
        <a class="py-2 py-md-0">TV Shows</a>
        <a class="py-2 py-md-0">Movies</a>
        <a class="py-2 py-md-0">New & Popular</a>
        <a class="py-2 py-md-0">My List</a>
      </div>
      <div class="fill-space"></div>
      <div class="right-links">
        <a><i class="fas fa-search"></i></a>
        <a>KIDS</a>
        <a><i class="fas fa-bell"></i></a>
        <a class="user-link">
          <img src="assets/img/user.png" loading="lazy" alt="netflix_user">
          <span><i class="fas fa-sort-down"></i></span>
        </a>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {

  constructor() { 
    document.onscroll = () => {
      document.querySelector('nav')
        .classList.toggle('scrolled', document.scrollingElement.scrollTop > document.querySelector('nav').offsetHeight)      
    }
  }

  ngOnInit(): void {
  }

}
