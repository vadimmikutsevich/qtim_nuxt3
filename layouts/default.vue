<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="flex flex-col bg-white text-black">
    <Header />

    <main class="flex-grow">
      <div
        class="container mx-auto max-w-[1218px] min-h-[calc(100vh-121px)] max-xl:px-4"
      >
        <NuxtPage />
      </div>
    </main>

    <Footer />
  </div>
</template>
