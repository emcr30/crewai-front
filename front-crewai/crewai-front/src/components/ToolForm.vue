<template>
  <v-form @submit.prevent="submit">
    <v-text-field v-model="form.name" label="Nombre de la herramienta" />
    <v-text-field v-model="form.description" label="Descripción" />
    <v-text-field v-model="form.endpoint" label="Endpoint" />
    <v-text-field v-model="form.method" label="Método (GET/POST)" />
    <v-textarea v-model="form.input_schema" label="Input Schema (JSON)" />
    <v-btn type="submit" color="primary">Crear herramienta</v-btn>
  </v-form>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
const emit = defineEmits(['refresh'])

const form = reactive({
  name: '',
  description: '',
  endpoint: '',
  method: 'POST',
  input_schema: ''
})

const submit = async () => {
  await axios.post('/api/tools', form)
  emit('refresh')
}
</script>
