<script setup>
import { defineProps, computed } from "vue";
import WeightItem from "./WeightItem.vue";
import { useWeightStore } from "../stores/weightStore";
import EmptyWeightHistory from "./EmptyWeightHistory.vue";
const weightStore = useWeightStore();

const props = defineProps({
  weights: {
    type: Array,
  },
});
//state
const isAweightSelected = computed(() => {
  return props.weights.some((weight) => weight.isSelected);
});

//methodes
function handleDeleteWeights() {
  const confirm = window.confirm("Are you sure you want to delete this?");
  if (confirm) {
    weightStore.deleteWeight();
  }
}
</script>

<template>
  <section v-if="weights.length === 0"><EmptyWeightHistory /></section>
  <section v-else class="my-6">
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-gray-500 mb-3">Weight History</h2>
      <button
        v-if="isAweightSelected"
        @click="handleDeleteWeights"
        class="bg-red-600 text-white py-1 px-2 text-sm rounded cursor-pointer"
      >
        Delete
      </button>
    </div>
    <WeightItem
      v-for="(weight, index) in weights"
      :key="weight.id"
      :weight="weight"
      :index="index"
    />
  </section>
</template>
