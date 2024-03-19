<script setup>
import { ref,  } from 'vue';
import {onBeforeMount} from 'vue';

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

</script>


<template>
  <main>

  </main>
</template>
