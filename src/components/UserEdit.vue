<template>
  <div class="card">
    <div class="card-body">
      <h5>{{$ucFirst($t('user.userEdit.title'))}}</h5>
      <ul class="list-unstyled">
        <li>{{$ucFirst($t('user.userEdit.name.label'))}} : {{$ucFirst(name)}}</li>
        <li>{{$ucFirst($t('user.userEdit.age.label'))}} : {{age}}</li>
      </ul>
      <button class="btn btn-info" @click="changeName">{{$ucFirst($t('user.userEdit.btn.changeName'))}}</button>
      <button class="btn btn-info ml-2" @click="ageUpdated">{{$ucFirst($t('user.userEdit.btn.changeAge'))}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  props: {
    name: {
      type: String,
      default: 'Gabriel'
    },
    age: {
      type: Number,
      default: 0
    }
  },
  methods: {
    changeName () {
      this.name = 'léon'
    },
    ageUpdated () {
      this.age += 10
      this.$emit('ageUpdated', this.age)
    }
  }
}
</script>
