<template>
  <div>
    <Blog
      v-for="blog in $store.getters['blog/loadedBlogs']"
      :key="blog.id"
      v-bind="blog"
      class="blog"
    />
  </div>
</template>

<script>
export default {
  async fetch () {
    await this.$store.dispatch('blog/fetch')
  }
}
</script>

<style lang="sass" scoped>
.blog
  margin-bottom: 16px
</style>
