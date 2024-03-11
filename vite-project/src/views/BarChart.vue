<template>
    <div>

    </div>
</template>

<script>
import Bar from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    data () {
        return {
            chartData: {
                labels: ['Avg Critical Reading score','Avg SAT Math Score', 'Avg SAT Writing Score'],
                datasets: [600,500,120]
            }
        }
    }
}
</script>

<style scoped>

</style>