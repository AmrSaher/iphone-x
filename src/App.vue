<template>
  <phone-layout>
    <router-view/>
  </phone-layout>
</template>

<script>
import PhoneLayout from './layouts/PhoneLayout.vue';

export default {
  name: 'App',
  components: {
    PhoneLayout
  }
};
</script>
