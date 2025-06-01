<template>
  <v-container>
    <v-card v-for="(logs, id) in groupedLogs" :key="id" class="mb-4">
      <v-card-title>Conversación ID: {{ id }}</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="log in logs" :key="log.id">
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">
                {{ log.role === 'user' ? '👤 Usuario' : '🤖 Agente' }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ log.message }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const logs = ref([])
const groupedLogs = ref({})

onMounted(async () => {
  const response = await axios.get('http://localhost:5000/api/chat-logs')
  logs.value = response.data

  // Agrupar por conversation_id
  groupedLogs.value = logs.value.reduce((acc, log) => {
    const id = log.conversation_id || 'sin_id'
    if (!acc[id]) acc[id] = []
    acc[id].push(log)
    return acc
  }, {})
})
</script>
