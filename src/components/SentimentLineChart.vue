<template>
  <div>
    <h2>Van Gogh Over Time</h2>
    <LineChart :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';
import {Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

export default {
  name: 'SentimentLineChart',
  components: { LineChart: Line },
  props: {
    analyzedComments: {
      type: Array,
      required: true
    }
  },
  computed: {
    chartData() {
      const sorted = [...this.analyzedComments].sort(
        (a,b) => a.created_utc - b.created_utc
      )
      return {
        labels: sorted.map(item => new Date(item.created_utc).toLocaleDateString()),
        datasets: [
          {
            label: 'Sentiment Score',
            data: sorted.map(item => item.sentimentScore),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.3)',
            tension: 0.3,
            pointRadius: 2,
            borderWidth: 2,
          }
        ]
      }
    },
    chartOptions() {
      return {
        responsive: true,
        plugins: {
          legend: {position: 'bottom'},
          title: {display: true, text: 'Sentiment Over Time'}
        },
        scales: {
          y: {beginAtZero: true}
        }
      }
    }
  }
}
</script>
