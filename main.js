var app = new Vue({
  el: '#app',
  data: {
    product: "Socks",
    brand: "Dorian's Awesome",
    selectedVariant: 0,
    altText: "A pair of socks",
    inventory: 8,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',   
        variantImage: './assets/vmSocks-green-onWhite.jpg',
        variantQuantity: 12
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue-onWhite.jpg',
        variantQuantity: 0
        
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1  
    },
    removeFromCart() {
      this.cart -= 1
    },
    updateProduct(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
        return this.brand + ' ' + this.product  
    },
    image(){
        return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
        return this.variants[this.selectedVariant].variantQuantity
    }
  }
})
