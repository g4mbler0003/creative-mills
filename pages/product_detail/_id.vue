<template>

<div>

<div class="text-wrapper p-4">
  <div class="flex items-center justify-between mb-3">
    <div class="media-content">

        <span class="text-2xl lg:text-4xl">{{ product.title }}</span>


    </div>
  </div>
  <div class=" w-9/10 lg:w-2/3">
    <p class=" text-md lg:p-3 lg:text-2xl">{{ product.description }}</p>

</div>
    <div class="flex  right-50 p-2 relative w-5/5 lg:w-1/2">

      <p class=" m-9 left-40 p-1 text-3xl"> Price &dollar; {{ product.price }}


</p>
      <button class="right-5 px-2 rounded-full bg-blue text-white" v-if="!product.isAddedToCart" @click="addToCart(product.id)">{{ addToCartLabel }}</button>
      <button class="right-5 px-2 rounded-full bg-red text-white" v-if="product.isAddedToCart" @click="removeFromCart(product.id, false)">{{ removeFromCartLabel }}</button>
      </div>
  </div>
  <div v-if="showImage1" class='bg-grey_light w-5/5 flex items-center justify-center'>
    <div class='bg-white p-8 rounded'>
       <img  :src="product.image1" class='object-fill  h-[450] w-[450]' alt="Placeholder image">
        <button class="button mt-4 bg-blue text-white font-bold px-4 py-2 rounded-full" @click='showImage1 = !showImage1'>Close</button>
    </div>
  </div>
  <div v-if="showImage2" class='bg-grey_light h-[450] w-[450] flex items-center justify-center'>
    <div class='bg-white p-8 rounded'>
       <img  :src="product.image2" alt="Placeholder image">
        <button class="bg-blue text-white font-bold px-4 py-2 rounded-full" @click='showImage2 = !showImage2'>Close</button>
    </div>
  </div>
  <div v-if="showImage3" class='bg-grey_light h-[450] w-[450] flex items-center justify-center'>
    <div class='bg-white p-8 rounded'>
       <img  :src="product.image3" alt="Placeholder image">
        <button class="bg-blue text-white font-bold px-4 py-2 rounded-full" @click='showImage3 = !showImage3'>Close</button>
    </div>
  </div>
  <div v-if="showImage4" class='bg-grey_light h-[450] w-[450] flex items-center justify-center'>
    <div class='bg-white p-8 rounded'>
       <img  :src="product.image4" alt="Placeholder image">
        <button class="bg-blue text-white font-bold px-4 py-2 rounded-full" @click='showImage4 = !showImage4'>Close</button>
    </div>
</div>

<div class="rounded-2xl shadow-xl shadow-slate-300/60">
    <div class="img-wrapper rounded-t-2xl">

      <button>
      <img class="image justify-center rounded-t-xl" @click="showImage1 = !showImage1" :src="product.image1" alt="Placeholder image">
      </button>
  <section class="pt-8 px-4">
   <div class="flex flex-wrap mx-4">
     <div class="w-1/3 px-4 mb-8">
        <button><img class="rounded-t-2xl" @click="showImage2 = !showImage2" :src="product.image2" alt="Placeholder image"></button>
     </div>
     <div class="w-1/3 px-4 mb-8">
         <button><img class="rounded-t-2xl" @click="showImage3 = !showImage3" :src="product.image3" alt="Placeholder image"></button>
     </div>
     <div class="w-1/3 px-4 mb-8">
         <button><img class="rounded-t-2xl" @click="showImage4 = !showImage4" :src="product.image4" alt="Placeholder image"></button>
     </div>
   </div>
  </section>
  <div class="w-250">
        <p class="detail text-sm">{{ product.moredetails }}</p>
</div>
</div>
</div>




</div>
</div>
</template>




<script>
import Product from '@/components/Products.vue'
export default {
  name: 'product_detail-id',

  components: {
    Product
  },

  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },

  data () {
    return {
      product: {},
      selected: 1,
      quantityArray: [],
      showImage1: false,
      showImage2: false,
      showImage3: false,
      showImage4: false,
      addToCartLabel: 'Add to cart',
      removeFromCartLabel: 'Remove from cart',
    };
  },

  mounted () {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    this.selected = this.product.quantity;

    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }
  },

  computed: {
    isAddedBtn () {
      return this.product.isAddedBtn;
    }
  },

  methods: {
    addToCart (id) {
      let data = {
        id: id,
        status: true
      }
      this.$store.commit('addToCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    removeFromCart (id) {
      let data = {
        id: id,
        status: false
      }
      this.$store.commit('removeFromCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    onSelectQuantity (id) {
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
    },
    saveToFavorite (id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit('addToFavourite', id);
      } else {
        this.$store.commit('showLoginModal', true);
      }
    },
    removeFromFavourite (id) {
      this.$store.commit('removeFromFavourite', id);
    }
  }
};
</script>

<style lang="scss" scoped>

 .image {
    height:200px;
    margin: 5px
 }
  .detail {
    @apply flex;
    @apply flex-col;
    @apply lg:flex-row;
    @apply m-3;
    @apply shadow-2xl;

    .img-wrapper {
      flex: 1;

      img {
        @apply lg:rounded-none;
        @apply lg:rounded-tl-2xl;
        @apply lg:rounded-bl-2xl;
      }
    }

    .text-wrapper {
      flex: 2;
    }
  }
</style>
