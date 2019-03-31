<template>
  <section>
    <h1>Sign-up</h1>
    <div>
      <div>
        <div>
          <div>
            <h2>Create an Account</h2>
          </div>
          <div>
            <form v-on:submit.prevent>
              <div>
                <label>Email</label>
                <div>
                  <input>
                </div>
              </div>
              <div>
                <label>Password</label>
                <div>
                  <input>
                </div>
              </div>
              <button type="submit">Sign-up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from "../firebase";

export default {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      auth.createUserWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.$router.replace("dashboard");
        },
        error => {
          alert(error.message);
        }
      );
    }
  }
};
</script>