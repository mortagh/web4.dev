<template>
  <main class="pb-20">
    <h1 
      class="
        font-main font-semibold text-purple text-5xl text-center
        max-md:w-full max-md:mx-auto
      "
    >
      Bienvenue sur Meme4.dev
    </h1>
    <ul
    class="flex w-full flex-row gap-3 m-auto justify-center">
      <button @click="show=''"
      class="text-purple text-base bg-white py-1 px-6 rounded-main
        border-2 border-purple 
        hover:bg-purple hover:text-white"
        :class="{'text-white':show=='', 'bg-purple-important':show==''}">
        <li>
          tous
        </li>
      </button>
      <button v-for="tag in tags" :key="tag.id" @click="filter(tag.name)"
      class="text-purple text-base bg-white py-1 px-6 rounded-main
        border-2 border-purple
        hover:bg-purple hover:text-white"
        :class="{'bg-purple-important':tag.name==show, 'text-white':tag.name==show}">
        <li>{{tag.name}}</li></button>
    </ul>
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
        :filter="show"
        :name="meme.name"
        :image="meme.image"
        :tags="JSON.parse(meme.tag_names)"
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
      tags: [],
      show: ""
    };
  },

  methods: {
    async deleteMeme(id) {
      await myFetch(`http://localhost:3000/memes/delete/${id}`, { method: "DELETE" });
      this.getMemes();
    },

    async getMemes() {
      const response = await myFetch('http://localhost:3000/memes');
      const memes = await response.json();
      this.memes = memes;
    },
    async getTags() {
      const response = await myFetch("http://localhost:3000/tags");
      const tags = await response.json();
      this.tags = tags;
    },

    filter(tag) {
      this.show = tag;
    }
  },

  async created() {
    await this.getMemes();
    await this.getTags();
  },
};
</script>


