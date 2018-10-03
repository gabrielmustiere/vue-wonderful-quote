<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Atelier en ligne</a>
    </nav>

    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="h1">Bienvenue dans l'atelier en ligne</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h3>Formulaire de saisie</h3>
          <vehicle-form></vehicle-form>
        </div>
        <div class="col">
          <h3>Ma liste</h3>
          <vehicle-list :vehicles="vehicles"></vehicle-list>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import VehicleForm from './components/VehicleForm'
import VehicleList from './components/VehicleList'

export default {
  components: {
    VehicleForm,
    VehicleList

  },
  data: function () {
    return {
      vehicles: [
        { 'brand': 'Renault', 'model': 'Megane III Distiction 120 ch 5P' },
        { 'brand': 'Peugeot', 'model': '3008 GT-Line 150 ch 5P' }
      ]

    }
  }
}

</script>
