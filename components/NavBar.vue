<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-start">
      <a class="navbar-item">
        <NuxtLink to="/blog/list">Home</NuxtLink>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div v-if="$auth.loggedIn" class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <NuxtLink to="/blog/create">
                <strong>New blog</strong>
              </NuxtLink>
            </a>
            <a class="button is-light" @click="signOut">
              Sign out
            </a>
          </div>
        </div>
        <div v-else class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <NuxtLink to="/user/sign-up">
                <strong>Sign up</strong>
              </NuxtLink>
            </a>
            <a class="button is-light">
              <NuxtLink to="/user/sign-in">Sign in</NuxtLink>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    signOut () {
      this.$auth.logout().then(() => {
        this.$router.push('/user/sign-in')
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.navbar
  background-color: darkgray
</style>
