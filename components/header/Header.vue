<template>
    <nav class="flex justify-between sticky top-0 title z-10 shadow-md p-4" role="navigation" aria-label="main navigation">
        <div class="lg:w-750">
            <nuxt-link :to="{ name: 'index' }" class="navbar-item">
                <h1 class="herofont text-white text-[45px] md:text-[90px] lg:text-[100px]">
                    Creative Mills
                </h1>
            </nuxt-link>
            <div class="mb-4">
                <h2 class="ml-8 text-white font-extrabold text-md herofont md:text-[30px] lg:text-2xl lg:h-25">
                    Dream it. Plan it. Build it.
                </h2>
            </div>
        </div>
        <div class="flex items-center">
            <div class="mx-2 text-base">
                <div class="cursor-pointer" @click="showCheckoutModal">
                    <span :class="[numProductsAdded > 0 ? 'p-2 bg-blue text-white rounded-md' : '']">{{ numProductsAdded }}</span>
                    <span class="icon">
                        <i class="fa fa-shopping-cart fa-2x"></i>
                    </span>
                </div>
            </div>
        </div>
    </nav>
</template>


<script>
  export default {
    name: 'VmHeader',

    data () {
      return {
        isCheckoutActive: false,
      }
    },

    computed: {
      numProductsAdded () {
        return this.$store.getters.productsAdded.length;
      }
    },

    methods: {
      showCheckoutModal () {
        this.$store.commit('showCheckoutModal', true);
      }
    }
}
</script>

<style lang="scss" scoped>
  .title {
    background: url('../../static/hero-background2.png') no-repeat;
  .herofont {
    font-family: Sail;

    }

  }
  .dropdown {
    @apply absolute;
    @apply p-3;
    @apply bg-white;
    @apply right-0;
    @apply shadow-lg;
    @apply rounded-xl;
    @apply flex;
    @apply flex-col;
    @apply border-2;
    @apply border-grey_light;
  }

  .button {
    @apply w-full;
    @apply hover:bg-grey_light;
    @apply p-2;
    @apply rounded-lg;
  }
</style>
