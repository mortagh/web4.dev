<template>
  <RouterLink to="/creation"
    class="
      group
      font-main text-base
      rounded-main
      py-2.5
      flex items-center gap-2
      w-max
      relative
      border-2 border-purple
      
      transition-all duration-300
      max-md:py-2.5 max-md:px-3 max-md:aspect-square
      "
    :class="{'bg-white text-purple pr-8 pl-3 cursor-default': isActive, 'bg-purple text-white px-6 hover:bg-white hover:text-purple hover:pr-8 hover:pl-3 cursor-pointer': !isActive}">
    <p class="font-medium max-md:hidden">Créer un meme</p>
    <font-awesome-icon 
      class="
        absolute
        duration-300
        text-purple
        max-md:relative max-md:opacity-100 max-md:right-0"
        :class="{'opacity-100 right-3 max-md:text-purple': isActive, 'opacity-0 -right-2 group-hover:opacity-100 group-hover:right-3 max-md:text-white': !isActive}"
      :icon="['fas', 'plus']" />
  </RouterLink>
</template>

<script>
export default {
  name: "MemeButton",
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    if (window.location.href === "http://localhost:5173/") {
      this.isActive = false;
    }
  },
};
</script>

<style>
</style>
