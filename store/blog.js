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
  }
}

export const getters = {
  loadedBlogs (state) {
    return state.loadedBlogs
  }
}
