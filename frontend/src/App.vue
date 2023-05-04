<script setup>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
</script>

<template>
  <MyHeader />
  <RouterView />
  <MyFooter />
</template>

<script>
export default {

  mounted() {

  }

}
</script>
