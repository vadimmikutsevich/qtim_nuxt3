<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, computed } from "vue";

import Typography from "../components/Typography.vue";

import { common_api } from "../consts/urls";
import { isArticleArray } from "../types/Article";

definePageMeta({
  title: "Articles – QTIM",
  layout: "default",
});

const { data: articlesData } = await useFetch(common_api);

const articles = computed(() => {
  if (!isArticleArray(articlesData.value)) {
    console.warn("Некорректные данные с API:", articlesData.value);
    return [];
  }
  return articlesData.value;
});

const router = useRouter();
const currentPage = ref(1);
const pageSize = 8;

const paginated = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return articles.value.slice(start, start + pageSize);
});

function onPageChange(page: number) {
  currentPage.value = page;
}

function goToArticle(id: string) {
  router.push(`/blog/${id}`);
}
</script>

<template>
  <section class="mt-[120px] mb-[140px]">
    <Typography variant="heading_84">Articles</Typography>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10"
    >
      <ArticleCard
        v-for="article in paginated"
        :key="article.id"
        :article="article"
        @click="goToArticle(article.id)"
      />
    </div>

    <Pagination
      :current-page="currentPage"
      :total-items="articles.length"
      :page-size="pageSize"
      @page-change="onPageChange"
    />
  </section>
</template>
