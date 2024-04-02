<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

const schools = ref([]);

async function thingy(){
  try {
    const fetchthing = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
    const putasjson = await fetchthing.json();
    schools.value = putasjson;
  } catch (error) {
    console.log('error', error)
  }
}
  thingy();
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Pageload</RouterLink>
        <RouterLink to="/graph1">Graph 1</RouterLink>
        <RouterLink to="/Graph2">Graph 2</RouterLink>
      </nav>
      <div class="card" v-for="(school, index) in schools" :key="index">
        <div class="card__content">
        <h2 class="textclass">{{ school.school_name }}</h2>
        <p class="textclass">Math Score: {{ school.sat_math_avg_score }}</p>
        <p class="textclass">English Score: {{ school.sat_critical_reading_avg_score }}</p>
      </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
  .card {
  width: 20rem;
  height: 15rem;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
}

.card__content {
  background: rgb(5, 6, 45);
  border-radius: 17px;
  width: 100%;
  height: 100%;
}
.textclass{
  color:white
}
</style>
