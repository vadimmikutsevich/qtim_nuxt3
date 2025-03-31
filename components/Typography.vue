<script setup lang="ts">
import { computed, useAttrs } from "vue";

type Variant =
  | "heading_112"
  | "heading_84"
  | "heading_36"
  | "heading_32"
  | "body_20"
  | "body_20_loose"
  | "body_16_tight"
  | "body_16_wide";

type Weight =
  | "regular"
  | "medium"
  | "semiBold"
  | "bold"
  | "extraBold"
  | "heavy";

const props = defineProps<{
  variant: Variant;
  weight?: Weight;
  component?: keyof HTMLElementTagNameMap;
  withHTML?: boolean;
  className?: string;
  children?: string;
}>();

const attrs = useAttrs();

const VARIANTS: Record<Variant, string> = {
  heading_112: "text-[112px] leading-[100%]",
  heading_84: "text-[84px] leading-[100%]",
  heading_36: "text-[36px] leading-[124%]",
  heading_32: "text-[32px] leading-[100%]",
  body_20: "text-[20px] leading-[100%]",
  body_20_loose: "text-[20px] leading-[120%]",
  body_16_tight: "text-[16px] leading-[50%]",
  body_16_wide: "text-[16px] leading-[120%] tracking-[1%]",
};

const WEIGHTS: Record<Weight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semiBold: "font-semibold",
  bold: "font-bold",
  extraBold: "font-extrabold",
  heavy: "font-black",
};

const component = computed(() => props.component || "p");
const weight = computed(() => props.weight || "regular");
</script>

<template>
  <component
    :is="component"
    v-bind="attrs"
    :class="[
      'font-[TT Commons]',
      VARIANTS[variant],
      WEIGHTS[weight],
      className,
    ]"
    v-if="withHTML"
    v-html="children"
  />

  <component
    :is="component"
    v-bind="attrs"
    :class="[
      'font-[TT Commons]',
      VARIANTS[variant],
      WEIGHTS[weight],
      className,
    ]"
    v-else
  >
    <slot />
  </component>
</template>
