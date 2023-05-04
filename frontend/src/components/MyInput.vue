<template>

    <input :type="type" :name="name" :id="name" :placeholder="placeholder" v-model="value"
    @change="$emit('input', value)" 
    class="
    text-purple
    font-base
    py-2 px-3
    rounded-input border-2 border-black
    placeholder:text-purple
    focus-visible:bg-purple
    focus-visible:text-white
    ">

</template>

<script>

export default {
    name: 'Input',
    props: {
        name: {
            required: true,
            type: String
        },
        type: {
            default: "text",
            type: String
        },
        placeholder: String
    },
    data() {
        return {
            value: ""
        };
    },

}
</script>
