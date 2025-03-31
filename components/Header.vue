<script setup lang="ts">
import Button from "./Button.vue";
import Typography from "./Typography.vue";
import LanguageIcon from "./LanguageIcon.vue";

import Logo from "../assets/images/logo.svg";
import flagEn from "../assets/icons/UK.svg";
</script>

<template>
  <header
    class="flex items-center justify-between h-[121px] px-10 max-w-[1440px] w-full mx-auto"
  >
    <NuxtLink to="/" class="inline-block">
      <Logo />
    </NuxtLink>

    <nav class="flex items-center gap-x-[90px]">
      <div class="flex items-center gap-x-14.5">
        <NuxtLink to="/works" class="hover:opacity-50 transition-opacity"
          ><Typography variant="body_20">Works</Typography></NuxtLink
        >
        <NuxtLink to="/about" class="hover:opacity-50 transition-opacity"
          ><Typography variant="body_20">About</Typography></NuxtLink
        >
      </div>

      <div class="flex items-center gap-x-4">
        <LanguageIcon :src="flagEn" alt="English" />
        <Button>
          <Typography variant="body_20"> Let’s work </Typography>
        </Button>
      </div>
    </nav>
  </header>
</template>
