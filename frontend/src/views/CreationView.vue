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
import MySelect from "../components/MySelect.vue";
import FileInput from "../components/FileInput.vue";
export default {
  components: {
    MySelect,
    FileInput,
  },
  data() {
    return {
      meme: {},
    };
  },
  methods: {
    addMeme() {
      // Envoyez la requête POST pour ajouter le tag
      fetch("http://localhost:3000/memes/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la création du meme");
          }
          // Réinitialisez le formulaire
          this.meme = {};
        })
        .catch((error) => {
          console.error(error);
          // Affichez un message d'erreur à l'utilisateur
          alert("Erreur lors de la création du meme");
        });
    },
    beforeMount() {
      if (this.$route.path !== "/login") {
        if (localStorage.getItem("connection") !== "true") {
          this.$router.push({ path: "/login" });
        }
      }
    },
  },
};
</script>
