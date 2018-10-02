<template>
  <div class="card">
    <div class="card-header">
      <h6>Progression de ma saisie :</h6>
      <div class="progress">
        <div class="progress-bar"
             :class="[{'bg-success' : progressBarWidth === 100}]"
             :style="{width: progressBarWidth+ '%'}"
             :aria-valuenow="progressBarWidth"
             role="progressbar"
             aria-valuemin="0" aria-valuemax="100">{{progressBarWidth}}%</div>
      </div>
    </div>
    <div class="card-body">
      <form action="">

        <div class="form-group">
          <label for="marque">Marque</label>
          <select class="form-control" id="marque" v-model="selectedBrand">
            <option value="">Choissier votre marque</option>
            <option v-for="brand in brands" v-bind:key="brand" :value="brand">{{brand}}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="modele">Modèle</label>
          <input type="text" class="form-control" id="modele" placeholder="308 GT-Line 120ch..." v-model="model">
        </div>

        <button class="btn btn-success" :disabled="disabled">Ajouter le véhicule à ma liste</button>

      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VehicleForm',
  data () {
    return {
      title: '',
      brands: ['Peugeot', 'Renault', 'Citroen'],
      selectedBrand: '',
      progressBarWidth: 0,
      model: '',
      disabled: true
    }
  },
  computed: {

  },
  watch: {
    selectedBrand: function (brand) {
      if (brand) {
        this.progressBarWidth += 50
        return
      }
      this.progressBarWidth -= 50
    },
    model: function (model, oldModel) {
      if (model.length > 0 && oldModel.length === 0) {
        this.progressBarWidth += 50
      }

      if (model.length === 0 && oldModel.length > 0) {
        this.progressBarWidth -= 50
      }
    },
    progressBarWidth: function (progressBarWidth) {
      if (progressBarWidth < 100) {
        this.disabled = true
        return
      }
      this.disabled = false
    }
  }
}
</script>

<style scoped>

</style>
