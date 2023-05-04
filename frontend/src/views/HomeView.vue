<script setup>
import MemeCard from '../components/MemeCard.vue'

//data fake
const memes = [
  {name : "Meme 1", image : "https://picsum.photos/400/400", tags : ["tag1", "tag2"]},
  {name : "Meme 2", image : "https://picsum.photos/400/400", tags : ["tag1", "tag2"]},
  {name : "Meme 3", image : "https://picsum.photos/400/400", tags : ["tag1", "tag2"]},
  {name : "Meme 4", image : "https://picsum.photos/400/400", tags : ["tag1", "tag2"]},
]

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