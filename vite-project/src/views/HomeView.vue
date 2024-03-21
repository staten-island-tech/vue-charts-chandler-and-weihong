<template>
  <Bar  v-if="loaded" :data="chartData"></Bar>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
Chart
} from 'chart.js'

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
});

// new Chart {
//   name; 'BarChart',
//   components; {Bar},
//   data: () => ({
//     loaded: false,
//     chartData: null
//   }),
//   async onMounted (){
//     this.loaded = false,

//     try {
//       const {userlist} = await thingy
//       this.chartData = userlist
//       this.loaded = true
//     }
//     catch (e){
//       console.error(e)
//     }
//   }
// };
// new Chart = {
//   name:'Barchart' ,
//   components: {Bar},
//   data: () => ({
//     loaded:false,
//     chartData: null
//   }),
// };

// (async function() {
//   const data = [
//     { year: 2010, count: 10 },
//     { year: 2011, count: 20 },
//     { year: 2012, count: 15 },
//     { year: 2013, count: 25 },
//     { year: 2014, count: 22 },
//     { year: 2015, count: 30 },
//     { year: 2016, count: 28 },
//   ];

// new Chart(
//     document.getElementById('acquisitions'),
//     {
//       type: 'bar',
//       data: {
//         labels: data.map(row => row.year),
//         datasets: [
//           {
//             label: 'Acquisitions by year',
//             data: data.map(row => row.count)
//           }
//         ]
//       }
//     }
//   );
// ;
 
</script>

<style lang="scss" scoped>

</style>
