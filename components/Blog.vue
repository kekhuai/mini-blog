<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        {{ name }}
        <span class="tag is-info">{{ status }}</span>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        {{ content }}
        <br>
        <span>Updated by {{ author.username }} {{ fromNow }}</span>
      </div>
    </div>
    <footer class="card-footer">
      <a
        v-if="$auth.user === author.id.toString()"
        href="#"
        class="card-footer-item"
      >
        Edit
      </a>
      <a
        v-if="$auth.user === author.id.toString()"
        href="#"
        class="card-footer-item"
        @click="deleteBlog"
      >
        Delete
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    status: {
      type: String,
      default: null
    },
    category: {
      type: String,
      default: null
    },
    content: {
      type: String,
      default: null
    },
    createdAt: {
      type: String,
      default: null
    },
    author: {
      type: Object,
      default: null
    }
  },
  computed: {
    fromNow () {
      return this.$moment.utc(this.createdAt).local().fromNow()
    }
  },
  methods: {
    deleteBlog () {
      return this.$store.dispatch('blog/delete', this.id).then(() => {
        return this.$store.dispatch('blog/fetch')
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.tag
  margin-left: auto
</style>
