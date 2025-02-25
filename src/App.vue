<script>
import Appheader from './components/Appheader.vue';
import AppLandingPage from './components/AppLandingPage.vue';
import AppCardsPlace from './components/AppCardsPlace.vue';
import AppHotels from './components/AppHotels.vue';
import AppGallery from './components/AppGallery.vue';
import AppPlans from './components/AppPlans.vue';
import AppCruiseship from './components/AppCruiseship.vue';
import AppFooter from './components/AppFooter.vue';






export default {
  components:{
    Appheader,
    AppLandingPage,
    AppCardsPlace,
    AppHotels,
    AppGallery,
    AppPlans,
    AppCruiseship,
    AppFooter
    
  }
}
</script>
<template lang="">
  <div>
    <Appheader />
    <AppLandingPage />
    <AppCardsPlace />
    <AppHotels />
    <AppGallery />
    <AppPlans />
    <AppCruiseship />
    <AppFooter />
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss'
</style>