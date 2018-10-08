<template>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="quote in quotes"
        :key="quote.id"
        @click="removeQuote(quote)">
        {{ quote.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QuotesList',
  props: {
    quotes: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    removeQuote (quote) {
      this.$emit('removedQuote', quote)
    }
  }

}
</script>

<style scoped>
  li:hover{
    cursor: pointer;
    border: 1px red solid;
  }

</style>
