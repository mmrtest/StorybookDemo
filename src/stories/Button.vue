<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
import "./button.css";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    label: string;
    size?: "small" | "medium" | "large";
    textColor?: string;
    backgroundColor?: string;
  }>(),
  { backgroundColor: "#000000", textColor: "#ffffff" }
);

const emit = defineEmits<{
  (e: "click", id: number): void;
}>();

const classes = computed(() => ({
  "storybook-button": true,
  [`storybook-button--${props.size || "medium"}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
  color: props.textColor,
}));

const onClick = () => {
  emit("click", 1);
};
</script>
