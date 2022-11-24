<template>
  <div id="app" >
    <!-- <router-view></router-view> -->
    <ProfileCard />
  </div>
</template>

<script>
  import ProfileCard from './components/Card.vue'

export default {
  name: 'App',
  components: {
    ProfileCard
  }
}
</script>

