<script setup>
import MemeButton from './MemeButton.vue'
import LogoutButton from './LogoutButton.vue'
import TagButton from './TagButton.vue'
</script>

<template>
  <header
  class="
  bg-white shadow-main
  py-2 px-16 mb-12
  w-full
  flex justify-between items-center
  max-md:px-6
  ">
    <RouterLink to="/"><img src="/logo.svg" alt="logo Meme4.dev" class="
      h-24
      "></RouterLink>
    <nav 
    class="
    flex gap-6 items-center">
      <MemeButton/>
      <TagButton/>
      <LogoutButton/>
    </nav>
  </header>


</template>