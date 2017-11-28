<template>
  <div class="list">
    <div class="columns is-gapless" >
      <div class="column is-3" v-for="(item, index) in data">
        <div class="content">
          <listitem :dataItem="item" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import listitem from './ListItem'
  export default {
    components: {
      listitem
    },
    props: {
      data: Array
    }
  }
</script>

<style scoped>
  .content {
    padding: 12px;
  }
</style>