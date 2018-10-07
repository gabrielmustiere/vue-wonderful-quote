<template>
  <div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Quote'
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

</style>
