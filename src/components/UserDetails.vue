<template>
  <div>
    <div class="card">
      <div class="card-body">
        <p>Des détails dont ...</p>
        <p>- nom : {{ switchName }}</p>
        <p>...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDetails',
  props: ['name'],
  computed: {
    switchName () {
      return this.name.split('').reverse().join('')
    }
  }
}
</script>
