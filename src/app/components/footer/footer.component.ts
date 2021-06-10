import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="social-icons">
        <a rel="noopener" rel="noreferrer" target="_blank" href="https://www.facebook.com/netflixcanada">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a rel="noopener" rel="noreferrer" target="_blank" href="https://www.instagram.com/Netflix/">
          <i class="fab fa-instagram-square"></i>
        </a>
        <a rel="noopener" rel="noreferrer" target="_blank" href="https://twitter.com/netflix_CA">
          <i class="fab fa-twitter"></i>
        </a>
        <a rel="noopener" rel="noreferrer" target="_blank" href="https://www.youtube.com/user/NewOnNetflix">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
      <div class="links">
        <div><a rel="noopener" rel="noreferrer" href="#">Audio and Subtitles</a><a rel="noopener" rel="noreferrer" href="#">Media Center</a><a rel="noopener" rel="noreferrer" href="#">Privacy</a><a rel="noopener" rel="noreferrer" href="#">Contact Us</a></div>
        <div><a rel="noopener" rel="noreferrer" href="#">Audio Description</a><a rel="noopener" rel="noreferrer" href="#">Investor Relations</a><a rel="noopener" rel="noreferrer" href="#">Legal Notices</a></div>
        <div><a rel="noopener" rel="noreferrer" href="#">Help Centers</a><a rel="noopener" rel="noreferrer" href="#">Jobs</a><a rel="noopener" rel="noreferrer" href="#">Cookie Preferences</a></div>
        <div><a rel="noopener" rel="noreferrer" href="#">Gift Cards</a><a rel="noopener" rel="noreferrer" href="#">Terms of use</a><a rel="noopener" rel="noreferrer" href="#">Corporate Information</a></div>
      </div>
      <div>
        <button class="p-2">Service Code</button>
      </div>
      <div>
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
