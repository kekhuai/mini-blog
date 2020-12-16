export const actions = {
  signUp (context, { username, password }) {
    return this.$axios.$post('http://localhost:8080/api/v1/auth/sign-up', {
      username,
      password
    }).then(() => {
      this.$auth.loginWith('local', {
        data: {
          username,
          password
        }
      })
    })
  }
}
