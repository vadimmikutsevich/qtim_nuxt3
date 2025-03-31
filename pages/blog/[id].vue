<template>
  <section class="text-black-deep mt-[120px] mb-[80px]">
    <div v-if="!article" class="text-center">Article not found</div>

    <div v-else>
      <Typography component="h1" variant="heading_84">
        {{ article.title }}
      </Typography>

      <div
        class="aspect-[1216/700] w-full max-w-[1216px] mt-[72px] overflow-hidden"
      >
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-full object-cover"
          loading="lazy"
          @error="hasImageError = true"
          v-if="!hasImageError"
        />

        <Typography
          v-else
          variant="body_16_tight"
          class="w-full h-[300px] bg-gray-200 flex items-center justify-center text-gray-500"
        >
          No image
        </Typography>
      </div>

      <div class="mt-[80px] max-w-[695px]">
        <Typography variant="body_16_tight" class="uppercase">
          About
        </Typography>
        <Typography variant="heading_36" class="whitespace-pre-line mt-8">
          {{ article.description }}
        </Typography>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";

import { isArticle } from "../../types/Article";
import type { Article } from "../../types/Article";

import { common_api } from "~/consts/urls";

definePageMeta({
  title: "Article – QTIM",
  layout: "default",
});

const route = useRoute();
const hasImageError = ref(false);

const { data } = await useFetch<Article | null>(
  `${common_api}${route.params.id}`,
  {
    transform: (data) => (isArticle(data) ? data : null),
  }
);

console.log({ data });

const article = computed(() => data.value);
</script>
