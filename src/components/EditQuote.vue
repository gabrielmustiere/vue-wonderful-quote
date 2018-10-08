<template>

  <form action="">

    <div class="form-group">
      <label
        class="h5"
        for="exampleFormControlTextarea1">Ajouter une citation
      </label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        v-model="quote"
        rows="3"
        @keyup.enter="sendQuote">
      </textarea>
    </div>

    <div class="form-group">
      <button
        type="submit"
        class="btn btn-primary"
        @click.prevent="sendQuote">Envoyer
      </button>
    </div>

  </form>

</template>

<script>
export default {
  name: 'EditQuote',
  data () {
    return {
      quote: ''
    }
  },
  methods: {
    sendQuote () {
      this.$emit('sendedQuote', this.quote)
      this.quote = ''
    }
  }
}
</script>

<style scoped>

</style>
