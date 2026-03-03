import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import HobbiesView from '../views/HobbiesView.vue'

export type ResumeRouteName =
  | 'home'
  | 'about'
  | 'experience'
  | 'projects'
  | 'hobbies'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/experience', name: 'experience', component: ExperienceView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/hobbies', name: 'hobbies', component: HobbiesView },
  // backward compatibility (old link / bookmark)
  { path: '/research', redirect: '/experience' },
  { path: '/skills', redirect: '/hobbies' },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

