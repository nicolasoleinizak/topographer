<script setup>
  const props = defineProps(['label', 'value', 'onChange'])

  const handleInput = (event) => {
    props.onChange(event.target.value)
  }
</script>

<template>
  <div>
    <label>{{label}}</label>
    <input type="text" :value="value" @input="handleInput" />
  </div>
</template>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>