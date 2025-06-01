<template>
  <v-card class="pa-4">
    <h2>Chats de Agente</h2>
    <v-text-field v-model="agentId" label="ID del Agente" />
    <v-btn @click="cargarChats">Cargar</v-btn>
    <v-list>
      <v-list-item v-for="chat in chats" :key="chat.id">
        <v-list-item-content>
          <v-list-item-title>{{ chat.message }}</v-list-item-title>
          <v-list-item-subtitle>{{ chat.timestamp }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const chats = ref([])
const agentId = ref('')

const cargarChats = async () => {
  try {
    const { data } = await axios.get(`/api/agents/${agentId.value}/chats`)
    chats.value = data
  } catch (error) {
    console.error(error)
    alert('Error al cargar chats')
  }
}
</script>
