<template>
  <div class="columns has-text-centered is-centered">
    <div class="column is-half">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <label>
            <input v-model="username" class="input" type="text" placeholder="Username">
          </label>
          <span class="icon is-small is-left">
            <fa icon="user" />
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <label>
            <input v-model="password" class="input" type="password" placeholder="Password">
          </label>
          <span class="icon is-small is-left">
            <fa icon="lock" />
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-success" @click="signUp">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    signUp () {
      this.$store.dispatch('signUp', {
        username: this.username,
        password: this.password
      }).then(() => {
        return this.$router.push('/blog/list')
      }).catch((err) => {
        this.$toast.error(err.response.data.message)
      })
    }
  }
}
</script>
