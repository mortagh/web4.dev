<template>
    <a :href="link" 
    
    class="
        group
        bg-purple text-white
        font-main text-base
        rounded-main
        px-6 py-2.5
        flex items-center gap-2
        w-max
        relative
        border-2 border-purple
        cursor-pointer
        hover:bg-white hover:text-purple hover:pr-8 hover:pl-3
        transition-all duration-300
        max-md:py-2.5 max-md:px-3">
    <p class="font-medium max-md:hidden">Créer un meme</p>
        <font-awesome-icon 
        
        class="
            absolute -right-2
            opacity-0 duration-300
            text-purple
            group-hover:opacity-100 group-hover:right-3
            max-md:relative max-md:opacity-100 max-md:text-white max-md:right-0"
         :icon="['fas', 'plus']" />
    </a>
</template>

<style>
</style>

<script>
</script>