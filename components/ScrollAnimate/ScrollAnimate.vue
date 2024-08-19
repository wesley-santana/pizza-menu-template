<template>
  <div ref="element" :class="{ 'visible': isVisible }" class="animate-on-scroll">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const element = ref(null);
let observer;

const callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      observer.unobserve(entry.target);
    }
  });
};

onMounted(() => {
  observer = new IntersectionObserver(callback);
  observer.observe(element.value);
});

onUnmounted(() => {
  if (observer && element.value) {
    observer.unobserve(element.value);
  }
});
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 2s ease-out, transform 2s ease-out;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
