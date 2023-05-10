<template>
    <div>
      <VueMultiselect
        required
        v-model="selected"
        :options="tags"
        :multiple="true"
        :close-on-select="false"
        :placeholder="placeholder"
        :openDirection="bottom"
        :searchable="false"
        label="name"
        track-by="name">
      </VueMultiselect>
    </div>
  </template>
  
  <script>
  import VueMultiselect from 'vue-multiselect'
  export default {
    name: 'MySelect',
    components: { VueMultiselect },
    props: {
        placeholder: String,
        tags: Array
    },
    data () {
      return {
        selected: []
      }
    }
  }
  </script>
<style>
    .multiselect {
        position: relative;
    }
    .multiselect__tags {
        border-radius: 16px;
        overflow: hidden;
        background: white;
        padding: 8px 12px;
        border: 2px solid #171717;
        color: #6300FF;
        outline: none;
        z-index: 2;
    }
    .multiselect__content-wrapper {
        z-index: 1;
        background: white;
        border-radius: 0 0 16px 16px;
        padding: 18px 0 8px 0;
        position: absolute;
        width: 100%;
        cursor: pointer;
        top: 70%;
        border: 2px solid #171717;
    }

    .multiselect__content {
        color: #6300FF;
        width: 100%;
    }
    .multiselect__element:hover {
        background: #6300FF;
        color: white;
    }
    span.multiselect__option {
        width: 100%;
        display: block;
    }
    .multiselect__tags-wrap {
        display: flex;
        gap: 8px;
    }
    span.multiselect__tag {
        background: #6300FF;
        color: white;
        padding: 0 10px;
        border-radius: 5px;
    }
    i.multiselect__tag-icon::after {
        content: "x";
        font-family: sans-serif;
        font-style: normal;
        padding-left: 8px;
        font-size: 14px;
        margin-bottom: 2px;
        bottom: 1.5px;
        cursor: pointer;
    }
    span.multiselect__option {
        padding: 0 10px;
        
    }
    span.multiselect__option--selected {
        background: #171717;
        color: white;
    }
</style>