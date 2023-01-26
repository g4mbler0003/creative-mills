(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{187:function(t,e,o){var content=o(189);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("1ee4eb47",content,!0,{sourceMap:!1})},188:function(t,e,o){"use strict";o(187)},189:function(t,e,o){var r=o(20)((function(i){return i[1]}));r.push([t.i,".detail[data-v-1caa84ec]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media (min-width: 1024px){.detail[data-v-1caa84ec]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.detail[data-v-1caa84ec]{margin:1.25rem;--tw-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.detail .img-wrapper[data-v-1caa84ec]{-webkit-box-flex:1;-ms-flex:1;flex:1}@media (min-width: 1024px){.detail .img-wrapper img[data-v-1caa84ec]{border-radius:0px;border-top-left-radius:1rem;border-bottom-left-radius:1rem}}.detail .text-wrapper[data-v-1caa84ec]{-webkit-box-flex:2;-ms-flex:2;flex:2}",""]),r.locals={},t.exports=r},190:function(t,e,o){"use strict";var r={name:"products",props:["product","detail"],data:function(){return{addToCartLabel:"Add to cart",viewDetailsLabel:"Details",removeFromCartLabel:"Remove from cart",addToFavouriteLabel:"Add to favourite",removeFromFavouriteLabel:"Remove from favourite",selected:1,quantityArray:[],showImage1:!1,showImage2:!1,showImage3:!1,showImage4:!1}},mounted:function(){for(var i=1;i<=20;i++)this.quantityArray.push(i);this.$props.product.quantity>1&&(this.selected=this.$props.product.quantity)},computed:{isUserLogged:function(){return this.$store.getters.isUserLoggedIn}},methods:{addToCart:function(t){var data={id:t,status:!0};this.$store.commit("addToCart",t),this.$store.commit("setAddedBtn",data)},removeFromCart:function(t){var data={id:t,status:!1};this.$store.commit("removeFromCart",t),this.$store.commit("setAddedBtn",data)},saveToFavorite:function(t){this.$store.state.userInfo.isLoggedIn?this.$store.commit("addToFavourite",t):this.$store.commit("showLoginModal",!0)},removeFromFavourite:function(t){this.$store.commit("removeFromFavourite",t)},onSelectQuantity:function(t){var data={id:t,quantity:this.selected};this.$store.commit("quantity",data)}}},d=(o(188),o(6)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"rounded-2xl shadow-xl shadow-slate-300/60",class:[t.detail?"detail":""]},[t.showImage1?o("div",{staticClass:"bg-grey_light absolute pin-t pin-l h-screen w-full flex items-center justify-center"},[o("div",{staticClass:"bg-white p-8 rounded w-1/2"},[o("img",{attrs:{src:t.product.image1,alt:"Placeholder image"}}),t._v(" "),o("button",{staticClass:"button mt-4 bg-blue text-white font-bold px-4 py-2 rounded-full",on:{click:function(e){t.showImage1=!t.showImage1}}},[t._v("Close")])])]):t._e(),t._v(" "),t.showImage2?o("div",{staticClass:"bg-grey_light absolute pin-t pin-l h-screen w-full flex items-center justify-center"},[o("div",{staticClass:"bg-white p-8 rounded w-1/2"},[o("img",{attrs:{src:t.product.image2,alt:"Placeholder image"}}),t._v(" "),o("button",{staticClass:"bg-blue text-white font-bold px-4 py-2 rounded-full",on:{click:function(e){t.showImage2=!t.showImage2}}},[t._v("Close")])])]):t._e(),t._v(" "),t.showImage3?o("div",{staticClass:"bg-grey_light absolute pin-t pin-l h-screen w-full flex items-center justify-center"},[o("div",{staticClass:"bg-white p-8 rounded w-1/2"},[o("img",{attrs:{src:t.product.image3,alt:"Placeholder image"}}),t._v(" "),o("button",{staticClass:"bg-blue text-white font-bold px-4 py-2 rounded-full",on:{click:function(e){t.showImage3=!t.showImage3}}},[t._v("Close")])])]):t._e(),t._v(" "),t.showImage4?o("div",{staticClass:"bg-grey_light absolute pin-t pin-l h-screen w-full flex items-center justify-center"},[o("div",{staticClass:"bg-white p-8 rounded w-1/2"},[o("img",{attrs:{src:t.product.image4,alt:"Placeholder image"}}),t._v(" "),o("button",{staticClass:"bg-blue text-white font-bold px-4 py-2 rounded-full",on:{click:function(e){t.showImage4=!t.showImage4}}},[t._v("Close")])])]):t._e(),t._v(" "),o("div",{staticClass:"img-wrapper rounded-t-2xl"},[o("nuxt-link",{attrs:{to:{name:"product_detail-id",params:{id:t.product.id,title:t.product.title,price:t.product.price,rating:t.product.ratings,reviews:t.product.reviews,isAddedBtn:t.product.isAddedBtn,image1:t.product.image1,image2:t.product.image2,image3:t.product.image3,image4:t.product.image4}}}},[o("p",{staticClass:"font-bold"},[t._v("Select an image to view")]),t._v(" "),o("button",[o("img",{staticClass:"rounded-t-2xl",attrs:{src:t.product.image1,alt:"Placeholder image"},on:{click:function(e){t.showImage1=!t.showImage1}}})]),t._v(" "),o("section",{staticClass:"pt-8 px-4"},[o("div",{staticClass:"flex flex-wrap -mx-4"},[o("div",{staticClass:"md:w-1/3 px-4 mb-8"},[o("button",[o("img",{staticClass:"rounded-t-2xl",attrs:{src:t.product.image2,alt:"Placeholder image"},on:{click:function(e){t.showImage2=!t.showImage2}}})])]),t._v(" "),o("div",{staticClass:"md:w-1/3 px-4 mb-8"},[o("button",[o("img",{staticClass:"rounded-t-2xl",attrs:{src:t.product.image3,alt:"Placeholder image"},on:{click:function(e){t.showImage3=!t.showImage3}}})])]),t._v(" "),o("div",{staticClass:"md:w-1/3 px-4 mb-8"},[o("button",[o("img",{staticClass:"rounded-t-2xl",attrs:{src:t.product.image4,alt:"Placeholder image"},on:{click:function(e){t.showImage4=!t.showImage4}}})])])])])])],1),t._v(" "),o("div",{staticClass:"text-wrapper p-4"},[o("div",{staticClass:"flex items-center justify-between mb-3"},[o("div",{staticClass:"media-content"},[o("nuxt-link",{attrs:{to:{name:"product_detail-id",params:{id:t.product.id,title:t.product.title,price:t.product.price,rating:t.product.ratings,reviews:t.product.reviews,isAddedBtn:t.product.isAddedBtn,image1:t.product.image1,image2:t.product.image2,image3:t.product.image3,image4:t.product.image4}}}},[o("span",{class:[t.detail?"text-3xl":"text-lg"]},[t._v(t._s(t.product.title))])])],1)]),t._v(" "),o("div",{staticClass:"content is-clearfix"},[o("p",{class:[t.detail?"text-2xl":"text-base"]},[t._v(t._s(t.product.description))]),t._v(" "),o("div",{staticClass:"flex justify-between"},[o("div",{staticClass:"flex items-right"}),t._v(" "),o("p",{staticClass:"text-3xl font-medium"},[o("strong",[t._v("$ "+t._s(t.product.price))])])]),t._v(" "),t.product.isAddedToCart?t._e():o("button",{staticClass:"rounded-xl p-3 bg-blue text-white",on:{click:function(e){return t.addToCart(t.product.id)}}},[t._v(t._s(t.addToCartLabel))]),t._v(" "),t.product.isAddedToCart?o("button",{staticClass:"bg-red rounded-xl p-3",on:{click:function(e){return t.removeFromCart(t.product.id,!1)}}},[t._v(t._s(t.removeFromCartLabel))]):t._e()])])])}),[],!1,null,"1caa84ec",null);e.a=component.exports},191:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));o(26);function r(t,e){var o=e.trim().toLowerCase();return o.length?t.filter((function(t){return t.title.toLowerCase().indexOf(o)>-1})):t}},193:function(t,e,o){"use strict";o.r(e);var r=o(190),d=o(191),c={name:"user-wishlist",data:function(){return{pageTitle:"Your Wishlist",noProductLabel:"Your wishlist is empty"}},components:{VmProductsList:r.a},computed:{productsInWishlist:function(){return this.$store.state.userInfo.hasSearched?this.getProductByTitle():this.$store.getters.productsAddedToFavourite}},methods:{getProductByTitle:function(){var t=this.$store,e=t.getters.productsAddedToFavourite,o=t.state.userInfo.productTitleSearched;return this.productsFiltered=Object(d.a)(e,o)}}},l=o(6),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"p-5"},[o("h3",{staticClass:"text-2xl mb-4"},[t._v(t._s(t.pageTitle))]),t._v(" "),o("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},[t._l(t.productsInWishlist,(function(t){return o("div",{key:t.id},[o("VmProductsList",{attrs:{product:t}})],1)})),t._v(" "),0===t.productsInWishlist.length?o("div",{staticClass:"section"},[o("p",[t._v(t._s(t.noProductLabel))])]):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports}}]);