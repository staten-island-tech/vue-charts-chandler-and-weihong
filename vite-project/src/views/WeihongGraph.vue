<template>
  <div>
    <Bar v-if="loaded" :data="chartData"></Bar>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
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

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref(null)
const loaded = ref(false)

async function thingy() {
  try {
    let fetchthing = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
    let putasjson = await fetchthing.json()
    const mathscores = putasjson.map((item) => item.sat_math_avg_score)
    const englishscores = putasjson.map((items) => items.sat_critical_reading_avg_score)
    chartData.value = {
      labels: mathscores,
      english: englishscores,
      datasets: [
        {
          label: 'MATH SCORES',
          backgroundColor: 'blue',
          data: mathscores,
        },
        {
          label: 'ENGLISH SCORES',
          backgroundColor: 'green',
          data:englishscores,
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
