<template>
  <div>
    <VmSubheader />
    <VmProductsList />
  </div>
</template>

<script>
import VmProductsList from '@/components/products_list/ProductsListContainer';
import VmSubheader from '@/components/subheader/Subheader'

export default {
  name: 'index',
  components: {
    VmProductsList,
    VmSubheader
  }
};
</script>
