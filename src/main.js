import '../styles/style.css'
import '../styles/utils.css'
import '../styles/modern-normalize.css'
import '../styles/components/header.css'
import '../styles/components/carousel.css'
import '../styles/components/dealOfTheDay.css'
import '../styles/components/menWears.css'
import '../styles/components/womenWears.css'
import '../styles/components/kidWears.css'

import render from './utils/render'
import carouselFunction from './utils/carousel';
import darkMode from './utils/darkMode.js';
import renderWomen from './utils/renderWomen'
import renderKid from './utils/renderkid'
import kidData from './utils/allData'
import menData from './utils/allData'

carouselFunction();
darkMode();
render(menData);
renderWomen();
renderKid(kidData);
