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
      bg-purple text-white px-6 
      hover:bg-white hover:text-purple hover:pr-8 hover:pl-3
      cursor-pointer
      ">
    <p class="font-medium max-md:hidden">Créer un meme</p>
    <font-awesome-icon 
      class="
        absolute
        duration-300
        text-purple
        max-md:relative max-md:opacity-100 max-md:right-0
        opacity-0 -right-2 
        group-hover:opacity-100 group-hover:right-3
        max-md:text-white"
      :icon="['fas', 'plus']" />
  </RouterLink>
</template>

<script>
export default {
  name: "MemeButton"
};
</script>

<style scoped>
.router-link-active {
    background: white !important;
    color: #6300FF !important;
    cursor: default !important;
}

@media screen and (min-width: 768px) {
  .router-link-active {
    padding: 10px 32px 10px 12px !important;
  }
  .router-link-active svg {
    opacity: 1 !important;
    right: 12px !important;
  }
}
@media not all and (min-width: 768px) {
  .router-link-active svg {
    color: #6300FF;
  }
}

</style>
