<script setup lang="ts">
import { ref } from "vue";

import type { Article } from "../types/Article";

defineProps<{
  article: Article;
}>();

const hasError = ref(false);
</script>

<template>
  <div
    class="group w-[280px] h-[378px] flex flex-col transition-transform duration-300 hover:scale-[1.05]"
  >
    <NuxtLink
      :to="`/blog/${article.id}`"
      class="aspect-[4/3] overflow-hidden block"
    >
      <img
        v-if="!hasError"
        :src="article.image"
        :alt="article.title"
        class="w-full h-full object-cover"
        loading="lazy"
        @error="hasError = true"
      />
      <Typography
        v-else
        variant="body_16_tight"
        class="w-full h-full bg-gray-200 text-gray-500 flex items-center justify-center"
      >
        No image
      </Typography>
    </NuxtLink>

    <div class="flex flex-col justify-between flex-1 mt-6 mr-4">
      <Typography variant="body_20_loose" class="text-black-deep line-clamp-3">
        {{ article.preview }}
      </Typography>

      <NuxtLink>
        <Typography
          component="span"
          variant="body_20_loose"
          :to="`/articles/${article.id}`"
          class="text-[var(--link-article)] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Read more
        </Typography>
      </NuxtLink>
    </div>
  </div>
</template>
