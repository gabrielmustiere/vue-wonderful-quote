<template>
  <div class="jumbotron">
    <h1>Composant utilisateur</h1>
    <p>Je suis un incroyable utilisateur !!!</p>
    <button @click="changeName" class="btn btn-success">Changer mon nom</button>
    <hr>
    <div class="row">
      <div class="col">
        <user-details :name="name"></user-details>
      </div>
      <div class="col">
        <user-edit></user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetails from './UserDetails'
import UserEdit from './UserEdit'

export default {
  data () {
    return {
      name: 'Gabriel'
    }
  },
  methods: {
    changeName () {
      this.name = 'Quentin'
    }
  },
  components: {
    'user-details': UserDetails,
    'user-edit': UserEdit
  }
}
</script>
