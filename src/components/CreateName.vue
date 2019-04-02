<template>
  <div >
    <div>
      <label>Name:</label>
      <input type="text" v-model="name">
      <button @click="submitName()">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="(personName,idx) of this.names" :key="idx">
          {{personName.id}}
          {{personName.name}}
          <button @click="deleteName(personName.id)">Delete</button>
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
      name: "",
      names: []
    };
  },
  methods: {
    submitName() {
      namesRef.add({name: this.name, edit: false})
      console.log(this.names)
    },
    deleteName(id) {
      namesRef.doc(id).delete()
    }
  },
  firestore: {
    names: namesRef
  },
  created() {
    namesRef.onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if(change.type === 'added') {
          this.names.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
};
</script>