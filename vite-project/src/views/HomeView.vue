<script setup>
import { ref,  } from 'vue';
import {onBeforeMount} from 'vue';
import {Bar} from 'vue-chartjs';
import { Chart as Chartjs. ;

const thing = ref('')
async function thingy () {
  try {
  let fetchthing = await fetch ("https://data.cityofnewyork.us/resource/f9bf-2cp4.json")
  let chartData = await fetchthing.json();
  thing.value = chartData;
  console.log(chartData)
}  
catch (error) {
  console.log ("error", error)
}}
onBeforeMount(() =>{
    thingy();
})

</script>

<template>
<Bar :data="thing.value"
/>
</template>
