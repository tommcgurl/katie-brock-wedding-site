import './Austin.css'

export default class Austin {
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
          <div class="austin-container">
            <div class="austin-top-photo-container">
              <img class="austin-top-photo" src="../images/kb1.jpg" />
            </div>
            <div class="austin-body">
              <div class="header-with-decoration">
                <div class="line-decoration"></div>
                <div class="info-group-heading secondary-header">
                  Things to Do
                </div>
                <div class="line-decoration"></div>
              </div>

              <p>
                Explore the South Congress district (just a short ride from the Omni!),
                where you'll find a host of the weird and wonderful shops, restaurants, and
                bars that make Austin so unique.
              </p>
              <p>
                Check out one of the city's beautiful parks, including Zilker Park, Zilker
                Botanical Garden, Ladybird Johnson Wildflower Center, Barton Springs Pool,
                or the path around Ladybird Lake (where you can see the famous Stevie Ray
                Vaughan statue).
              </p>
              <p>
                Take a traditional Texas swing or two-step lesson at one of Austin's honky
                tonks: the famous <a target="_blank" href="https://www.brokenspokeaustintx.net">Broken Spoke</a> or <a target="_blank" href="https://www.thewhitehorseaustin.com">The White Horse </a>.
              </p>
              <p>
                Visit the inspiring Blanton Museum of Art <https://blantonmuseum.org/> or
                the incredible <a target="_blank" href="http://www.lbjlibrary.org">LBJ Presidential Library and Museum
                </a>, both within the University of Texas at Austin's historical campus.
              </p>
              <p>
                For some raucous fun, check out the nightlife on 6th Street or Rainey
                Street.
              </p>
              <p>
                Visit Austin's official page <a target="_blank" href="https://www.austintexas.org">https://www.austintexas.org</a> for great
                information on things to see, do, and eat around Texas' capital city.
              </P>

              <div class="header-with-decoration">
                <div class="line-decoration"></div>
                <div class="info-group-heading secondary-header">
                  Places to Eat and Drink
                </div>
                <div class="line-decoration"></div>
              </div>
              <p>
                For authentic Texas BBQ, visit <a target="_blank" href="https://www.terryblacksbbq.com/">Terry Black's BBQ
                </a> on Barton Springs Road, or wait in line
                to experience the world-famous <a target="_blank" href="https://franklinbbq.com/">Franklin Barbecue</a>.
              </p>
              <p>
                A trip to Austin is not complete without a visit to <a target="_blank" href="https://torchystacos.com">Torchy's Tacos</a>.
              </p>
              <p>
                Easy Tiger is a great place to grab lunch, where everything from their
                bread to their pastrami is made in-house. For an awesome burger, try
                Hopdoddy on South Congress. If you're looking for a place to have a
                fantastic cocktail and a delicious meal, look no further than <a target="_blank" href="https://oddduckaustin.com">Odd Duck</a>.
              </p>
              <p>
                For coffee, visit <a target="_blank" href="https://www.joscoffee.com">Jo's Coffee</a> on South
                Congress Ave, <a target="_blank" href="http://www.spokesmancoffee.com">Spokesman Coffee</a>, or <a target="_blank" href="https://www.cosmiccoffeebeer.com">Cosmic
                Coffee + Beer Garden</a>.
              </p>
              <p>
                Tour one of our many local breweries: <a target="_blank" href="https://jesterkingbrewery.com">Jester King</a>, <a target="_blank" href="http://www.stelmobrewing.com">St. Elmo Brewing Co.<a/>, <a target="_blank" href="https://www.zilkerbeer.com/">Zilker Brewing Co.</a>,
                <a target="_blank" href="http://www.hopsandgrain.com">Hops & Grain </a>,
                <a target="_blank" href="https://www.lazarusbrewing.com/">Lazarus Brewing Company</a>, <a target="_blank" href="http://www.skullmechanix.com">Skull Mechanix
                Brewing </a> (very close to the Omni), <a target="_blank" href="https://theabgb.com">The Austin Beer Garden Brewing Company </a>.
              </p>

              <div class="header-with-decoration">
                <div class="line-decoration"></div>
                <div class="info-group-heading secondary-header">
                  Live Music
                </div>
                <div class="line-decoration"></div>
              </div>
              <p>
                <a target="_blank" href="http://continentalclub.com/">The Continental Club</a> has been an Austin
                institution since the '50s. Located on bustling South Congress Avenue, the
                club has live music nearly every night of the week, ranging from blues to
                rock to traditional country.
              </p>
              <p>
                <a target="_blank" href="http://www.cboys.com/">C-Boy's Heart & Soul</a> is another great club on South
                Congress where you can catch live music or try your luck at chicken-shit
                bingo.
              </p>
              <p>
                <a target="_blank" href="https://www.elephantroom.com">The Elephant Room </a> is a hole-in-the-wall
                jazz club with live music nightly.
              </p>
            </div>
          </div>
        `
      ),
      image: ''
    };
  }
}
