<template>

    <input :type="type" :name="name" :id="name" :placeholder="name" v-model="value"
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
            required: true
        },
        type: {
            default: "text"
        }
    },
    data() {
        return {
            value: ""
        };
    },

}
</script>
