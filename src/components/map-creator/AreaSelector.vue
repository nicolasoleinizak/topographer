<script setup>
  import { defineProps, ref, computed } from 'vue'
  import TextInput from '@/components/TextInput.vue'
  const props = defineProps(['setArea'])
  const width = ref(0)
  const height = ref(0)

  const area = computed(() => width.value * height.value)
</script>

<template>
  <div id="">
    <h2>Ingresar área</h2>
    <div>
      <TextInput
        label="Ancho"
        :value="width"
        :onChange="value => width = value"
      />
      <TextInput
        label="Alto"
        :value="height"
        :onChange="value => height = value"
      />
    </div>
    <div>
      <span>Área total: </span><span>{{ area }}</span>
    </div>
  </div>
</template>