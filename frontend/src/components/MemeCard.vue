<template>
    <div class="
    group
    relative
    rounded-main
    overflow-hidden
    aspect-square
    max-w-64 max-h-64
    duration-300
    max-md:col-span-2"
    v-show="show(filter, tags) || filter == '' ">
        <img :src="'http://localhost:9000/memes-bucket/'+image" :alt="name"
        class="
        object-cover
        w-full h-full
        rounded-main">

        <IconButton @click="deleteMeme(this.id)" icon="trash" class="absolute right-3 top-3 max-md:right-1 max-md:top-1"/>

        <div class="
        absolute bottom-0
        h-max w-full
        px-3 py-1
        bg-purple text-white
        flex justify-between items-center
        duration-300
        translate-y-full
        group-hover:translate-y-0
        max-md:translate-y-0 max-md:px-1.5
        ">
            <div class="w-3/4">
                <h3 class="text-xl font-main leading-5 mb-2">{{ name }}</h3>
                <div class="text-base leading-4 flex gap-2 flex-wrap">
                  <template v-if="tags[0] != null">
                    <span class="bg-white px-2.5 py-0.5 rounded-main text-sm text-purple" v-for="tag in tags">{{tag}}</span>
                  </template>
                </div>
            </div>
            <a download target="_blank" :href="'http://localhost:9000/memes-bucket/'+image"><IconButton icon="download"/></a>
        </div>

    </div>

</template>

<script>
import IconButton from './button/IconButton.vue';

export default {
  name: 'MemeCard',
  props: {
    name: String,
    image: String,
    id: Number,
    tags: Array,
    meme: Object,
    deleteMeme: Function,
    filter: String
  },
  components: {
    IconButton,
  },
  methods: {
    async deleteMeme() {
      await fetch(`http://localhost:3000/memes/delete/${this.id}`, { method: 'DELETE' });
      this.$emit('deleteMeme', this.id);
    },
    show(filter, tags) {
      for (let i = 0; i < tags.length; i++) {
        if (tags[i] === filter) {
          return true
        }
      }
    }
  },
};
</script>