import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
// animazioni header and landing page
ScrollReveal().reveal('.titolo', { duration: 2000, delay: 1000 });

ScrollReveal().reveal('.button', { duration: 2000, delay: 2000 });
ScrollReveal().reveal('.menu', { duration: 2000, delay: 300, interval: 400 });
// animazioni card migliori mete

ScrollReveal().reveal('.content-place', { duration: 2000, delay: 500, interval: 400, scale: 0.65 });
// animazione plans
ScrollReveal().reveal('.plans', { duration: 2000, delay: 1400, interval: 400 });

gsap.registerPlugin(ScrollTrigger);

gsap.to(".testo", { opacity: 1, y: 15, duration: 3 });
gsap.to(".aereo", { opacity: 1, y: -25, x: -60, duration: 3 });
