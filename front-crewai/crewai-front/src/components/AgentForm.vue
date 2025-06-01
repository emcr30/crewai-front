<template>
  <v-card class="pa-4 ma-4">
    <v-card-title>Crear nuevo Agente</v-card-title>
    <v-form @submit.prevent="submitAgent">
      <v-text-field v-model="agent.name" label="Nombre" required />
      <v-textarea v-model="agent.description" label="Descripción" />

      <v-select
        v-model="agent.model"
        :items="models"
        label="Modelo"
        required
      />
      <v-slider
        v-model="agent.temperature"
        :max="1"
        :min="0"
        step="0.1"
        label="Temperatura"
        thumb-label
      />

      <v-select
        v-model="agent.tool_ids"
        :items="tools"
        item-value="id"
        item-title="name"
        label="Herramientas (Tools)"
        multiple
      />

      <v-btn type="submit" color="primary">Crear</v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const agent = ref({
  name: '',
  description: '',
  model: '',
  temperature: 0.7,
  tool_ids: []
})

const models = ['gpt-4', 'gpt-3.5-turbo']
const tools = ref([])

onMounted(async () => {
  const response = await axios.get('http://localhost:5000/api/tools')
  tools.value = response.data
})

const submitAgent = async () => {
  await axios.post('http://localhost:5000/api/agents', agent.value)
  alert('Agente creado correctamente')
}
</script>
