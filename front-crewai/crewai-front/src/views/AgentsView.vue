<template>
  <v-container>
    <AgentForm @refresh="fetchAgents" />
    <v-list>
      <v-list-item v-for="agent in agents" :key="agent.id">
        <v-list-item-title>{{ agent.name }}</v-list-item-title>
        <v-btn color="success" :to="`/chat/${agent.id}`">Chat</v-btn>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import AgentForm from '../components/AgentForm.vue'

const agents = ref([])

const fetchAgents = async () => {
  const res = await axios.get('/api/agents')
  agents.value = res.data
}

onMounted(fetchAgents)
</script>
