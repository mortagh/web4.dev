<script setup>
import MemeButton from '../components/MemeButton.vue'
import LogoutButton from '../components/LogoutButton.vue'
import IconButton from '../components/IconButton.vue'
import SubmitButton from '../components/SubmitButton.vue'
import Input from '../components/Input.vue'

//data fake
const memes = [
  {name : "Meme 1", image : "https://picsum.photos/400/400"},
  {name : "Meme 2", image : "https://picsum.photos/400/400"},
  {name : "Meme 3", image : "https://picsum.photos/400/400"},
  {name : "Meme 4", image : "https://picsum.photos/400/400"},
]

</script>

<template>
  <main>
    <h1 class="font-main font-semibold text-purple text-5xl text-center">Bienvenue sur Meme4.dev</h1>
    <MemeButton />
    <LogoutButton />
    <IconButton icon="download"/>
    <SubmitButton name="envoyer" />
    <Input name="test" />
    <section class="memes">
      <div class="meme" v-for="meme in memes" :key="meme.name">
        <h2>{{ meme.name }}</h2>
        <div class="image">
          <img :src="meme.image" alt="meme">
        </div>
      </div>
    </section>


  </main>
</template>

<style scoped>

main {
  margin: 2rem;
}

.memes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.meme {
  max-width: 200px;
  max-height: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
}

.image {
  max-width: 100%;
  max-height: 100%;
}

.meme img {
  max-width: 100%;
  max-height: 100%;
}

</style>
