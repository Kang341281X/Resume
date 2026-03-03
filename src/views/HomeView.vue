<script setup lang="ts">
import { useRouter } from 'vue-router'

type Card = {
  title: string
  desc: string
  icon: string
  to: string
}

const router = useRouter()

const cards: Card[] = [
  { title: '关于我', desc: '一句话自我介绍、优势与标签', icon: '👤', to: '/about' },
  { title: '经历', desc: '科研、教育、工作经历', icon: '📚', to: '/experience' },
  { title: '项目', desc: '代表作品、亮点与截图入口', icon: '🧩', to: '/projects' },
  { title: '兴趣爱好', desc: '运动、阅读、摄影等', icon: '✨', to: '/hobbies' },
]

function go(to: string) {
  router.push(to)
}
</script>

<template>
  <section class="page">

    <div class="card-grid">
      <article v-for="card in cards" :key="card.to" class="module-card" role="button" tabindex="0" @click="go(card.to)"
        @keydown.enter.prevent="go(card.to)" @keydown.space.prevent="go(card.to)">
        <div class="module-card__top">
          <div class="module-card__icon" aria-hidden="true">{{ card.icon }}</div>
          <div class="module-card__cta">
            <span>点击进入</span>
            <span aria-hidden="true">→</span>
          </div>
        </div>
        <h2 class="module-card__title">{{ card.title }}</h2>
        <p class="module-card__desc">{{ card.desc }}</p>
      </article>
    </div>
  </section>
</template>
