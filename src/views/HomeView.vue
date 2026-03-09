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
  { title: '科研经历', desc: '论文发表、专利申请等', icon: '🔬', to: '/research' },
  { title: '实习经历', desc: '工作实习、项目实践', icon: '💼', to: '/internship' },
  { title: '竞赛经历', desc: '各类竞赛获奖情况', icon: '🏆', to: '/competition' },
  // { title: '项目', desc: '代表作品、亮点与截图入口', icon: '🧩', to: '/projects' },
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
