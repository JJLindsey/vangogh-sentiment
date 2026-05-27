<template>
  <div>
    <BarChart :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'ComparisonChart',
  components: { BarChart: Bar },
  props: {
    sentimentData: {
      type: Array,
      required: true
    },
    historicalData: {
      type: Array,
      required: true
    },
    commercializationData: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    chartData() {
      // Group sentiment data by year
      const sentimentByYear = this.groupSentimentByYear();

      // Get years from 2020 onwards for comparison with art historical reception
      const recentHistorical = this.historicalData.filter(item => item.year >= 2020);

      const years = [...new Set([
        ...Object.keys(sentimentByYear),
        ...recentHistorical.map(item => item.year.toString())
      ])].sort();

      return {
        labels: years,
        datasets: [
          {
            label: 'Public Sentiment (Social Media)',
            data: years.map(year => sentimentByYear[year] || 0),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Art Historical Reception',
            data: years.map(year => {
              const historical = recentHistorical.find(h => h.year.toString() === year);
              return historical ? historical.reception : 0;
            }),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      };
    },
    chartOptions() {
      return {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: {
            display: true,
            text: 'Public Sentiment vs Academic Reception (Recent Years)'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 1,
            title: {
              display: true,
              text: 'Score (normalized)'
            }
          }
        }
      };
    }
  },
  methods: {
    groupSentimentByYear() {
      const yearGroups = {};

      this.sentimentData.forEach(item => {
        const year = new Date(item.created_utc).getFullYear().toString();
        if (!yearGroups[year]) {
          yearGroups[year] = [];
        }
        // Normalize sentiment from -1 to 1 range to 0 to 1 range
        yearGroups[year].push((item.sentimentScore + 1) / 2);
      });

      // Calculate average for each year
      const averages = {};
      for (const year in yearGroups) {
        const sum = yearGroups[year].reduce((a, b) => a + b, 0);
        averages[year] = sum / yearGroups[year].length;
      }

      return averages;
    }
  }
};
</script>
