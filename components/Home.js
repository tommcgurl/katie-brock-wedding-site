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
                Friday, March 22, 2019
              </div>
              <div class="line-decoration"></div>
            </div>
            <div class="venue-container">
              <a href="http://www.prospecthousetx.com/" target="_blank">
                <img class="venue-logo" src="../images/prospect-house-logo.png"/>
              </a>
              <p class="info-group-details">
                12745 Silver Creek Road
              </p>
              <p class="info-group-details">
                Dripping Springs, TX 78620
              </p>
            </div>
          </div>
        `
      ),
      image: `<span></span>`
    }
  }
}
