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
                <form @submit.prevent="addMeme()"
                    class="flex flex-col w-2/3 gap-8 px-12 pt-4 pb-6 max-md:w-full max-md:px-8 max-md:pt-2"
                >
                    <MyInput
                        name="name"
                        placeholder="Nom"
                        v-model="meme.name"
                    />
                    <FileInput name="image" v-model="meme.image" />
                    <MyInput
                        name="text-top"
                        placeholder="Texte du haut"
                        v-model="meme.textTop"
                    />
                    <MyInput
                        name="text-bottom"
                        placeholder="Texte du bas"
                        v-model="meme.textBottom"
                    />
                    <MySelect
                        placeholder="Tags"
                        :tags="tags"
                        v-model="meme.tags"
                    />
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
import MyInput from "../components/MyInput.vue";
import SubmitButton from "../components/SubmitButton.vue";
import { myFetch } from "../composable/http";
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
            tags: [],
        };
    },

    methods: {
        async addMeme() {
            const data = new FormData();
            console.log(this.meme.image);
            data.append("name", this.meme.name);
            data.append("image", this.meme.image);
            data.append("topText", this.meme.textTop);
            data.append("bottomText", this.meme.textBottom);
            data.append("tags", this.meme.tags.join(","));
            if (
                data.get("name") === "" ||
                data.get("image") === null ||
                data.get("textTop") === "" ||
                data.get("textBottom") === ""
            ) {
                alert("Veuillez remplir tous les champs");
                return;
            }

            myFetch("http://localhost:3000/memes/create", {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",

                },
                body: data,
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Erreur lors de la création du meme");
                    }
                    // Réinitialisez le formulaire
                    this.meme.name = "";
                    this.meme.image = "";
                    this.meme.textTop = "";
                    this.meme.textBottom = "";
                    this.meme.tags = [];
                })
                .catch((error) => {
                    console.error(error);
                    // Affichez un message d'erreur à l'utilisateur
                    alert("Erreur lors de la création du meme");
                });
        },
        async getTags() {
            const response = await myFetch("http://localhost:3000/tags");
            const tags = await response.json();
            this.tags = tags;
        },
    },

    created() {
        this.getTags();
    },
};
</script>
