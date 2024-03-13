<template>
  <div class="container"></div>
  <p ref="ChartData">hello</p>
</template>

<script setup>
const APIdata = 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json'

const ChartData = ref(APIdata)

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

const fetchdata = async () => {
  try {
    const response = await fetch(APIdata)
    if (!response.ok) {
      throw new Error('response not work')
    }
    const data = await response.json()
    ChartData.value = data
    console.log(data.data)
  } catch (error) {
    console.error('error fetching data:')
  }
}

const Chart = {
  name: 'Bar',
  Components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted() {
    this.loaded = false
    try {
      const { userlist } = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
      this.chartdata = userlist
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}

onMounted(() => {
  ChartData.value.textContent = '{}'
})

console.log(thing.dbn)
</script>
Chart

<style lang="scss" scoped></style>
