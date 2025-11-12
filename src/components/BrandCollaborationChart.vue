<template>
  <div>
    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-3">Official Van Gogh Museum Brand Partnerships</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <div
          v-for="collab in brandCollabs"
          :key="collab.partner"
          class="p-3 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
          :class="getCategoryColor(collab.category)"
        >
          <h4 class="font-semibold text-sm">{{ collab.partner }}</h4>
          <p class="text-xs text-gray-600">{{ collab.category }}</p>
          <p class="text-xs text-gray-500 mt-1">{{ collab.year }}</p>
          <span
            class="text-xs px-2 py-1 rounded mt-2 inline-block"
            :class="getImpactBadge(collab.culturalImpact)"
          >
            {{ collab.culturalImpact }} Impact
          </span>
        </div>
      </div>
    </div>

    <BarChart :data="chartData" :options="chartOptions" />

    <div class="mt-4 p-3 bg-blue-50 rounded">
      <p class="text-sm text-gray-700">
        <strong>Art Historian's Note:</strong> The commercialization trend visible from 2020 onwards
        represents a significant shift in how Van Gogh's cultural legacy is consumed.
        Official museum partnerships with brands like LEGO®, Pokémon®, and Samsung® indicate
        institutional recognition of popular culture as a valid medium for art appreciation,
        though this raises questions about commodification versus accessibility.
      </p>
    </div>
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
  name: 'BrandCollaborationsChart',
  components: { BarChart: Bar },
  props: {
    brandCollabs: {
      type: Array,
      required: true
    },
    commercialEvents: {
      type: Array,
      required: true
    }
  },
  computed: {
    chartData() {
      // Group by year
      const yearData = {};

      this.brandCollabs.forEach(collab => {
        if (!yearData[collab.year]) {
          yearData[collab.year] = { official: 0, categories: [] };
        }
        yearData[collab.year].official += 1;
        yearData[collab.year].categories.push(collab.category);
      });

      this.commercialEvents.forEach(event => {
        if (!yearData[event.year]) {
          yearData[event.year] = { official: 0, other: 0 };
        }
        yearData[event.year].other = (yearData[event.year].other || 0) + 1;
      });

      const years = Object.keys(yearData).sort();

      return {
        labels: years,
        datasets: [
          {
            label: 'Official Museum Partnerships',
            data: years.map(year => yearData[year].official),
            backgroundColor: 'rgba(59, 130, 246, 0.6)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 2
          },
          {
            label: 'Other Commercial Events',
            data: years.map(year => yearData[year].other || 0),
            backgroundColor: 'rgba(168, 85, 247, 0.6)',
            borderColor: 'rgba(168, 85, 247, 1)',
            borderWidth: 2
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
            text: 'Van Gogh Commercialization Timeline: Brand Partnerships & Cultural Events'
          },
          tooltip: {
            callbacks: {
              afterLabel: (context) => {
                const year = context.label;
                const collabsThisYear = this.brandCollabs.filter(c => c.year.toString() === year);
                if (collabsThisYear.length > 0) {
                  return collabsThisYear.map(c => `• ${c.partner} (${c.category})`);
                }
                return '';
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 },
            title: {
              display: true,
              text: 'Number of Collaborations/Events'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Year'
            }
          }
        }
      };
    }
  },
  methods: {
    getCategoryColor(category) {
      const colors = {
        'Toys & Construction': 'bg-red-50 border-red-200',
        'Gaming & Entertainment': 'bg-purple-50 border-purple-200',
        'Fashion & Footwear': 'bg-pink-50 border-pink-200',
        'Fashion & Streetwear': 'bg-indigo-50 border-indigo-200',
        'Technology': 'bg-blue-50 border-blue-200',
        'Digital/AR': 'bg-cyan-50 border-cyan-200',
        'Stationery': 'bg-yellow-50 border-yellow-200',
        'Collectibles': 'bg-orange-50 border-orange-200'
      };
      return colors[category] || 'bg-gray-50 border-gray-200';
    },
    getImpactBadge(impact) {
      const badges = {
        'Very High': 'bg-purple-100 text-purple-800',
        'High': 'bg-blue-100 text-blue-800',
        'Medium-High': 'bg-green-100 text-green-800',
        'Medium': 'bg-yellow-100 text-yellow-800'
      };
      return badges[impact] || 'bg-gray-100 text-gray-800';
    }
  }
};
</script>
