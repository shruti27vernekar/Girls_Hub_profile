<template>
  <div id="app">
    
    <HeaderPage />
    <HomePage />
    <CardProfile />
    <ReviewData />
    <FooterPage />
    
  </div>
</template>

<script>
    import HeaderPage from './components/Header.vue'
    import HomePage from './components/HomePage.vue'
    import CardProfile from './components/Card.vue'
    import ReviewData from './components/Review.vue'
    import FooterPage from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderPage,
    HomePage,
    CardProfile,
    ReviewData,
    FooterPage
  }
}
</script>

<style>

</style>
