<script setup>
import { defineProps } from "vue";
defineProps({
  weight: {
    type: Object,
  },
  index: {
    type: Number,
  },
});
</script>
<template>
  <div
    class="flex items-center justify-between mb-1 p-3"
    :class="index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200'"
  >
    <div class="flex items-center gap-1">
      <input
        v-model="weight.isSelected"
        type="checkbox"
        class="appearance-none w-4 h-4 border border-gray-400 rounded checked:bg-pink-500 checked:border-pink-500"
      />

      <label class="font-bold">
        <input class="w-[26px]" v-model="weight.weight" />
        <span>kg</span></label
      >
    </div>

    <p class="font-small">{{ weight.date }}</p>
  </div>
</template>
