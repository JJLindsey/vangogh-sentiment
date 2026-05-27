<template>
  <div>
     <h2 class="text-2xl font-semibold mb-4">Art Historical Reception (1920-2024)</h2>
        <p class="text-sm text-gray-600 mb-4">
                Based on exhibition records, academic publications, museum acquisitions, and auction data
        </p>
    <LineChart :data="chartData" :options="chartOptions" />
  </div>
</template>
<script>
  import { Line } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'

  ChartJS.register( Title, Tooltip, Legend, LineElement, PointElement,CategoryScale, LinearScale)

  export default {
    name:"HistoricalReceptionChart",
    components: {LineChart: Line},
    props: {
      historicalData: { type: Array, required: true }
    },
    computed: {
      chartData() {
      return {
        labels: this.historicalData.map(d => d.year.toString()),
        datasets: [
          {
            label: 'Academic Reception Score',
            data: this.historicalData.map(d => d.reception),
            borderColor: 'rgba(59, 130, 246, 1)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            yAxisID: 'y',           // ← left axis
            tension: 0.4,
            fill: true
          },
          {
            label: 'Publications',
            data: this.historicalData.map(d => d.publications),
            borderColor: 'rgba(168, 85, 247, 1)',
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
            yAxisID: 'y1',          // ← right axis
            tension: 0.4,
            fill: false
          }
        ]
      }
    },
    chartOptions() {
      return {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          title: {
            display: true,
            text: 'Academic Reception vs. Publications (1920–2024)'
          },
          tooltip: {
            callbacks: {
              afterBody: (items) => {
                const year = items[0]?.label
                const event = this.historicalData.find(d => d.year.toString() === year)
                return event?.majorEvents ? [`📌 ${event.majorEvents}`] : []
              }
            }
          }
        },
        scales: {
          y: {
            type: 'linear',
            position: 'left',
            min: 0,
            max: 1,
            title: { display: true, text: 'Reception Score' }
          },
          y1: {
            type: 'linear',
            position: 'right',
            title: { display: true, text: 'Publications' },
            grid: { drawOnChartArea: false }  // ← prevents double grid lines
          }
        }
      }
    }
    }
  }
</script>
