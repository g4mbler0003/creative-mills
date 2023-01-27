export const state = () => ({
  products: [
    {
      id: 1,
      title: 'Product 10',
      info: 'this is the info prop',
      description: 'This premium cutting board was expertly crafted from a combination of South African Canarywood and domestic Ambrosia Maple.  The rich warm color of the Canarywood and grain pattern of the Ambrosia Maple compliment each other and make it truely unique.  This cutting board is not only beautiful but also highly durable, able to withstand frequent use without showing signs of wear. It 12"x18" and provides plenty of surface area for slicing, dicing, or using to serve your favorite dish.',
      moredetails: 'Every board we make is one of a kind, handcrafted with only FDA/NSF Certified Food Safe products and seasoned with a mineral oil beeswax compound that make not only look great but a breeze clean.  Our exceptional craftsmanship and stunning designs, are sure to make a great addition to any kitchen.',
      price: 50,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image1: "product-1-2-final.png",
      image2: "product-1-1-final.png",
      image3: "product-1-3-final.png",
      image4: "product-1-4-final.png",
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 35,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image1: "product-2-2-final.png",
      image2: "product-2-1-final.png",
      image3: "product-2-3-final.png",
      image4: "product-2-4-final.png",

    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 110,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image1: "product-3-2-final.png",
      image2: "product-3-1-final.png",
      image3: "product-3-3-final.png",
      image4: "product-3-4-final.png",

    },
    {
      id: 4,
      title: 'Product 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 50,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image1: "product-4-2-final.png",
      image2: "product-4-1-final.png",
      image3: "product-4-3-final.png",
      image4: "product-4-2-final.png",

    },
    {
      id: 5,
      title: 'Product 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 35,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image1: "https://bulma.io/images/placeholders/1280x960.png",
      image2: "https://bulma.io/images/placeholders/1280x960.png",
      image3: "https://bulma.io/images/placeholders/1280x960.png",
      image4: "https://bulma.io/images/placeholders/1280x960.png"

    },
    {
      id: 6,
      title: 'Product 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 110,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image1: "https://bulma.io/images/placeholders/1280x960.png",
      image2: "https://bulma.io/images/placeholders/1280x960.png",
      image3: "https://bulma.io/images/placeholders/1280x960.png",
      image4: "https://bulma.io/images/placeholders/1280x960.png"

    },
    {
      id: 7,
      title: 'Product 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 50,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image1: "https://bulma.io/images/placeholders/1280x960.png",
      image2: "https://bulma.io/images/placeholders/1280x960.png",
      image3: "https://bulma.io/images/placeholders/1280x960.png",
      image4: "https://bulma.io/images/placeholders/1280x960.png"

    },
    {
      id: 8,
      title: 'Product 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 35,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image1: "https://bulma.io/images/placeholders/1280x960.png",
      image2: "https://bulma.io/images/placeholders/1280x960.png",
      image3: "https://bulma.io/images/placeholders/1280x960.png",
      image4: "https://bulma.io/images/placeholders/1280x960.png"

    },
    {
      id: 9,
      title: 'Product 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 110,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image1: "https://bulma.io/images/placeholders/1280x960.png",
      image2: "https://bulma.io/images/placeholders/1280x960.png",
      image3: "https://bulma.io/images/placeholders/1280x960.png",
      image4: "https://bulma.io/images/placeholders/1280x960.png"

    }
  ],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    name: '',
    productTitleSearched: ''
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  }
})

export const getters = {
  productsAdded: state => {
    return state.products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsAddedToFavourite: state => {
    return state.products.filter(el => {
      return el.isFavourite;
    });
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
  quantity: state => {
    return state.products.quantity;
  }
}

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  addToFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
  SET_USER(state, authUser) {
    state.authUser = authUser
  }
}
/*
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.get("/api/current_user")
    commit("SET_USER", res.data)
  },

  async logout({ commit }) {
    const { data } = await this.$axios.get("/api/logout")
    if (data.ok) commit("SET_USER", null)
  },

  async handleToken({ commit }, token) {
    const res = await this.$axios.post("/api/stripe", token)
    commit("SET_USER", res.data)
  }
} */
