<template>
  <div id="app">
    <button @click="toggleTodos">Toggle todos</button>
    <br>
    <input v-model.trim="newTodoText" @keyup.enter="addTodo" placeholder="Add new todo">
    <ul>
      <li v-for="todo in todos">
        <input :value="todo.text" @input="updateTodoText(todo, $event.target.value)">
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>

    <h4>collection with refs</h4>

    <ul>
      <li v-for="moment in moments">{{ moment }}</li>
    </ul>

    <h5>Original data</h5>

    <ul>
      <li v-for="tweet in tweets">{{ tweet }}</li>
    </ul>

    <p>config:</p>
    <pre>
        {{ config }}
      </pre>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { db } from "@/firebase/";
const todos = db.collection("todos");
const unFinishedTodos = todos.where("finished", "==", false);
const finishedTodos = todos.where("finished", "==", true);
const config = db.collection("configs").doc("jORwjIykFo2NmkdzTkhU");

export default {
  name: "app",
  data: {
    todos: [],
    tweets: [],
    moments: [],
    nested: [],
    config: null,
    newTodoText: ""
  },
  firestore: {
    todos: unFinishedTodos,
    moments: db.collection("moments"),
    nested: db.collection("nested"),
    tweets: db.collection("tweets"),
    config
  },
  methods: {
    addTodo: function() {
      if (this.newTodoText) {
        todos.add({
          finished: false,
          text: this.newTodoText,
          created: firebase.firestore.FieldValue.serverTimestamp()
        });
        this.newTodoText = "";
      }
    },
    updateTodoText: function(todo, newText) {
      todos.doc(todo.id).update({ text: newText });
    },
    removeTodo: function(todo) {
      todos.doc(todo.id).delete();
    },
    toggleTodos: function() {
      console.log(this.$firestoreRefs.todos === unFinishedTodos);
      this.$bind(
        "todos",
        this.$firestoreRefs.todos === unFinishedTodos
          ? finishedTodos
          : unFinishedTodos
      );
    }
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
