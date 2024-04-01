<template>
  <div>
    <div v-if="loaded">
      <div v-for="(item, index) in data" :key="index">
        <div>{{ item.dbn }}</div>
        <div>Math Score: {{ item.sat_math_avg_score }}</div>
        <div>English Score: {{ item.sat_critical_reading_avg_score }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'

const data = ref(null)
const loaded = ref(false)

async function fetchdata() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
    data.value = await response.json()
    loaded.value = true
  } catch (error) {
    console.error('there is error:', error)
  }
}
onBeforeMount(() => {
  fetchdata()
})
</script>

<style scoped></style>
