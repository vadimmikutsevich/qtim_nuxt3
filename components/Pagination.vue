<script setup lang="ts">
import Typography from "./Typography.vue";

import ArrowForwardIcon from "../assets/icons/arrow-forward.svg";

const props = defineProps<{
  currentPage: number;
  totalItems: number;
  pageSize: number;
}>();

const emit = defineEmits<{
  (e: "page-change", page: number): void;
}>();

const totalPages = computed(() =>
  Math.ceil((props.totalItems || 0) / (props.pageSize || 1))
);

const currentSetStart = computed(
  () => Math.floor((props.currentPage - 1) / 5) * 5 + 1
);

const visiblePages = computed(() => {
  const pages = [];
  const max = Math.min(currentSetStart.value + 4, totalPages.value);
  const min = Math.max(max - 4, 1);
  for (let i = min; i <= max; i++) {
    pages.push(i);
  }

  return pages;
});
function goToNextSet() {
  const nextPage = currentSetStart.value + 5;
  if (nextPage <= totalPages.value) {
    emit("page-change", nextPage);
  }
}

function goToPrevSet() {
  const prevPage = Math.max(currentSetStart.value - 5, 1);
  emit("page-change", prevPage);
}
</script>

<template>
  <div class="flex gap-x-2 mt-[50px]">
    <button
      v-if="true"
      @click="goToPrevSet"
      :disabled="currentSetStart === 1"
      class="w-11 h-11 rounded-[12px] border border-[#E8E8E8] text-black flex cursor-pointer items-center justify-center transition"
      :class="{
        'opacity-0 pointer-events-none': currentSetStart === 1,
        'hover:bg-gray-100': currentSetStart > 1,
      }"
    >
      <ArrowForwardIcon class="transform scale-x-[-1]" />
    </button>

    <button
      v-for="page in visiblePages"
      :key="page"
      @click="$emit('page-change', page)"
      :class="[
        'w-11 h-11 rounded-[12px] flex items-center justify-center transition',
        page === currentPage
          ? 'bg-black text-white'
          : 'bg-gray-light text-black-deep hover:bg-gray-100 cursor-pointer',
      ]"
    >
      <Typography variant="body_16_tight">{{ page }}</Typography>
    </button>

    <button
      v-if="true"
      @click="goToNextSet"
      :disabled="currentSetStart + 5 > totalPages"
      class="w-11 h-11 rounded-[12px] border border-[#E8E8E8] text-black flex cursor-pointer items-center justify-center transition"
      :class="{
        'opacity-0 pointer-events-none': currentSetStart + 5 > totalPages,
        'hover:bg-gray-100': currentSetStart + 5 <= totalPages,
      }"
    >
      <ArrowForwardIcon />
    </button>
  </div>
</template>
