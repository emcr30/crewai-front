import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgentsView from '../views/AgentsView.vue'
import ToolsView from '../views/ToolsView.vue'
import ChatView from '../views/ChatView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/agents', component: AgentsView },
  { path: '/tools', component: ToolsView },
  { path: '/chat/:agentId', component: ChatView, props: true },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
