<template>
  <div>
    <div class="title">
      <slot name="title"/>
    </div>
    <hr>
    <div class="content">
      <slot name="content">Auteur par défault - {{ date }}</slot>
    </div>
  </div>
</template>

<script>
import Format from 'date-fns/format'
export default {
  name: 'Quote',
  data () {
    return {
      date: Format(new Date(), 'DD/MM/YYYY')
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid #CCCCCC;
    box-shadow: 0 10px 6px -6px #777777;
    padding: 10px;
    margin: auto;
    text-align: center;
  }

  .title {
    font-style: italic;
  }
</style>
