<template>

    <input type="text" :name="name" :id="name" :placeholder="name"
    class="
    text-white
    font-base
    py-2 px-3
    rounded-input border-2 border-black
    placeholder:text-purple
    focus-visible:bg-purple
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
