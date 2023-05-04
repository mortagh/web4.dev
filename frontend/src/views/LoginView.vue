<template>
    <main class="pb-20">
        <section
        class="
        flex flex-col
        bg-purple
        rounded-main
        w-3/5 mx-auto p-8">
            <h1>Connexion</h1>
            <div>
                <img src="/public/illustration2.svg" alt="illustration">
                <form>
                    <MyInput name="name" placeholder="Utilisateur" v-model="admin.username"/> 
                    <MyInput name="password" placeholder="Mot de passe" type="password" v-model="admin.password"/>
                    <SubmitButton name="Se connecter" @click="login()"/>
                </form>
            </div>

        </section>

    </main>
</template>

<script>
import SubmitButton from "@/components/SubmitButton.vue"
import MyInput from "@/components/MyInput.vue"

export default {
    name: 'LoginView',
    components: {
        SubmitButton,
        MyInput
    },
    data() {
        return {
            connection: false,
            admin: {
                username: "",
                password: ""
            }
        };
    },

    methods: {

        login() {
            if (this.admin.username === "admin" && this.admin.password === "admin") {
                this.connection = true;
                localStorage.setItem("connection", true);
                window.location.href = "/";
            } else {
                alert("Invalid username or password");
            }
        },
    },

}
</script>
