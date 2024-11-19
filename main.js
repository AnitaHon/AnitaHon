
/*---------------------------------------------- 1 -----------------------------------------------*/
import Glide from '@glidejs/glide';
import anime from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
    const config = {
        type: 'carousel',   // Carousel type to ensure it behaves like a carousel
        perView: 1,         // Ensure only one image is shown at a time
        gap: 0,             // No gap between slides
        focusAt: 'center',  // Focus the current slide at the center
        autoplay: false     // Disable autoplay if not needed
    };
    
    new Glide('.glide', config).mount(); // Mount Glide with the config
});
/*----------------------------------------------  -----------------------------------------------*/

