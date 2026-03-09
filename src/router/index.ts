import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ResearchView from '../views/ResearchView.vue'
import InternshipView from '../views/InternshipView.vue'
import CompetitionView from '../views/CompetitionView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import HobbiesView from '../views/HobbiesView.vue'

export type ResumeRouteName =
  | 'home'
  | 'about'
  | 'experience'
  | 'research'
  | 'internship'
  | 'competition'
  | 'projects'
  | 'hobbies'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/experience', name: 'experience', component: ExperienceView },
  { path: '/research', name: 'research', component: ResearchView },
  { path: '/internship', name: 'internship', component: InternshipView },
  { path: '/competition', name: 'competition', component: CompetitionView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/hobbies', name: 'hobbies', component: HobbiesView },
  // backward compatibility (old link / bookmark)
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

