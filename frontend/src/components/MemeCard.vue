<template>
    <div class="
    group
    relative
    rounded-main
    overflow-hidden
    aspect-square
    max-w-64 max-h-64
    duration-300
    max-md:col-span-2">
        <img :src="image" :alt="name"
        class="
        object-cover
        w-full h-full
        rounded-main">

        <IconButton icon="trash" class="absolute right-3 top-3 max-md:right-1 max-md:top-1"/>

        <div class="
        absolute bottom-0
        h-max w-full
        px-3 py-1
        bg-purple text-white
        flex justify-between items-center
        duration-300
        translate-y-full
        group-hover:translate-y-0
        max-md:translate-y-0 max-md:px-1.5
        ">
            <div class="w-3/4">
                <h3 class="text-xl font-main leading-5">{{ name }}</h3>
                <div class="text-base flex gap-2">
                    <span v-for="tag in tags">{{tag}}</span>
                </div>
            </div>
            <IconButton icon="download"/>
        </div>

    </div>

</template>

<script>
    export default {
    name: 'MemeCard',
    props: {
        name: String,
        image: String,
        tags: Array
    },
    data() {
        return {
        };
    },

}
</script>