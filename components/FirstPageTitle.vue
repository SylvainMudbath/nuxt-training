<template>
  <h1 class="title">{{ titleText }}</h1>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ArrayPropsDefinition, PropsDefinition } from 'vue/types/options'
type FirstPageTitleProps = {
  titleText: string
}

export default Vue.extend({
  name: 'FirstPageTitle',
  props: {
    titleText: {
      type: String,
      required: true,
    } as PropOptions<string>,
  },
  // props: ['title'] as ArrayPropsDefinition<FirstPageTitleProps>,
})
</script>

<style scoped>
.title {
  color: red;
}
</style>
