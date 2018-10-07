<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col mt-3">
        <quote>
          <p slot="title">{{ quoteTitle }}</p>
          <cite>Claudy Faucan - 2006</cite>
        </quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote'

export default {
  components: {
    Quote
  },
  data () {
    return {
      quoteTitle: '" Tu sors ou je te sort !? "'
    }
  }

}

</script>

<style scoped>

</style>
