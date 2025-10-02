<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useWeightStore } from "./stores/weightStore";
import WeightHistory from "./components/WeightHistory.vue";
import WeightsChart from "./components/WeightsChart.vue";

//state

const name = ref("");
const currentWeight = ref("");
const weightStore = useWeightStore();
const lastWeight = computed(() => {
  return weightStore.weights[0];
});

//methodes
watch(
  () => weightStore.weights,
  (newWeights) => {
    localStorage.setItem("weights", JSON.stringify(newWeights));
  },
  { deep: true }
);

onMounted(() => {
  const saved = localStorage.getItem("weights");
  if (saved) {
    weightStore.weights = JSON.parse(saved);
  }
});

function handleAddWeight() {
  const newWeight = {
    id: Date.now(),
    weight: currentWeight.value,
    date: new Date().toDateString(),
    isSelected: false,
  };
  weightStore.addWeight(newWeight);
  currentWeight.value = "";
}
</script>

<template>
  <main class="bg-gray-200 min-h-screen text-black">
    <div class="max-w-2xl mx-auto p-3">
      <h1 class="text-3xl font-bold text-center mt-1">Weight Tracker</h1>
      <p class="text-xl mt-6">
        what`s up
        <input
          type="text"
          v-model="name"
          placeholder="user name. . . "
          class="outline-none"
        />
      </p>
      <div class="mx-auto w-fit">
        <div
          class="text-5xl mt-4 h-40 w-40 rounded-full bg-white flex flex-col items-center justify-center border-2 border-pink-600"
        >
          <p class="font-bold">
            {{ lastWeight?.weight }}<span class="text-sm">(Kg)</span>
          </p>
          <p class="text-sm text-gray-500">Current Weight</p>
        </div>
      </div>
      <WeightsChart :weights="weightStore.weights" />
      <form
        @submit.prevent="handleAddWeight"
        class="flex gap-2 justify-center items-center mt-6"
      >
        <input
          type="text"
          v-model="currentWeight"
          class="bg-white p-2 w-[200px] rounded-md outline-none"
          placeholder="Enter your current weight"
        />
        <button
          class="bg-pink-600 cursor-pointer hover:bg-pink-500 text-white p-2 rounded-md text-sm"
        >
          + Add Weight
        </button>
      </form>
      <WeightHistory :weights="weightStore.weights" />
    </div>
  </main>
</template>

<style scoped></style>
