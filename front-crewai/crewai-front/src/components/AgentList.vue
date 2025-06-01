<template>
  <v-card class="pa-4 ma-4">
    <v-card-title>Lista de Agentes</v-card-title>
    <v-list>
      <v-list-item v-for="agent in agents" :key="agent.id">
        <v-list-item-content>
          <v-list-item-title>{{ agent.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ agent.description }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-chip color="blue" label>{{ agent.model }}</v-chip>
          <v-chip color="green" label>Temp: {{ agent.temperature }}</v-chip>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const agents = ref([])

onMounted(async () => {
  const response = await axios.get('http://localhost:5000/api/agents')
  agents.value = response.data
})
</script>
