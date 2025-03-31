<script setup lang="ts">
import Typography from "./Typography.vue";

import LinkIcon from "../assets/icons/link.svg";

const projectQuestion = "Is there a project?";

const contact = {
  label: "For all questions",
  phone: "+7 (920) 278—00—68",
  email: "qtim@agency.com",
};

const offices = [
  {
    city: "Russia",
    label: "Office in Russia",
    address: ["139 Ruben Station Lake", "Drew, NM 52678"],
  },
  {
    city: "Dubai",
    label: "Office in Dubai",
    address: ["139 Ruben Station Lake", "Drew, NM 52678"],
  },
];

const socialLeft = ["Facebook", "Instagram", "Telegram"];
const socialRight = ["Behance", "LinkedIn", "Privacy Policy"];

function toggleColorTheme() {
  const root = document.documentElement;
  const isColored = root.dataset.colored === "true";

  if (isColored) {
    delete root.dataset.colored;
  } else {
    root.dataset.colored = "true";
  }
}
</script>

<template>
  <footer class="bg-[var(--footer-bg)] text-black-deep max-xl:px-4">
    <div class="max-w-[1218px] mx-auto w-full flex flex-col min-h-screen">
      <div class="flex grow">
        <div class="pt-[140px] w-full max-w-[464px]">
          <Typography class="text-sm mb-4" variant="body_16_wide">{{
            projectQuestion
          }}</Typography>
          <Typography
            class="text-[84px] leading-[100%] font-black tracking-tight"
            variant="heading_112"
            component="h2"
          >
            <Typography
              variant="heading_112"
              component="p"
              class="underline decoration-[1px] underline-offset-[12px]"
              >Let’s work</Typography
            >
            <Typography
              variant="heading_112"
              component="span"
              class="underline decoration-[1px] underline-offset-[12px]"
              >to</Typography
            >
            <Typography variant="heading_112" component="span">g</Typography>
            <Typography
              variant="heading_112"
              component="span"
              class="underline decoration-[1px] underline-offset-[12px]"
              >ether</Typography
            >
          </Typography>
        </div>

        <div
          class="flex flex-col gap-y-9 base-full w-full items-center justify-center"
        >
          <div>
            <Typography variant="body_16_wide">{{ contact.label }}</Typography>
            <Typography class="mt-3" variant="body_16_wide">{{
              contact.phone
            }}</Typography>
            <Typography variant="body_16_wide">{{ contact.email }}</Typography>
          </div>

          <div v-for="office in offices" :key="office.city">
            <Typography class="mb-3" variant="body_16_wide">{{
              office.label
            }}</Typography>
            <Typography
              v-for="line in office.address"
              variant="body_16_wide"
              :key="line"
            >
              {{ line }}
            </Typography>
            <div class="mt-2">
              <div
                class="w-8 h-8 rounded-full bg-black flex items-center justify-center"
              >
                <LinkIcon class="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between items-end">
        <div class="flex gap-x-8 items-center mb-[30px]">
          <Typography
            v-for="link in socialLeft"
            class="underline decoration-[1px] underline-offset-[6px]"
            variant="body_16_wide"
            component="a"
            :key="link"
            href="#"
            >{{ link }}</Typography
          >
        </div>

        <div
          class="group w-[358px] h-[179px] bg-black text-white flex items-end justify-center rounded-t-full cursor-pointer transition-transform duration-200 active:scale-95"
          @click="toggleColorTheme"
        >
          <Typography
            class="mb-[25px] transition-opacity duration-200 group-active:opacity-70"
            variant="heading_32"
          >
            Go
          </Typography>
        </div>

        <div class="flex gap-x-8 items-center mb-[30px]">
          <Typography
            v-for="link in socialRight"
            class="underline decoration-[1px] underline-offset-[6px]"
            variant="body_16_wide"
            component="a"
            :key="link"
            href="#"
            >{{ link }}</Typography
          >
        </div>
      </div>
    </div>
  </footer>
</template>
