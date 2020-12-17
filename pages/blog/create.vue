<template>
  <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <label>
          <input v-model="name" class="input" type="text" placeholder="Name">
        </label>
      </div>
    </div>

    <div class="field">
      <label class="label">Status</label>
      <div class="control">
        <label>
          <input v-model="status" class="input" type="text" placeholder="Status">
        </label>
      </div>
    </div>

    <div class="field">
      <label class="label">Category</label>
      <div class="control">
        <label>
          <input v-model="category" class="input" type="text" placeholder="Category">
        </label>
      </div>
    </div>

    <div class="field">
      <label class="label">Content</label>
      <div class="control">
        <label>
          <textarea v-model="content" class="textarea" placeholder="Content" />
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="submit">
          Submit
        </button>
      </div>
      <div class="control">
        <button class="button is-link is-light" @click="cancel">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      status: null,
      category: null,
      content: null
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('blog/create', {
        name: this.name,
        status: this.status,
        category: this.category,
        content: this.content
      }).then((response) => {
        this.$toast.success(response.message)
        this.$router.push('/blog/list')
      })
    },
    cancel () {
      this.$router.push('/blog/list')
    }
  },
  middleware: 'auth'
}
</script>
