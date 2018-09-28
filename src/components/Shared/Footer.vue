<template>
  <div>
    <footer>
      <p>{{ details }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'my-footer',
  data () {
    return {
      details: 'All Servers are managed here'
    }
  }
}
</script>
