<template>
  <div>
    <Blog v-for="index in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="index" />
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
