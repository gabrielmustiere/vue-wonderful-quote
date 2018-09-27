<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <app-servers></app-servers>
            </div>
        </div>
    </div>
</template>

<script>
import AppServers from './Home'

export default {
  components: {
    'app-servers': AppServers
  }
}
</script>
