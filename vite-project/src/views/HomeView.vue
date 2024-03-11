<template>
  <div class="container"></div>
</template>

<script setup>

const APIdata = "https://data.cityofnewyork.us/resource/f9bf-2cp4.json";

const ChartData = ref(null);

import { Bar } from 'vue-chartjs'
import { ref, onMounted } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

const fetchdata = async () => {
  try {
    const response = await fetch(APIdata);
    if(!response.ok){
      throw new Error('response not work');
    }
  }
}
</script>
Chart

<style lang="scss" scoped></style>
