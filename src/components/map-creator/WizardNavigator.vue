<script setup>
import { defineProps } from 'vue'
const props = defineProps(['enabledNext', 'enabledPrevious', 'goBack', 'goNext'])
</script>

<template>
  <div id="map-creator-wizard-navigator">
    <button :disabled="enabledPrevious === false" @click="goBack">Anterior</button>
    <button :disabled="enabledNext === false" @click="goNext">Siguiente</button>
  </div>
</template>

<style scoped>
  #map-creator-wizard-navigator {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  button {
    background-color: var(--color-primary);
    color: var(--color-background);
    padding: 1rem 1.5rem;
    border: 0;
    border-radius: 0.25rem;
    cursor: pointer;
    margin: 0 0.5rem;
  }

  button:disabled {
    background-color: var(--color-disabled) !important;
  }

  button:hover {
    background-color: var(--color-primary-focus);
  }
</style>