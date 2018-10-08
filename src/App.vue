<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col mt-3">
        <progress-bar :count="getQuotesLength"/>
      </div>
    </div>

    <div class="row">
      <div class="col mt-3">
        <edit-quote @sendedQuote="listenSendedQuote"/>
      </div>
    </div>

    <div class="row">
      <div class="col mt-3">
        <qotes-list
          :quotes="quotes"
          @removedQuote="listenRemovedQuote"/>
      </div>
    </div>

  </div>
</template>

<script>
import ProgressBar from './components/ProgressBar'
import EditQuote from './components/EditQuote'
import QuotesList from './components/QuotesList'

export default {
  components: {
    'progress-bar': ProgressBar,
    'edit-quote': EditQuote,
    'qotes-list': QuotesList
  },
  data () {
    return {
      quotes: [],
      id: 1
    }
  },
  methods: {
    listenSendedQuote (value) {
      this.quotes.push({ 'id': this.id, 'value': value })
      this.id++
    },
    listenRemovedQuote (value) {
      console.log(value);
      this.quotes.splice(this.quotes.indexOf(value.id), 1)
    }
  },
  computed: {
    getQuotesLength () {
      return this.quotes.length
    }
  }
}
</script>

<style scoped>

</style>
