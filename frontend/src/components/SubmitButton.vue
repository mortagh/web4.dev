<template>
    
    <input type="submit" :value="name"
    class="
    bg-black text-white
    font-base
    rounded-main
    border-2 border-black
    py-2.5 px-6
    cursor-pointer
    hover:bg-white hover:text-purple
    ">

</template>

<script>

export default {
    name: 'Input',
    props: {
        name: {
            required: true
        },
    },
    data() {
        return {
        };
    },

}
</script>