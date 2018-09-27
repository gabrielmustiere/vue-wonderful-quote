<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <my-header></my-header>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <server-list></server-list>
      </div>
      <div class="col-xs-12 col-sm-6">
        <server-details></server-details>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12">
        <my-footer></my-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import ServerList from './components/ServerList'
import ServerDetails from './components/ServerDetails'

export default {
  components: {
    'my-header': Header,
    'my-footer': Footer,
    'server-list': ServerList,
    'server-details': ServerDetails
  }
}

</script>

<style>

</style>
