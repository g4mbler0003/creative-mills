<template>
  <nav
    class="flex justify-between sticky top-0 bg-white z-10 shadow-md p-10"
    role="navigation"
    aria-label="main navigation"
  >
    <nuxt-link :to="{ name: 'index' }" class="navbar-item">
      <h1 class="title w-40 h-12"></h1>
    </nuxt-link>

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
        showDropdown: false,
        logoutLabel: 'Log out',
			  loginLabel: 'Log in',
			  signupLabel: 'Sign up',
        wishlistLabel: 'Wishlist',
      }
    },

    computed: {
      numProductsAdded () {
        return this.$store.getters.productsAdded.length;
      },
      isUserLoggedIn () {
        return this.$store.getters.isUserLoggedIn;
      },
      getUserName () {
        let name = this.$store.getters.getUserName;

        if (name === '') {
          return 'user';
        } else {
          return name;
        }
      }
    },

    mounted() {
      window.addEventListener("blur", this.closeDropdown, true);
    },
    destroyed() {
      window.removeEventListener("blur", this.closeDropdown);
    },

    methods: {
      closeDropdown() {
        setTimeout(() => {
          this.showDropdown = false;
        }, 100);
      },
      showCheckoutModal () {
        this.$store.commit('showCheckoutModal', true);
      },
      showLoginModal () {
        this.$store.commit('showLoginModal', true);
      },
      showSignupModal () {
        this.$store.commit('showSignupModal', true);
      },
      onShowDropdown () {
        this.showDropdown = !this.showDropdown
      },
      logout () {
        this.$store.commit('isUserLoggedIn', false);
        this.$store.commit('isUserSignedUp', false);
        this.$store.commit('removeProductsFromFavourite');

        // redirect to homepage
        this.$router.push({ name: 'index' });
      },
    }
  };
</script>

<style lang="scss" scoped>
  .title {
    background: url('../../static/logo3.jpeg') no-repeat;
    background-position: 50% 50%;
    background-size: 215px;
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
