<template>
    <main class="pb-20">
        <section
        class="
        flex flex-col
        bg-purple
        rounded-main
        w-3/5 mx-auto p-8 pb-0
        max-md:w-4/5 max-md:p-4  max-md:pb-8">
            <h1 class="font-main font-semibold text-white text-5xl text-center mb-12 max-md:mb-8">Connexion</h1>
            <div
            class="
            flex">
                <img class="w-1/3 max-md:hidden self-end" src="/public/illustration2.svg" alt="illustration">
                <form class="
                flex flex-col w-2/3 gap-8 px-12 pt-4 pb-6
                max-md:w-full max-md:px-8 max-md:pt-2">
                    <MyInput name="user" placeholder="Utilisateur" v-model="admin.username"/> 
                    <MyInput name="password" placeholder="Mot de passe" type="password" v-model="admin.password"/>
                    <SubmitButton name="Se connecter" @click="login()"/>
                </form>
            </div>

        </section>

    </main>
</template>

<script>

export default {
    name: 'LoginView',
    data() {
        return {
            admin: {
                username: "",
                password: ""
            }
        };
    },

    methods: {

        login() {
            if (this.admin.username === "admin" && this.admin.password === "admin") {
                localStorage.setItem("connection", true);
                window.location.href = "/";
            } else {
                alert("DEGAGE T'ES PAS ADMIN");
            }
        },
    },

}
</script>
