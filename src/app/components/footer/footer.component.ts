import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="social-icons mb-3">
        <a target="_blank" href="https://www.facebook.com/netflixcanada">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a target="_blank" href="https://www.instagram.com/Netflix/">
          <i class="fab fa-instagram-square"></i>
        </a>
        <a target="_blank" href="https://twitter.com/netflix_CA">
          <i class="fab fa-twitter"></i>
        </a>
        <a target="_blank" href="https://www.youtube.com/user/NewOnNetflix">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
      <div class="links mb-3">
        <div><a href="">Audio and Subtitles</a><a href="">Media Center</a><a href="">Privacy</a><a href="">Contact Us</a></div>
        <div><a href="">Audio Description</a><a href="">Investor Relations</a><a href="">Legal Notices</a></div>
        <div><a href="">Help Centers</a><a href="">Jobs</a><a href="">Cookie Preferences</a></div>
        <div><a href="">Gift Cards</a><a href="">Terms of use</a><a href="">Corporate Information</a></div>
      </div>
      <div class="mb-3">
        <button class="p-2">Service Code</button>
      </div>
      <div class="mb-3">
        &copy; 1997-2021, Netflix, Inc. {{ '{5632769d-ef46-4533-a5e7-593206fe4aaa}' }}
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
