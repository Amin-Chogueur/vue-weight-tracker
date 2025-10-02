<script setup>
import Chart from "chart.js/auto";
import { onMounted, computed, watch } from "vue";

const props = defineProps({
  weights: {
    type: Array,
    default: () => [],
  },
});

// computed values from props
const labelsw = computed(() => props.weights.map((w) => w.date));
const dataw = computed(() => props.weights.map((w) => w.weight));

let myChart = null;

onMounted(() => {
  const ctx = document.getElementById("myChart");

  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labelsw.value.reverse(),
      datasets: [
        {
          label: "My First Dataset",
          data: dataw.value.reverse(),
          fill: false,
          borderColor: "rgb(236, 72, 153)",
          tension: 0.1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          ticks: {
            maxRotation: 90, // rotate labels vertically
            minRotation: 90,
          },
        },
        y: {
          ticks: {
            stepSize: 0.5, // 👈 force increments of 0.5
          },
        },
      },
    },
  });
});

// 🔑 Watch for changes and update chart
watch(
  () => props.weights.map((w) => ({ date: w.date, weight: w.weight })),
  () => {
    if (myChart) {
      myChart.data.labels = labelsw.value.reverse();
      myChart.data.datasets[0].data = dataw.value.reverse();
      myChart.update();
    }
  },
  { deep: true }
);
</script>

<template>
  <canvas id="myChart"></canvas>
</template>
