<template>
  <div class="list-item">
    <div class="list-item-img">
      <img src="" alt="">
    </div>
    <div class="list-item-subtitle">
      <p>{{dataItem.subtitle}}</p>
    </div>
    <div class="list-item-info">
      <h3 class="list-item-info-title">{{dataItem.title}}</h3>
      <p class="list-item-info-subtitle">{{dataItem.type}}</p>
      <p class="list-item-info-subtitle">{{dataItem.price}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      dataItem: Object
    }
  }
</script>

<style scoped>
  .list-item-img {
    margin-bottom: 15px;
  }
  .list-item-img img {
    width: 220px;
    height: 220px;
    background: lightgray;
    display: block;
  }
  .list-item-subtitle {
    width: 220px;
    font-size: 13px;
    color: #000;
    font-weight: 600;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 5px;
    padding-bottom: 4px;
  }
  .list-item-info-title {
    font-size: 15px;
    font-weight: bold;
    color: #000;
    line-height: 21px;
  }
  .list-item-info-subtitle {
    color: #ccc;
    font-size: 14px;
    font-weight: normal;
  }
</style>