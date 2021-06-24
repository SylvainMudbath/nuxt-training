<template>
  <h1 class="title">{{ titleTextHere }}</h1>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'FirstPageTitle',
  props: {
    titleTextHere: {
      type: String,
      required: true,
    } as PropOptions<string>,
  },
})
</script>

<style scoped lang="scss">
$bg-dark: #232323;

.title {
  color: $bg-dark;
}
</style>
