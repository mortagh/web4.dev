<script setup>
import MyHeader from './components/MyHeader.vue'
</script>

<template>
  <MyHeader />
  <RouterView />
</template>

<style scoped>

</style>

<script>
export default {

  beforeMount() {
    if (window.location.href !== "http://localhost:5173/login"){
      if(localStorage.getItem('connection') === 'false') {
        window.location.href = "/login";
      }
    }
    console.log("beforeMount")
  },

  mounted() {

  }

}
</script>
