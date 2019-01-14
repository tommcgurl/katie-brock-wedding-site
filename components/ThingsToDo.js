import './ThingsToDo.css'

export default class Photos {
  getContent() {
    return {
      main:   (
        `
          <div class="things-to-do-container">
            There is a ton of shit to do.
          </div>
        `
      ),
      image: ''
    };
  }
}
