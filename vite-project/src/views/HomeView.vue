<template>
  <div>
    <Line v-if="loaded" :data="chartData"></Line>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref(null)
const loaded = ref(false)

async function thingy() {
  try {
    const fetchthing = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
    const putasjson = await fetchthing.json()
    const mathscores = putasjson.map((item) => item.sat_math_avg_score)
    const englishscores = putasjson.map((items) => items.sat_critical_reading_avg_score)
    chartData.value = {
      labels: mathscores, 
      datasets: [
        {
          label: 'MATH SCORES',
          backgroundColor: 'blue',
          data: mathscores,
        },
        {
          label: 'ENGLISH SCORES',
          backgroundColor: 'green',
          data: englishscores,
        }
      ]
    }
    loaded.value = true
  } catch (error) {
    console.log('error', error)
  }
}

onBeforeMount(() => {
  thingy()
})
</script>

<style scoped>

</style>