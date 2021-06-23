<template>
  <div>
    <FirstPageTitle title-text="BOOM" />
    <FirstPageTitle noooo="BOOM" />
    <div>First Page</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FirstPageTitle from '../components/FirstPageTitle.vue'

export default Vue.extend({
  name: 'FirstPage',
  components: { FirstPageTitle },
})
</script>

<style scoped></style>
