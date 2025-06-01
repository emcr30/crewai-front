<template>
  <v-container>
    <h2>Chat con agente {{ agentId }}</h2>
    <v-textarea v-model="message" label="Mensaje" />
    <v-btn @click="send" color="primary">Enviar</v-btn>
    <v-divider />
    <div v-for="msg in messages" :key="msg.id">
      <p>{{ msg.message }}</p>
    </div>
    <div v-if="respuesta">
      <h3>Respuesta:</h3>
      <p>{{ respuesta }}</p>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const agentId = route.params.agentId
const message = ref('')
const respuesta = ref('')
const messages = ref([])

const send = async () => {
  const res = await axios.post(`/api/chat/${agentId}`, { message: message.value })
  respuesta.value = res.data.respuesta
  messages.value.push({ message: message.value })
  message.value = ''
}
</script>
