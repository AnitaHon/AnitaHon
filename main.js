
/*---------------------------------------------- 1 -----------------------------------------------*/
import Glide from '@glidejs/glide';
import anime from 'animejs';

new Glide('.glide').mount();

document.addEventListener('DOMContentLoaded', () => {
    new Glide('.glide').mount();
});
const config = {
    type: 'carousel',  // Make sure it's a carousel
    perView: 1,        // Show only 1 slide at a time
    focusAt: 'center', // Focus the current slide at the center of the view
    gap: 0,            // No gap between slides
    autoplay: false,   // Disable autoplay if not needed
}

document.addEventListener('DOMContentLoaded', () => {
    new Glide('.glide', config).mount();
});
/*----------------------------------------------  -----------------------------------------------*/

