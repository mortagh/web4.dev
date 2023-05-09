<template>
  <a
    @click="logout"
    class="group bg-white text-black font-main text-base rounded-main px-6 py-2.5 flex items-center gap-2 w-max relative border-2 border-black cursor-pointer hover:bg-black hover:text-white hover:pr-10 hover:pl-3 transition-all duration-300 max-md:p-2.5 max-md:aspect-square"
  >
    <p class="font-medium max-md:hidden">Se déconnecter</p>
    <font-awesome-icon
      class="absolute -right-2 opacity-0 duration-300 text-white group-hover:opacity-100 group-hover:right-3 max-md:relative max-md:opacity-100 max-md:text-black max-md:right-0"
      :icon="['fas', 'right-from-bracket']"
    />
  </a>
</template>

<script>
export default {
  name: "LogoutButton",
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
