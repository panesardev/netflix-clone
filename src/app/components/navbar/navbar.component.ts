import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <div class="menu">
        <img src="assets/img/menu.svg" alt="menu" height="20" width="20">
      </div>
      <div class="logo">
        <img src="assets/img/logo.png" loading="lazy" alt="netflix_logo">
      </div>
      <div class="nav-links">
        <a href="#" class="active py-2 py-md-0">Home</a>
        <a href="#" class="py-2 py-md-0">TV Shows</a>
        <a href="#" class="py-2 py-md-0">Movies</a>
        <a href="#" class="py-2 py-md-0">New & Popular</a>
        <a href="#" class="py-2 py-md-0">My List</a>
      </div>
      <div class="fill-space"></div>
      <div class="right-links">
        <a href="#"><i class="fas fa-search"></i></a>
        <a href="#">KIDS</a>
        <a href="#"><i class="fas fa-bell"></i></a>
        <a href="#" class="user-link">
          <img src="assets/img/user.png" loading="lazy" alt="netflix_user">
          <span><i class="fas fa-sort-down"></i></span>
        </a>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {

  constructor(@Inject(DOCUMENT) private document: Document) { 
    document.onscroll = () => {
      document.querySelector('nav')
        .classList.toggle('scrolled', document.scrollingElement.scrollTop > document.querySelector('nav').offsetHeight)      
    }
  }

  ngOnInit(): void {
  }

  toggle() {
    if ((this.document.querySelector('.nav-links') as HTMLElement).style.display !== 'flex') {
      (this.document.querySelector('.nav-links') as HTMLElement).style.display = 'flex';
    } else {
      (this.document.querySelector('.nav-links') as HTMLElement).style.display = 'none';
    }
  }

}
