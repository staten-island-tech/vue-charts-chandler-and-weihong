<template>
  <div class="container"> 
  </div>
</template>

<script setup>

const APIdata = "https://data.cityofnewyork.us/resource/f9bf-2cp4.json";

 
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

async function getscores(){
  const testscores = {
    type: 'bar',
    MathScores: [
     'Apidata.sat_math_avg_score',
  ],
  }
}
return resultSet.tablePivot().map(row => ({ 
    year: parseInt(row['Apidata.sat_math_avg_score']),
    count: parseInt(row['Apidata.sat_math_avg_score'])
// export default {
//   name: 'BarChart',
//   components: { Bar },
//   data: () => ({
//     loaded: false,
//     chartData: null
//   }),
//   async mounted () {
//     this.loaded = false

//     try {
//       const { userlist } = await fetch({APIdata})
//       this.chartdata = userlist

//       this.loaded = true
//     } catch (e) {
//       console.error(e)
//     }
//   }
// }
</script>
Chart

<style lang="scss" scoped>

</style>