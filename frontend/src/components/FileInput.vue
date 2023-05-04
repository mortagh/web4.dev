<template>
    <div>
        <label class="block mb-2 text-base text-white" for="file_input">{{name}}</label>
        <input
        class="block w-full
        text-purple font-base bg-white
        px-3 pl-0
        overflow-hidden
        outline-none
        border-black border-2 rounded-input cursor-pointer"
         id="file_input" type="file" accept="image/png, image/jpeg">
    </div>

</template>

<script>
export default {
    name: 'FileInput',
    props: {
        name: String
    },
    data() {
        return {
            value: ""
        };
    },
}
</script>

<style>
    input#file_input::file-selector-button {
        background: #171717 !important;
        border: none;
        color: white;
        height: 100%;
        padding: 8px 12px;
        cursor: pointer;
    }
</style>