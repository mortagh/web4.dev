<template>
  <main class="pb-20">
    <section
      class="flex flex-col bg-purple rounded-main w-3/5 mx-auto p-8 pb-0 max-md:w-4/5 max-md:p-4 max-md:pb-8"
    >
      <h1
        class="font-main font-semibold text-white text-5xl text-center mb-12 max-md:mb-8"
      >
        Ajouter un tag
      </h1>
      <div class="flex relative gap-8">
        <img
          class="w-1/3 max-md:hidden self-end"
          src="/public/illustration2.svg"
          alt="illustration"
        />
        <div class="flex relative flex-col w-2/3 mb-6 items-center">
          <form
            class="flex flex-col w-full gap-8 px-12 pt-4 pb-6 max-md:px-8 max-md:pt-2"
          >
            <MyInput name="tag" placeholder="Tag" v-model="tag.name" />
            <SubmitButton name="Ajouter" @click="addTag()" />
          </form>
          <table class="w-3/5 text-black mt-4">
            <tr v-for="tag in tags" class="border-b-2 border-black">
              <td class="pl-4 py-1 w-11/12">{{tag.name}}</td>
              <td @click="deleteTag(tag.id)" class="pr-4 hover:text-white cursor-pointer"><font-awesome-icon :icon="['fas', 'trash']" /></td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { myFetch } from "../composable/http";

export default {
  name: "CreationTagView",
  data() {
    return {
      tag: {
        name: "",
      },
      tags: []
    };
  },
  methods: {

      async getTag() {
        const response = await myFetch("http://localhost:3000/tags");
        const tags = await response.json();
        this.tags = tags;
      },

    addTag() {
      const data = {
        name: this.tag.name,
      };

      // Envoyez la requête POST pour ajouter le tag
      fetch("http://localhost:3000/tags", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la création du tag");
          }
          // Réinitialisez le formulaire
          this.tag.name = "";
        })
        .catch((error) => {
          console.error(error);
          // Affichez un message d'erreur à l'utilisateur
          alert("Erreur lors de la création du tag");
        });
    },
    async deleteTag(id) {
      await fetch(`http://localhost:3000/tags/${id}`, { method: "DELETE" });
      this.getTags();
    },

    async getTags() {
      const response = await fetch(`http://localhost:3000/tags`, { method: "GET" });
      const tags = await response.json();
      this.tags = tags;
    }
  },

  async created() {
    await this.getTag();
  },
};
</script>
