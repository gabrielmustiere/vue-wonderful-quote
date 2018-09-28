<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <user></user>
      </div>
    </div>
  </div>
</template>

<script>
import User from './components/User'

export default {
  components: {
    'user': User
  }
}

</script>
