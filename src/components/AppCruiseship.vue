<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">Keep Calm And Cruise On</h1>
                <p class="text-center mt-5">vieni a scoprire tutti i nostri pacchetti per goderti al meglio il viaggio attraverso le nostre bellissime crociere</p>
            </div>
        </div>
        <div class="row mt-5">
          <div class="col-7 sfondo">
            <iframe src='https://my.spline.design/untitledcopy-9910e96266ebefe583d3cd1d530c606c/' frameborder='0' width='100%' height='500px'></iframe>
          </div>
          <div class="col-5">
            <h3 class="mb-5 ms-3"> Grazie a MSC ti aiutiamo a rendere la tua vacanza indimenticabile grazie ai nostri pacchetti con prezzi imperdibili</h3>
            <h5 class="ms-3">Perche MSC e anche noi di Viaggiando.com ci teniamo ai nostri clienti.</h5>
              <p class="ms-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente reprehenderit perferendis, quisquam soluta harum doloremque numquam eius ipsa unde omnis repellendus possimus veritatis corrupti ducimus suscipit eaque consequatur est?</p>
              <p class="ms-3">cosa aspetti? molte avventure ti attendono!</p>
          </div>
        </div>
    </div>
    <div class="carousel-container">
      <swiper
        :pagination="{ clickable: true }"
        :loop="true"
        :breakpoints="{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }"
      >
        <swiper-slide 
          v-for="(image, index) in images" 
          :key="index" 
          :class="{ 'center-slide': index === Math.floor(images.length / 2) }">
          <img :src="image.src" alt="Slide" />
          <div class="image-caption margin fs-2">{{ image.name }}</div>
          <div class="image-caption margin fs-6">{{ image.descrizione }}</div>
          <div class="image-caption margin fs-4">{{ image.price }}</div>
          <div class="image-caption margin fs-2 text-primary">{{ image.compagnia }}</div> <!-- Nome sotto l'immagine -->
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  import gallery1 from '../assets/img/bahamas-gallery-1.webp';
  import gallery2 from '../assets/img/maldive-gallery-2.gif';
  import gallery3 from '../assets/img/europa-gallery-3.avif';
  import gallery4 from '../assets/img/caraibi-gallery-4.jpg';
  import gallery5 from '../assets/img/grecia-gallery-5.jpg';
  import gallery6 from '../assets/img/messico-gallery-6.jpeg';
 
  
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        images: [
          { src: gallery1, name: 'Bahamas', price: '350 euro', descrizione:'10 giorni nel mare cristallino delle bahamas ', compagnia:'MSC' },
          { src: gallery2, name: 'Maldive', price: '500 euro', descrizione: '7 giorni di puro relax nel posto dei tuoi sogni', compagnia: 'COSTA' },
          { src: gallery3, name: 'Europa', price: '425 euro', descrizione: 'goditi 12 giorni alla scoperta della nostra europa', compagnia: 'MSC' },
          { src: gallery4, name: 'Caraibi', price: '760 euro', descrizione: ' prenditi 5 giorni per te e immergiti nelle acque azzurre dei caraibi', compagnia: 'MSC' },
          { src: gallery5, name: 'Grecia', price: '600 euro', descrizione: ' per 8 giorni vieni a scoprire la meta piu visitata del 2024, GRECIA!!!', compagnia: 'MSC' },
          { src: gallery6, name: 'Messico', price: '530 euro', descrizione: 'con 5 giorni potrai goderti un avventura. Messico stiamo arrivando ', compagnia: 'COSTA' },
         
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .carousel-container {
    width: 100%;
    height: 600px; /* Imposta l'altezza totale del contenitore */
    margin: auto;
    
  }
  
  .carousel-container img {
    width: 100%;
    width: 400px;
    height: auto;
    border-radius: 10px;
    
  }
  
  .swiper-slide {
    display: flex;
    flex-direction: column; /* Aggiungi questa linea per allineare il testo sotto l'immagine */
    justify-content: center;
    align-items: center;
    height: 400px; /* Imposta un'altezza fissa per le slide */
    transition: transform 0.3s; /* Aggiungi una transizione per un effetto più fluido */
    margin-top: 50px; /* Aggiungi un margine superiore per abbassare le slide laterali */
   
  }
  
  .image-caption {
    margin-top: 10px; /* Aggiungi spazio tra l'immagine e il testo */
    font-size: 16px; /* Dimensione del font */
    text-align: center; /* Centra il testo */
  
  }
  
  .swiper-slide img {
    height: 200px;
    object-fit: cover;
   
  }

  .container{
    overflow: hidden;
  }

  .sfondo{
    background-image: url(../assets/img/sfondo-mare.webp);
    background-size: cover;
    background-position: bottom, center;
  }
  </style>
  
  
  
  
  
  
  

  
   