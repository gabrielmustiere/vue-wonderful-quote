<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="index in 5" v-bind:key="index">
        {{ serverLabel }} - {{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ServerList',
  data () {
    return {
      serverLabel: 'Server'
    }
  }
}
</script>
