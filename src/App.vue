<template>
  <div id="app" class="content">
    <div>
      <label>Name:</label>
      <input type="text" v-model="name">
      <button @click="submitName()">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="(personName,idx) of names" :key="idx">
          {{personName.id}}
          {{personName.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { namesRef } from './firebase'
export default {
  name: "app",
  data() {
    return {
      name: "Paul"
    };
  },
  methods: {
    submitName() {
      namesRef.add({name: this.name, edit: false})
    }
  },
  firestore: {
    names: namesRef
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
