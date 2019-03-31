<template>
  
</template>

<script>
import {auth} from './firebase'
export default {
  name: 'auth-wrapper',
  beforeCreate: () => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        console.log(user)
      } else {
        console.log('not logged in')
      }
    })
  }
}
</script>

<style>

</style>
