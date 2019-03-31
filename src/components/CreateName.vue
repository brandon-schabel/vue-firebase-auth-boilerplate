<template>
  <div >
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
import { namesRef } from '../firebase'
export default {
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