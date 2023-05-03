<script setup>
import MemeButton from './MemeButton.vue'
import LogoutButton from './LogoutButton.vue'
</script>

<template>
  <header
  class="
  bg-white shadow-main
  py-2 px-16 mb-6
  w-full
  flex justify-center items-center
  relative
  ">
    <RouterLink to="/"><img src="/logo.svg" alt="logo Meme4.dev" class="
      h-24
      "></RouterLink>
    <nav 
    class="flex gap-6 items-center absolute right-16">
      <MemeButton/>
      <LogoutButton/>
    </nav>
  </header>


</template>