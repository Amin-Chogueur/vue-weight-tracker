import { defineStore } from "pinia";

export const useWeightStore = defineStore("weight", {
  state: () => ({
    weights: [],
  }),

  actions: {
    addWeight(weight) {
      this.weights.unshift(weight);
    },
    deleteWeight() {
      this.weights = this.weights.filter((weight) => !weight.isSelected);
    },
  },
});
