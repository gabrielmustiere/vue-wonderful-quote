<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5>{{$ucFirst($t('user.userDetails.title'))}}</h5>
        <ul class="list-unstyled">
          <li>{{$ucFirst($t('user.userDetails.item.name.label'))}} : {{$ucFirst(name)}}</li>
          <li>{{$ucFirst($t('user.userDetails.item.age.label'))}} : {{ age }}</li>
        </ul>
        <button class="btn btn-info" @click="resetName()">{{$ucFirst($t('user.userDetails.btn.reinit'))}}</button>
        <button class="btn btn-info ml-2" @click="resetFn">{{$ucFirst($t('user.userDetails.btn.reinit'))}}</button>
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
      default: 'gabriel'
    },
    age: {
      type: Number,
      default: 0
    },
    resetFn: Function
  },
  methods: {
    resetName () {
      this.name = 'gabriel'
      this.$emit('resetName', this.name)
    }
  }
}
</script>
