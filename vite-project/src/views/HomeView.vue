<template>
  <div>
<Bar v-if="loaded" :data="ChartData"></Bar>
  </div>
</template>

<script>
import {Bar} from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
export default {
  setup () {
    
    return {}
  }
}
</script>

<style scoped>

</style>