<template>

    <input required :type="type" :name="name" :id="name" :placeholder="placeholder"
    @change="$emit('input', value)" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    class="
    text-purple
    font-base
    py-2 px-3
    rounded-input border-2 border-black outline-none
    placeholder:text-purple
    focus-visible:bg-purple
    focus-visible:text-white
    ">

</template>

<script>

export default {
    name: 'MyInput',
    props: {
        name: {
            required: true,
            type: String
        },
        type: {
            default: "text",
            type: String
        },
        placeholder: String,
        modelValue: {
            type: String
        }
    },
    data() {
        return {
            value: ""
        };
    },

}
</script>
