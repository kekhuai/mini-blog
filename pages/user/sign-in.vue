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
          <button class="button is-success" @click="signIn">
            Sign In
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken'

export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    signIn () {
      this.$auth.loginWith('local', {
        data: {
          username: this.username,
          password: this.password
        }
      }).then(() => {
        const accessToken = this.$auth.strategy.token.get().substring(7)
        const claims = jwt.decode(accessToken)
        this.$auth.setUser(claims.sub)
      }).catch((err) => {
        this.$toast.error(err.response.data.message)
      })
    }
  }
}
</script>
