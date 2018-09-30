<template>
  <div class="jumbotron">
    <h1>{{$ucFirst($t('user.title'))}}</h1>
    <p>{{$ucFirst($t('user.subtitle',{name: $ucFirst(this.name), age: this.age}))}}</p>
    <button @click="changeName" class="btn btn-success">{{$ucFirst($t('user.changeName.btn.label'))}}</button>
    <hr>
    <div class="row">
      <div class="col">
        <user-details :name="name"
                      :age="age"
                      :resetFn="resetName"
                      @resetName="name = $event">

        </user-details>
      </div>
      <div class="col">
        <user-edit :name="name" :age="age" @ageUpdated="age = $event">
        </user-edit>
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
      name: 'Gabriel',
      age: 32
    }
  },
  methods: {
    changeName () {
      this.name = 'quentin'
    },
    resetName () {
      this.name = 'gabriel'
    }
  },
  components: {
    'user-details': UserDetails,
    'user-edit': UserEdit
  }
}
</script>
