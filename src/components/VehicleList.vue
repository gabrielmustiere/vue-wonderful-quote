<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(vehicle,i) in vehicles" v-bind:key="i">{{vehicle.brand}} - {{vehicle.model}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VehicleList',
  props: {
    vehicles: Array
  }
}
</script>

<style scoped>

</style>
