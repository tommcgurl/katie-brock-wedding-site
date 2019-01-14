import './Photos.css'

export default class Photos {
  constructor(selector) {
    this.selector = selector;
  }

  getContent() {
    return {
      main:   (
        `
          <div class="photos-container">
            <img class="photo verticle" src="../images/kb.jpg" />
            <img class="photo verticle" src="../images/kb1.jpg" />
            <img class="photo verticle" src="../images/kb2.jpg" />
            <img class="photo verticle" src="../images/kb3.jpg" />
            <img class="photo verticle" src="../images/kb4.jpg" />
            <img class="photo verticle" src="../images/kb5.jpg" />
            <img class="photo verticle" src="../images/kb6.jpg" />
            <img class="photo verticle" src="../images/kb7.jpg" />
          </div>
        `
      ),
      image: ''
    };
  }
}
