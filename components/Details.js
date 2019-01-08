import './Details.css';

export default class Location {
  constructor(selector) {
    this.selector = selector;
  }
  getContent() {
    return {
      main: (
        `
          <div class="location-container">
            <div class="location-container-second-row">
              <div class="header-with-decoration">
                <div class="line-decoration"></div>
                <div class="info-group-heading secondary-header">
                  The Venue
                </div>
                <div class="line-decoration"></div>

              </div>
              <a href="http://www.prospecthousetx.com/" target="_blank">
                <img class="venue-logo" src="../images/prospect-house-logo.png"/>
              </a>
              <p class="info-group-details">
                12745 Silver Creek Road, Dripping Springs, TX 78620
              </p>
            </div>
            <div class="location-container-second-row">
              <div class="header-with-decoration">
                <div class="line-decoration"></div>
                <div class="info-group-heading secondary-header">
                  Guest Accommodations
                </div>
                <div class="line-decoration"></div>
              </div>
              <p class="info-group-details">
                Omni Austin Hotel at Southpark, Austin, Texas
              </p>
              <p class="info-group-location-address">
                The Omni has created a special page for our wedding room blocks. Use the button below to book a room.
              </p>
              <div class="black-button info-group-button">
                <a target="_blank" href=" https://www.omnihotels.com/hotels/austin-southpark/weddings/mcgurl-caron-wedding-rooms">Book a room</a>
              </div>

            </div>
          </div>
          <img class="venue-image" width="100%" src="../images/venue.jpg"/>
        `
      ),
      image: (
        '<div class="banner-image location-image"></div>'
      )
    };
  }
}
