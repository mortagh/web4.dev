
<script>
export default {
    name: 'IconButton',
    props: {
        icon: {
            required: true
        }
    },
    data() {
        return {
        };
    },
}
</script>

<template>

    <button

    class="
    rounded-main
    text-purple bg-white
    p-2.5
    w-10 h-10
    flex items-center justify-center
    border-2 border-black
    cursor-pointer
    aspect-square
    hover:text-white hover:bg-purple
    max-md:
    ">
        <font-awesome-icon 
        class="h-4 max-md:h3"
        :icon="['fas', icon]" />
    
    </button>

</template>

