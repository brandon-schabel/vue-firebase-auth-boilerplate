<template>
  <div id="app" class="content">
    <div class="container">
      <nav-main></nav-main>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { namesRef } from './firebase'
import Header from './components/Header.vue'

export default {
  name: "app",
  components: {
    navMain: Header
  },

  methods: {
    setUser: function() {
      this.$store.dispatch('setUser');
    }
  },
  created() {
    // when the app is created run the set user method
    // this uses Vuex to check if a user is signed in
    // check out mutations in the store.js file
    this.setUser();
  }
};
</script>