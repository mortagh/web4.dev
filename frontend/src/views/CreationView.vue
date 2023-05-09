<template>
  <main class="pb-20">
    <section
      class="flex flex-col bg-purple rounded-main w-3/5 mx-auto p-8 pb-0 max-md:w-4/5 max-md:p-4 max-md:pb-8"
    >
      <h1
        class="font-main font-semibold text-white text-5xl text-center mb-12 max-md:mb-8"
      >
        Créer un meme
      </h1>
      <div class="flex relative">
        <form
          class="flex flex-col w-2/3 gap-8 px-12 pt-4 pb-6 max-md:w-full max-md:px-8 max-md:pt-2"
        >
          <MyInput name="name" placeholder="Nom" />
          <FileInput name="Image" />
          <MyInput name="text-top" placeholder="Texte du haut" />
          <MyInput name="text-bottom" placeholder="Texte du bas" />
          <MySelect placeholder="Tags" />
          <SubmitButton name="Créer" />
        </form>
        <img
          class="w-1/3 max-md:hidden self-end"
          src="/public/illustration1.svg"
          alt="illustration"
        />
      </div>
    </section>
  </main>
</template>

<script>
import MySelect from '../components/MySelect.vue';
import FileInput from '../components/FileInput.vue';
import MyInput from '../components/MyInput.vue';
import SubmitButton from '../components/SubmitButton.vue';
import { myFetch } from '../composable/http';
export default {
    components: {
      MySelect,
      FileInput,
      MyInput,
      SubmitButton,
    },

    data() {
      return {
        meme: {
          name: "",
          image: "",
          textTop: "",
          textBottom: "",
          tags: [],
        },
      };
    },

    methods: {
      async getTags() {
        const response = await myFetch("http://localhost:3000/tags");
        const tags = await response.json();
        this.tags = tags;
      },

      async addMeme() {
        const data = {
          name: this.meme.name,
          image: this.meme.image,
          textTop: this.meme.textTop,
          textBottom: this.meme.textBottom,
          tags: this.meme.tags,
        };

        // Envoyez la requête POST pour ajouter le meme
        fetch("http://localhost:3000/memes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.ok) {
              this.$router.push({ path: "/memes" });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
    },

    created() {
      this.getTags();
    },
  };
</script>
