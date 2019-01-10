import './Photos.css'

export default class Photos {
  constructor(selector) {
    this.selector = selector;
  }

  getOlides() {
    // Create a range from 0 -> 40
    // const emptyArray = Array.apply("test", Array(42));
    // const range = emptyArray.map((_, index) => index + 1);
    // return range.reduce((acc, next) => {
    //   if (next < 16) {
    //     return `${acc}<img class="photo verticle" src="../images/photos/oldies/${next}.jpg" />`
    //   } else {
    //     return `${acc}<img class="photo" src="../images/photos/oldies/${next}.jpg" />`
    //   }
    // },'');
    return '';
  }

  getContent() {
    return {
      main:   (
        `
          <div class="photos-container">
            <img class="photo verticle" src="../images/kb1.jpg" />
            <img class="photo verticle" src="../images/kb.jpg" />
            <img class="photo verticle" src="../images/kb3.jpg" />
            <img class="photo verticle" src="../images/kb5.jpg" />
            <img class="photo verticle" src="../images/kb6.jpg" />
          </div>
        `
      ),
      image: ''
    };
  }
}
