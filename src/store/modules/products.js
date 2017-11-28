const state = {
  productList: [
    {
      imgURL: 'https://images.nike.com/is/image/DotCom/pwp_sheet2?$NIKE_PWPx3$&$img0=414571_705',
      color: '1 color',
      name: 'Air Jordan 13 Retro',
      type: `Men's Shoe`,
      price: '$190'
    },
    {
      imgURL: 'https://images.nike.com/is/image/DotCom/pwp_sheet2?$NIKE_PWPx3$&$img0=414571_705',
      color: '4 colors',
      name: 'Air Jordan XXXII "Russ"',
      type: `Men's Shoe`,
      price: '$185'
    },
    {
      imgURL: 'https://images.nike.com/is/image/DotCom/pwp_sheet2?$NIKE_PWPx3$&$img0=414571_705',
      color: '1 color',
      name: 'Air Jordan 12 Retro',
      type: `Men's Shoe`,
      price: '$190'
    },
    {
      imgURL: 'https://images.nike.com/is/image/DotCom/pwp_sheet2?$NIKE_PWPx3$&$img0=414571_705',
      color: 1,
      name: 'Air Jordan 13 Retro',
      type: `Men's Shoe`,
      price: '$190'
    }
  ]
}

const getters = {
  productList: state => state.productList
}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
