<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '~bulma';
body, h1, h2, h3, p {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
