<template>
    <div class="pb-20">
        <h1>This is a login page</h1>

        <form>
            <MyInput name="name" v-model="admin.username"/> 
            <MyInput name="password" type="password" v-model="admin.password"/>
            <SubmitButton name="login" @click="login()"/>
        </form>

    </div>
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
