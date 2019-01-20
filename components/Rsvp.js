import './Rsvp.css';

export default class Rsvp {
  constructor(selector) {
    this.selector = selector;
  }

  getContent() {
    return {
      main: (
        `
          <div class="rsvp-container">
            <div class="rsvp-issues">
              <h3> If you are having trouble viewing this form please <a href="https://docs.google.com/forms/d/e/1FAIpQLSfv3BL_5DCgI0Ogpn1xyKPTJSPg8JZl2C6yWgip0ErDmSFcJA/viewform"> click here </a> </h3>
            </div>
            <iframe id="rsvp-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSfv3BL_5DCgI0Ogpn1xyKPTJSPg8JZl2C6yWgip0ErDmSFcJA/viewform?embedded=true" width="640" height="1266" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            <div class="rsvp-issues">
              <h3> If you are having trouble viewing this form please <a href="https://docs.google.com/forms/d/e/1FAIpQLSfv3BL_5DCgI0Ogpn1xyKPTJSPg8JZl2C6yWgip0ErDmSFcJA/viewform"> click here </a> </h3>
            </div>
          </div>
        `
      ),
      image: (
        '<span></span>'
      )
    };
  }
}
