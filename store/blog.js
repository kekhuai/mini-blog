export const state = () => ({
  loadedBlogs: []
})

export const mutations = {
  setLoadedBlogs (state, loadedBlogs) {
    state.loadedBlogs = [
      ...loadedBlogs
    ]
  }
}

export const actions = {
  create ({ commit }, blog) {
    return this.$axios.$post('http://localhost:8080/api/v1/blogs', blog)
  },
  fetch ({ commit }) {
    return this.$axios.$get('http://localhost:8080/api/v1/blogs')
      .then((response) => {
        commit('setLoadedBlogs', response)
      })
  },
  delete ({ commit }, id) {
    return this.$axios.$delete(`http://localhost:8080/api/v1/blogs/${id}`)
  },
  update ({ commit }, payload) {
    return this.$axios.$put(`http://localhost:8080/api/v1/blogs/${payload.id}`, payload)
      .then(() => {
        return this.$axios.$get('http://localhost:8080/api/v1/blogs')
      }).then((response) => {
        commit('setLoadedBlogs', response)
      })
  }
}

export const getters = {
  loadedBlogs (state) {
    return state.loadedBlogs
  }
}
