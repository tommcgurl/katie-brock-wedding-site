import './Home.css';

export default class Location {
  constructor(selector) {
    this.selector = selector;
  }

  getContent() {
    return {
      main: (
        `
          <div class="home-container">
            <div class="home-image-container">
              <img width="80%" height="auto" class="home-image" src="../images/landing-image.jpg" />
            </div>
            <div class="header-with-decoration">
              <div class="line-decoration"></div>
              <div class="info-group-heading secondary-header">
                March 22, 2019
              </div>
              <div class="line-decoration"></div>
            </div>
          </div>
        `
      ),
      image: `<span></span>`
    }
  }
}
