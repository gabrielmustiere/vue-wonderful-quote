<template>
  <div>
    <header>
      <h1>{{ details }}</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      details: 'Server Status'
    }
  }
}
</script>
