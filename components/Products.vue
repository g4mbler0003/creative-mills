<template>

<div>
  <div v-if="showImage1" class='bg-grey_light  h-[450] w-[450] flex items-center justify-center'>
    <div class='bg-white p-8 rounded'>
       <img  :src="product.image1" class=' object-fill' alt="Placeholder image">
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
<div :class="[detail ? 'detail' : '']" class="rounded-2xl shadow-xl shadow-slate-300/60">
    <div class="img-wrapper rounded-t-2xl">
      <nuxt-link
        :to="{
          name: 'product_detail-id',
          params: {
            id: product.id,
            title: product.title,
            dimensions: product.dimensions,
            price: product.price,
            isAddedBtn: product.isAddedBtn,
            image1: product.image1,
            image2: product.image2,
            image3: product.image3,
            image4: product.image4
          }
        }"



 </nuxt-link>
</div>


    <div class="text-wrapper p-4">
      <div class="flex items-center justify-between mb-3">
        <div class="media-content">
          <nuxt-link
              :to="{
                name: 'product_detail-id',
                params: {
                  id: product.id,
                  title: product.title,
                  dimensions: product.dimensions,
                  price: product.price,
                  isAddedBtn: product.isAddedBtn,
                  image1: product.image1,
                  image2: product.image2,
                  image3: product.image3,
                  image4: product.image4
                }
              }"
            >
            <p class="text-xl font-bold">{{ product.title }}</p>

              <p class="text-md ml-4 mt-2 mb-4">{{ product.dimensions }}
                 <button class=" italic bg-blue rounded-full text-white text-sm px-2 py-1">more info...</button>
              </p>
              </nuxt-link>
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

        </div>
      </div>
      <div class="content is-clearfix">
        <p :class="[detail ? 'text-2xl' : 'text-base']"></p>
        <div class="flex justify-between">
          <div class="flex items-right">
          </div>

          <p class="text-2xl font-medium">
            Price <strong>&dollar; {{ product.price }}</strong>
          </p>
        </div>

          </select>
          <button class="rounded-xl p-3 m-3 bg-blue text-white" v-if="!product.isAddedToCart" @click="addToCart(product.id)">{{ addToCartLabel }}</button>
          <button class="bg-red rounded-xl p-3" v-if="product.isAddedToCart" @click="removeFromCart(product.id, false)">{{ removeFromCartLabel }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'products',
  props: ['product', 'detail'],

  data () {
    return {
      addToCartLabel: 'Add to cart',
      viewDetailsLabel: 'Details',
      removeFromCartLabel: 'Remove from cart',
      removeFromFavouriteLabel: 'Remove from favourite',
      selected: 1,
      quantityArray: [],
      showImage1: false,
      showImage2: false,
      showImage3: false,
      showImage4: false,
    }
  },

  mounted () {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity;
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
    }
  }
}
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
    @apply m-5;
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
