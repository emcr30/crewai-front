<template>
  <v-container>
    <ToolForm @refresh="fetchTools" />
    <v-list>
      <v-list-item v-for="tool in tools" :key="tool.id">
        <v-list-item-title>{{ tool.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ tool.description }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ToolForm from '../components/ToolForm.vue'

const tools = ref([])

const fetchTools = async () => {
  const res = await axios.get('/api/tools')
  tools.value = res.data
}

onMounted(fetchTools)
</script>
