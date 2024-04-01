<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <BarChart />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Data</RouterLink>
        <RouterLink to="/graph1">Graph 1</RouterLink>
        <RouterLink to="/Graph2">Graph 2</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
