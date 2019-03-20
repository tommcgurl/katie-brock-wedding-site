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
                12745 Silver Creek Road
              </p>
              <p class="info-group-details">
                Dripping Springs, TX 78620
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
                We have reserved a block of rooms at the Omni Austin Southpark. Please click below to view details and book a room.
              </p>
              <div class="black-button info-group-button">
                <a target="_blank" href=" https://www.omnihotels.com/hotels/austin-southpark/weddings/mcgurl-caron-wedding-rooms">Book a room</a>
              </div>
            </div>
            <div class="location-container-second-row">
              <div class="header-with-decoration">
                <div class="line-decoration"></div>
                <div class="info-group-heading secondary-header">
                  Transportation
                </div>
                <div class="line-decoration"></div>
              </div>
              <p class="info-group-location-transportation" >
                Complimentary shuttle service is available between the Omni and Austin-Bergstrom International Airport with advanced notice to the front desk.
              </p>
              <p class="info-group-location-transportation" >
                We will have an executive charter bus with complimentary service to and from Prospect House on wedding day.
              </p>
              <p class="info-group-location-transportation" >
                Departure time from the Omni:
              </p>
              <span class="emphasis"> 4:15 pm </span>
              <p class="info-group-location-transportation" >
                Departure times from Prospect House back to the Omni:
              </p>
              <span class="emphasis"> 10:15pm and 11:30pm </span>
              <p class="info-group-location-transportation" >
                Local guests are welcome to park in the Omni lot and take the shuttle as well, but please note that out-of-town guests will be given first priority.
              </p>
              <p class="info-group-location-transportation" >
                Downtown Austin is just a 10-minute ride away from the Omni; Uber, Lyft, and cab services are available.
              </p>

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
