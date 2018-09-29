<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5>Informations invocateur</h5>
        <ul class="list-unstyled">
          <li>Nom d'invocateur : {{ name }}</li>
        </ul>
        <button class="btn btn-info" @click="resetName()">Ré-initialiser mon nom</button>
        <button class="btn btn-info ml-2" @click="resetFn">Ré-initialiser mon nom</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDetails',
  props: {
    name: {
      type: String,
      default: 'Gabriel'
    },
    resetFn: Function
  },
  methods: {
    resetName () {
      this.name = 'Gabriel'
      this.$emit('resetName', this.name)
    }
  }
}
</script>
