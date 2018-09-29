<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5>{{$t('user.userDetails.title')}}</h5>
        <ul class="list-unstyled">
          <li>{{$t('user.userDetails.item.name.label')}} : {{ name }}</li>
        </ul>
        <button class="btn btn-info" @click="resetName()">{{$t('user.userDetails.btn.reinit')}}</button>
        <button class="btn btn-info ml-2" @click="resetFn">{{$t('user.userDetails.btn.reinit')}}</button>
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
