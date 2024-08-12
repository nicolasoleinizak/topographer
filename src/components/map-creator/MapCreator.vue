<script setup>
import WizardNavigator from '@/components/map-creator/WizardNavigator.vue'
import AreaSelector from '@/components/map-creator/AreaSelector.vue'
import { ref } from 'vue'
const currentStep = ref(1)

const handleGoBack = () => {
  currentStep.value--
}

const handleGoNext = () => {
  currentStep.value++
}
</script>

<template>
  <div id="map-creator-container">
    <div v-if="currentStep === 1">
      <AreaSelector />
    </div>
    <div v-else-if="currentStep === 2">
      <h1>Paso 2</h1>
    </div>
    <div v-else-if="currentStep === 3">
      <h1>Paso 3</h1>
    </div>
    <div v-else>En ningún paso actualmente</div>
    <WizardNavigator
      :enabledPrevious="currentStep > 1"
      :enabledNext="currentStep < 3" 
      :goBack="handleGoBack"
      :goNext="handleGoNext"
    />
  </div>
</template>

<style scoped>
#map-creator-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>