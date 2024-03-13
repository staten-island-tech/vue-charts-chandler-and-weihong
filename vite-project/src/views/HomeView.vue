<template>
  <div class="container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Data',
      borderWidth: 1,
      data: []
    }
  ]
})

const chartCanvas = ref(null)

const fetchData = async () => {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    chartData.value.labels = data.map((item) => item.sat_critical_reading_avg_score)
    chartData.value.datasets[0].data = data.map((item) => item.sat_math_avg_score)
    renderChart()
  } catch (error) {
    console.error('Error fetching chart data:', error)
  }
}

const renderChart = () => {
  if (!chartCanvas.value) return
  new Bar(chartCanvas.value, {
    data: chartData.value
  })
}

onMounted(() => {
  fetchData()
})
</script>

<style lang="scss" scoped></style>
