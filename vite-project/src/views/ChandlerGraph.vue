<template>
    <div>
<Scatter v-if="loaded" :data="chartData"></Scatter>
    </div>
</template>

<script setup>
import { Scatter } from 'vue-chartjs';

async function Getter() {
  try {
    const retrieve = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
    const myjson = await retrieve.json()
    const mathscores = myjson.map((item) => item.sat_math_avg_score)
    const englishscores = myjson.map((items) => items.sat_critical_reading_avg_score)
    chartData.value = {
  type: 'scatter',
  data: data,
  options: {
    scales: {
      English: {
        type: 'linear',
        position: 'bottom'
      },
      Math: {
        type: 'linear',
        position: 'top'
      }
    }
  }
};

} catch (error) {
    console.log('error', error)
  }
}
</script>

<style scoped>

</style>