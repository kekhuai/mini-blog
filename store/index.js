import jwt from 'jsonwebtoken'

export const actions = {
  signUp ({ commit }, { username, password }) {
    return this.$axios.$post('http://localhost:8080/api/v1/auth/sign-up', {
      username,
      password
    }).then(() => {
      return this.$auth.loginWith('local', {
        data: {
          username,
          password
        }
      })
    }).then(() => {
      const bearerToken = this.$auth.strategy.token.get()
      const accessToken = bearerToken.substring(7)
      const claims = jwt.decode(accessToken)
      this.$auth.setUser(claims.sub)
    })
  },
  nuxtServerInit () {
    const accessToken = this.$auth.strategy.token.get()
    const claims = jwt.decode(accessToken.substring(7))
    this.$auth.setUser(claims.sub)
  }
}

export const getters = {
  currentUser (state) {
    return state.currentUser
  }
}
