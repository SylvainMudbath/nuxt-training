<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'FirstPageTitle',
  props: {
    title: {
      type: String,
    },
  },
}
</script>

<style scoped>
.title {
  color: red;
}
</style>
