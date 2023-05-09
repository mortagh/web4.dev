<template>
  <main class="pb-20">
    <h1 
      class="
        font-main font-semibold text-purple text-5xl text-center
        max-md:w-4/5 max-md:mx-auto
      "
    >
      Bienvenue sur Meme4.dev
    </h1>
    <section
      class="
        memes
        w-9/12 mx-auto mt-16
        grid grid-cols-4 gap-6
        max-md:w-11/12
      "
    >
      <MemeCard
        v-for="meme in memes"
        :key="meme.id"
        :name="meme.name"
        :image="meme.image"
        :tags="meme.tags"
        :id="meme.id"
        @deleteMeme="deleteMeme(meme.id)"
      />
    </section>
  </main>
</template>

<script>
import MemeCard from '../components/MemeCard.vue';
import { myFetch } from '../composable/http';


export default {
  name: 'HomeView',
  components: { MemeCard },
  data() {
    return {
      memes: [],
    };
  },

  methods: {
    async deleteMeme(id) {
      await fetch(`http://localhost:3000/memes/delete/${id}`, { method: "DELETE" });
      this.getMemes();
    },

    async getMemes() {
      const response = await myFetch('http://localhost:3000/memes');
      const memes = await response.json();
      this.memes = memes;
    }
  },

  async created() {
    await this.getMemes();
  },
};
</script>


