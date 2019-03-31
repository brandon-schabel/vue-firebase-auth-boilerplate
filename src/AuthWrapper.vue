<template>
  
</template>

<script>
import {auth} from './firebase'
export default {
  name: 'auth-wrapper',
  beforeCreate: () => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        
      }
    })
  }
}
</script>

<style>

</style>
