<template>
  <div class="home">
    <Top/>
    <Navigation/>

  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'Home',
  components: {
    Top,
    Navigation
  }
}
</script>
