const HOME = 'HOME';
const DETAILS = 'DETAILS';
const BRIDAL_PARTY = 'BRIDALPARTY';
const REGISTRY = 'REGISTRY';
const RSVP = 'RSVP';
const PHOTOS= 'PHOTOS';
import Details from './Details.js';
import Home from './Home.js';
import Rsvp from './Rsvp.js';
import Photos from './Photos.js';

export default class Content {
  constructor(selector, topImageSelector, currentTab) {
    this.selector = selector;
    this.topImageSelector = topImageSelector;
    this.currentTab = currentTab || HOME;
    this.homeComponent = '';
    this.detailsComponent = '';
    this.registryComponent = '';
    this.rsvpComponent = '';
    this.bridalPartyComponent = '';
    this.photosComponent = '';
  }

  changeHashHistory() {
    window.location.hash = `#${this.currentTab.toLowerCase().replace(/\W/g, '')}`;
  }

  // Adds the "active" class to the current tab.
  setActiveTab() {
    let tabs = document.getElementsByClassName('tab-item');
    // We cannot use for each since tabs is not a traditional array.
    // It does not have a forEach/Map
    for (let i = 0; i < tabs.length; i ++) {
      const innerText = tabs[i].innerText.replace(/\W/g, '');
      if (innerText === this.currentTab) {
        tabs[i].classList.add('active');
      } else {
        tabs[i].classList.remove('active');
      }
    }
  }

  handleTabChange(e) {
    if (!e.target || !e.target.innerText || e.target.innerText === "REGISTRY") {
      return;
    }
    this.currentTab = e.target.innerText.replace(/\W/g, '');
    this.changeHashHistory();
    this.setActiveTab();
    this.render();
    window.scrollTo(0,0);
    if (ga) {
      ga('set', 'page', `/${this.currentTab.toLowerCase()}.html`);
      ga('send', 'pageview');
    }
  }

  getContent() {
    let mainContent;
    let imageContent;
    let mainContainerClass;
    let contentObj;
    switch(this.currentTab) {
      case HOME: {
        // Create the component if we haven't already.
        // We only want to create them as needed.
        if (!this.homeComponent) {
          this.homeComponent = new Home();
        }
        contentObj = this.homeComponent.getContent();
        mainContent = contentObj.main;
        imageContent = contentObj.image;
        mainContainerClass = "home";
        break
      }
      case DETAILS: {
        // Create the component if we haven't already.
        if (!this.detailsComponent) {
          this.detailsComponent = new Details();
        }
        contentObj = this.detailsComponent.getContent();
        mainContent = contentObj.main;
        imageContent = contentObj.image;
        mainContainerClass = "location";
        break;
      }
      case REGISTRY:
        // Creat the registry component if we haven't already.
        if (!this.registryComponent) {
          this.registryComponent = new Registry();
        }
        contentObj = this.registryComponent.getContent();
        mainContent = contentObj.main;
        imageContent = contentObj.image;
        mainContainerClass = "registry";
        break;
      case RSVP: {
        if (!this.rsvpComponent) {
          this.rsvpComponent = new Rsvp();
        }
        contentObj = this.rsvpComponent.getContent();
        mainContent = contentObj.main;
        imageContent = contentObj.image;
        mainContainerClass = "rsvp";
        break;
      }
      case BRIDAL_PARTY: {
        if (!this.bridalPartyComponent) {
          this.bridalPartyComponent= new BridalParty();
        }
        contentObj = this.bridalPartyComponent.getContent();
        mainContent = contentObj.main;
        imageContent = contentObj.image;
        mainContainerClass = "bridal-party";
        break;
      }
      case PHOTOS: {
        if (!this.photosComponent) {
          this.photosComponent= new Photos();
        }
        contentObj = this.photosComponent.getContent();
        mainContent = contentObj.main;
        imageContent = contentObj.image;
        mainContainerClass = "photos";
        break;
      }
      default: {
        // Create the component if we haven't already.
        // We only want to create them as needed.
        if (!this.homeComponent) {
          this.homeComponent = new Home();
        }
        contentObj = this.homeComponent.getContent()
        mainContent = contentObj.main;
        imageContent = contentObj.image;
        mainContainerClass = "home";
        break;
      }
    }

    mainContent = (
      `
      <div class="content-container white ${mainContainerClass}">
        <div class="row container">
          <div class="centered-col">
            ${mainContent}
          </div>
        </div>
      </div>
      `
    );

    return {
      imageContent,
      mainContent,
      mainContainerClass
    };
  }

  render() {
    const {
      imageContent,
      mainContent,
      mainContainerClass
    } = this.getContent();

    // Append to main container class
    let mainContainer = document.getElementById('main-container');
    mainContainer.className = `section header-container ${mainContainerClass}`;
    document.getElementsByTagName('body')[0].className = mainContainerClass;
    // Render the content.
    document.getElementById(this.selector).innerHTML = mainContent;
  }
}
