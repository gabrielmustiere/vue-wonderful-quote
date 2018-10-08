<template>
  <div>
    <h1> Citations ajoutées</h1>
    <div class="progress">
      <div
        :style="{'width': getValue +'%'}"
        :aria-valuenow="getValue"
        class="progress-bar"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100">{{ getValue }}%
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProgressBar',
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getValue () {
      if (this.count >= 10) {
        return 100
      }
      return this.count * 10
    }
  }
}
</script>

<style scoped>

</style>
