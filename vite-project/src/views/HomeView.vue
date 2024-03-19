<template>
  <div class="container">
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { compileScript } from 'vue/compiler-sfc';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const thing = ref('')
async function thingy () {
  try {
  let fetchthing = await fetch ("https://data.cityofnewyork.us/resource/f9bf-2cp4.json")
  let putasjson = await fetchthing.json();
  thing.value = putasjson;
  console.log(putasjson)
}  
catch (error) {
  console.log ("error", error)
}}
onBeforeMount(() =>{
    thingy();
})

// const fetchData = async () => {
//   try {
//     const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }
//     const data = await response.json()
//     chartData.value.labels = data.map((item) => item.sat_critical_reading_avg_score)
//     chartData.value.datasets[0].data = data.map((item) => item.sat_math_avg_score)
//     renderChart()
//   } catch (error) {
//     console.error('Error fetching chart data:', error)
//   }
// }

// const renderChart = () => {
//   if (!chartCanvas.value) return
//   new Bar(chartCanvas.value, {
//     data: chartData.value
//   })
// }

// onBeforeMount(() => {
//   fetchData()
// })
</script>

<style lang="scss" scoped></style>
