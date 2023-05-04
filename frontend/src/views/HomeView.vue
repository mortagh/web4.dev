<script setup>
import { ref } from 'vue'
import MemeCard from '../components/MemeCard.vue'

const memes = ref([])
const getMemes = async () => {
  const response = await fetch('http://localhost:3000/memes')
  memes.value = await response.json()
}
getMemes()

</script>
<script>
export default {

  beforeMount() {
    if (window.location.href !== "http://localhost:5173/login"){
      if(localStorage.getItem('connection') !== 'true') {
        window.location.href = "/login";
      }
    }
    console.log("beforeMount")
  },

  mounted() {

  }

}
</script>

<template>
  <main class="pb-20">
    <h1 
    class="
    font-main font-semibold text-purple text-5xl text-center
    max-md:w-4/5 max-md:mx-auto
    ">
    Bienvenue sur Meme4.dev</h1>
    <section
    class="memes
    w-9/12 mx-auto mt-16
    grid grid-cols-4 gap-6
    max-md:w-11/12">
      <MemeCard v-for="meme in memes" :key="meme.name" :name="meme.name" :image="meme.image" :tags="meme.tags"/>
    </section>
  </main>
</template>