<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <BarChart />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">BarChart</RouterLink>
        <RouterLink to="/about">Graph 2</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>

</script>

<style scoped>

</style>
