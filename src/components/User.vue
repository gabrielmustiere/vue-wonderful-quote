<template>
  <div class="jumbotron">
    <h1>{{ $t('user.title') }}</h1>
    <p>{{$t('user.subtitle',{name:this.name})}}</p>
    <button @click="changeName" class="btn btn-success">{{$t('user.changeName.btn.label')}}</button>
    <hr>
    <div class="row">
      <div class="col">
        <user-details :name="name"
                      :resetFn="resetName"
                      @resetName="name = $event"></user-details>
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
    },
    resetName () {
      this.name = 'Gabriel'
    }
  },
  components: {
    'user-details': UserDetails,
    'user-edit': UserEdit
  }
}
</script>
