<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <BarChart />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">BarChart</RouterLink>
        <RouterLink to="/about">Scatter</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>

</script>

<style scoped>

</style>
