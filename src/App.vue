<script setup lang="ts">
const pdfUrl = new URL('src/assets/简历.pdf', import.meta.url).href
</script>

<template>
  <div class="app-shell">
    <aside class="app-sidebar">
      <div class="brand">
        <div class="brand__avatar" aria-hidden="true">
          <img src="./assets/证件照1.jpg" alt="头像" class="avatar-img" />
        </div>
        <div class="brand__meta">
          <div class="brand__name" style="font-size: 30px; font-weight: bold; margin-left: 20px;">王 康</div>
        </div>
      </div>

      <nav class="nav">
        <RouterLink class="nav__item" to="/" exact-active-class="is-active">
          <span class="nav__icon" aria-hidden="true">⌂</span>
          <span class="nav__text">首页</span>
        </RouterLink>
        <RouterLink class="nav__item" to="/about" active-class="is-active">
          <span class="nav__icon" aria-hidden="true">👤</span>
          <span class="nav__text">关于我</span>
        </RouterLink>
        <RouterLink class="nav__item" to="/research" active-class="is-active">
          <span class="nav__icon" aria-hidden="true">🔬</span>
          <span class="nav__text">科研经历</span>
        </RouterLink>
        <RouterLink class="nav__item" to="/internship" active-class="is-active">
          <span class="nav__icon" aria-hidden="true">💼</span>
          <span class="nav__text">实习经历</span>
        </RouterLink>
        <RouterLink class="nav__item" to="/competition" active-class="is-active">
          <span class="nav__icon" aria-hidden="true">🏆</span>
          <span class="nav__text">竞赛经历</span>
        </RouterLink>
        <!-- <RouterLink class="nav__item" to="/projects" active-class="is-active">
          <span class="nav__icon" aria-hidden="true">🧩</span>
          <span class="nav__text">项目</span>
        </RouterLink> -->
        <RouterLink class="nav__item" to="/hobbies" active-class="is-active">
          <span class="nav__icon" aria-hidden="true">✨</span>
          <span class="nav__text">兴趣爱好</span>
        </RouterLink>
      </nav>

      <!-- <div class="sidebar-footer">
        <a class="sidebar-footer__link" :href="pdfUrl" download="简历.pdf">下载简历</a>
      </div> -->
    </aside>

    <main class="app-main">

      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  height: 100vh;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 0;
}

.app-sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 18px 14px;
  border-right: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
  backdrop-filter: blur(10px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 10px 14px;
}

.brand__avatar {
  width: 60px;
  height: 70px;
  border-radius: 12px;
  overflow: hidden;
  display: grid;
  margin-left: 20px;
  place-items: center;
  font-weight: 800;
  box-shadow: 0 12px 34px rgba(124, 92, 255, 0.25);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

.brand__name {
  font-weight: 800;
  letter-spacing: 0.2px;
}

.brand__title {
  margin-top: 2px;
  font-size: 12px;
  color: var(--muted);
}

.nav {
  display: grid;
  gap: 6px;
  padding: 8px 8px 0;
}

.nav__item {
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  color: var(--text);
  text-decoration: none;
  border: 1px solid transparent;
  transition:
    transform 160ms ease,
    background 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease;
}

.nav__icon {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.06);
  transition:
    transform 180ms ease,
    background 180ms ease,
    color 180ms ease;
}

.nav__item:hover {
  background: rgba(124, 92, 255, 0.12);
  border-color: rgba(124, 92, 255, 0.25);
  transform: translateY(-1px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.22);
}

.nav__item:hover .nav__icon {
  transform: rotate(-3deg) scale(1.06);
  background: rgba(124, 92, 255, 0.22);
}

.nav__item.is-active {
  background: rgba(124, 92, 255, 0.18);
  border-color: rgba(124, 92, 255, 0.35);
  box-shadow: 0 10px 26px rgba(124, 92, 255, 0.18);
}

.nav__item.is-active .nav__icon {
  background: rgba(124, 92, 255, 0.3);
}

.sidebar-footer {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--line);
}

.sidebar-footer__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  text-decoration: none;
  transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.sidebar-footer__link:hover {
  background: rgba(0, 225, 255, 0.08);
  border-color: rgba(0, 225, 255, 0.22);
  transform: translateY(-1px);
}

.app-main {
  min-width: 0;
  height: 100vh;
  overflow: auto;
  padding: 22px 22px 28px;
}

.app-topbar {
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 10px 0 18px;
  background: linear-gradient(180deg, var(--bg) 60%, rgba(0, 0, 0, 0));
}

.app-topbar__hint {
  font-size: 12px;
  color: var(--muted);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

@media (max-width: 920px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .app-sidebar {
    position: relative;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--line);
  }

  .sidebar-footer {
    position: static;
    padding: 12px 8px 0;
  }

  .app-main {
    height: auto;
    padding: 18px 14px 20px;
  }
}

@media (max-width: 768px) {
  .app-sidebar {
    padding: 12px 10px;
  }

  .brand {
    padding: 6px 6px 10px;
    gap: 8px;
  }

  .brand__avatar {
    width: 50px;
    height: 60px;
    margin-left: 10px;
  }

  .brand__name {
    font-size: 24px !important;
    margin-left: 10px !important;
  }

  .nav {
    gap: 4px;
    padding: 6px 6px 0;
  }

  .nav__item {
    padding: 8px 10px;
    gap: 8px;
  }

  .nav__icon {
    width: 26px;
    height: 26px;
    font-size: 14px;
  }

  .nav__text {
    font-size: 14px;
  }

  .sidebar-footer {
    padding: 10px 6px 0;
  }

  .sidebar-footer__link {
    padding: 8px 10px;
    font-size: 14px;
  }

  .app-main {
    padding: 14px 10px 16px;
  }
}

@media (max-width: 480px) {
  .app-sidebar {
    padding: 10px 8px;
  }

  .brand {
    padding: 4px 4px 8px;
  }

  .brand__avatar {
    width: 40px;
    height: 50px;
    margin-left: 6px;
    border-radius: 10px;
  }

  .brand__name {
    font-size: 20px !important;
    margin-left: 6px !important;
  }

  .nav {
    gap: 3px;
    padding: 4px 4px 0;
  }

  .nav__item {
    padding: 6px 8px;
    gap: 6px;
    border-radius: 10px;
  }

  .nav__icon {
    width: 24px;
    height: 24px;
    font-size: 12px;
    border-radius: 8px;
  }

  .nav__text {
    font-size: 13px;
  }

  .sidebar-footer {
    padding: 8px 4px 0;
  }

  .sidebar-footer__link {
    padding: 6px 8px;
    font-size: 13px;
    border-radius: 10px;
  }

  .app-main {
    padding: 10px 8px 12px;
  }
}
</style>
