<template>
    <div>
        <p>Server status {{ status }}</p>
        <hr>
        <button @click="changeStatus" class="btn btn-danger">Change status</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      status: 'critical'
    }
  },
  methods: {
    changeStatus () {
      this.status = 'normal'
    }
  }
}
</script>

<style scoped>

</style>
