<script setup>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
</script>

<template>
  <MyHeader />
  <RouterView />
</template>

<script>
export default {

  beforeMount() {
    if (window.location.href !== "http://localhost:5173/login"){
      if(localStorage.getItem('connection') === 'false') {
        window.location.href = "/login";
      }
    }
    console.log("VACHIER")
  },

  mounted() {

  }

}
</script>
