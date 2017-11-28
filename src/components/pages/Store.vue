<template>
  <div class="store">
    <list :data="shoeList" />
  </div>
</template>

<script>
  import list from '../element/List'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      list
    },
    computed: {
      ...mapGetters({
        productList: 'product/productList'
      }),
      shoeList () {
        let shoeList = this.productList.map(product => ({
          title: product.name,
          subtitle: product.color,
          price: product.price,
          type: product.type
        }))
        return shoeList
      }
    }
  }
</script>

<style scoped></style>