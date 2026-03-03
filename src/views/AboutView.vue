<script setup lang="ts">
import { ref } from 'vue'

// 实际联系方式
const email = 'wangkang2910@163.com'
const phone = '15156758480'

// 弹窗控制
const showDialog = ref(false)
const dialogMessage = ref('')

function copyToClipboard(text: string, message: string) {
  navigator.clipboard.writeText(text).then(() => {
    dialogMessage.value = message
    showDialog.value = true
    setTimeout(() => {
      showDialog.value = false
    }, 1600)
  })
}

// 外链
const githubUrl = 'https://github.com/Kang341281X'
const csdnUrl = 'https://blog.csdn.net/qq_45729306?spm=1000.2115.3001.5343'
</script>

<template>
  <section class="page">
    <div class="about-cards-row">
      <div class="about-info-card">
        <div class="about-info-avatar">
          <img src="../assets/证件照1.jpg" alt="证件照" class="about-avatar-img" />
        </div>
        <div class="about-info-details">
          <div class="info-row">
            <span class="info-label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
            <span class="info-value">王康</span>
          </div>
          <div class="info-row">
            <span class="info-label">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
            <span class="info-value">男</span>
          </div>
          <div class="info-row">
            <span class="info-label">出生年月：</span>
            <span class="info-value">2000.05</span>
          </div>
          <div class="info-row">
            <span class="info-label">政治面貌：</span>
            <span class="info-value">中共党员</span>
          </div>
          <div class="info-row">
            <span class="info-label">籍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贯：</span>
            <span class="info-value">安徽省亳州市</span>
          </div>
          <div class="info-row">
            <span class="info-label">民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族：</span>
            <span class="info-value">汉族</span>
          </div>
        </div>
      </div>

      <div class="about-panels">
        <div class="panel__content">
          <div class="info-row">
            <span class="info-label">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;校：</span>
            <span class="info-value">安徽大学（211，双一流）</span>
          </div>
          <div class="info-row">
            <span class="info-label">专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业：</span>
            <span class="info-value">人工智能（硕士研究生）</span>
          </div>
          <div class="info-row">
            <span class="info-label">在校时间：</span>
            <span class="info-value">2023.09 - 2026.06</span>
          </div>

          <br /><br />

          <div class="info-row">
            <span class="info-label">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;校：</span>
            <span class="info-value">滁州学院</span>
          </div>
          <div class="info-row">
            <span class="info-label">专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业：</span>
            <span class="info-value">计算机科学与技术（本科）</span>
          </div>
          <div class="info-row">
            <span class="info-label">在校时间：</span>
            <span class="info-value">2019.09 - 2023.06</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系方式 -->
    <div class="about-contact">
      <div class="panel__content">
        <div class="contact-grid">
          <!-- 邮箱，点击复制 -->
          <button class="contact-card contact-card--left" type="button" @click="copyToClipboard(email, '邮箱地址已复制！')">
            <div class="contact-card__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="3" stroke="#7c5cff" stroke-width="2" fill="#f1f0ff" />
                <path d="M3 7l9 6 9-6" stroke="#7c5cff" stroke-width="2" fill="none" />
              </svg>
            </div>
            <div class="contact-card__meta contact-card__meta--left">
              <div class="contact-card__label">邮箱</div>
              <div class="contact-card__value">{{ email }}</div>
            </div>
            <div class="contact-card__go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="#7c5cff" stroke-width="2" fill="none" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </button>

          <!-- 手机，点击复制 -->
          <button class="contact-card contact-card--left" type="button" @click="copyToClipboard(phone, '手机号已复制！')">
            <div class="contact-card__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="2" width="12" height="20" rx="3" stroke="#7c5cff" stroke-width="2" fill="#f1f0ff" />
                <circle cx="12" cy="18" r="1" fill="#7c5cff" />
              </svg>
            </div>
            <div class="contact-card__meta contact-card__meta--left">
              <div class="contact-card__label">手机（同微信）</div>
              <div class="contact-card__value">{{ phone }}</div>
            </div>
            <div class="contact-card__go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="#7c5cff" stroke-width="2" fill="none" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </button>

          <!-- GitHub，外链 -->
          <a class="contact-card contact-card--left" :href="githubUrl" target="_blank">
            <div class="contact-card__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#f1f0ff" stroke="#7c5cff" stroke-width="2" />
                <path
                  d="M16 18v-2.087c0-.693-.238-1.142-.857-1.428l-.786-.392a2.242 2.242 0 0 0-2.714 0l-.786.392c-.619.286-.857.735-.857 1.428V18M14.5 13c.828 0 1.5-.896 1.5-2s-.672-2-1.5-2-1.5.896-1.5 2 .672 2 1.5 2zm-5 .004C10.328 13.004 11 12.108 11 11.004c0-1.104-.672-2-1.5-2s-1.5.896-1.5 2 .672 2 1.5 2z"
                  stroke="#6f4cff" stroke-width="1.5" fill="none" />
              </svg>
            </div>
            <div class="contact-card__meta contact-card__meta--left">
              <div class="contact-card__label">GitHub</div>
              <div class="contact-card__value">github.com/Kang341281X</div>
            </div>
            <div class="contact-card__go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="#7c5cff" stroke-width="2" fill="none" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </a>

          <!-- CSDN 博客，外链 -->
          <a class="contact-card" :href="csdnUrl" target="_blank">
            <div class="contact-card__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="3" width="16" height="18" rx="3" fill="#f1f0ff" stroke="#7c5cff" stroke-width="2" />
                <path d="M8 7h8M8 11h8M8 15h4" stroke="#6f4cff" stroke-width="1.7" stroke-linecap="round" />
              </svg>
            </div>
            <div class="contact-card__meta">
              <div class="contact-card__label">CSDN 博客</div>
              <div class="contact-card__value">blog.csdn.net</div>
            </div>
            <div class="contact-card__go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="#7c5cff" stroke-width="2" fill="none" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="showDialog" class="contact-toast">{{ dialogMessage }}</div>
    </transition>

  </section>
</template>

<style scoped>
.about-cards-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 32px;
  /* 与下方卡片间距 */
}

.about-info-card {
  width: 550px;
  min-width: 550px;
  max-width: 550px;
  display: flex;
  align-items: center;
  gap: 30px;
  /* 证件照与个人信息之间30px间距 */
  margin: 0;
  padding: 22px 22px;
  background: rgba(255, 255, 255, 0.035);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 10px 32px rgba(124, 92, 255, 0.03);
}

.about-panels {
  width: 530px;
  min-width: 530px;
  max-width: 530px;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 22px 22px;
  background: rgba(255, 255, 255, 0.035);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 10px 32px rgba(124, 92, 255, 0.03);
}

.about-info-avatar {
  flex-shrink: 0;
  width: 200px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  border: 2px solid #fff2;
  background: #f9f9f9;
  box-shadow: 0 4px 16px rgba(124, 92, 255, 0.09);
}

.about-info-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.info-row {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 2px;
}

.info-label {
  width: 120px;
  font-weight: 600;
  color: var(--text, #fff);
  opacity: 0.85;
  letter-spacing: 0.5px;
  /* 左对齐 */
  text-align: left;
  display: inline-block;
}

.info-value {
  width: 600px;
  color: rgba(255, 255, 255, 0.88);
  display: inline-block;
  /* 左对齐 */
  text-align: left;
  /* 可换行防止超出 */
  word-break: break-all;
  margin-left: -15px;
}

.about-research {
  display: flex;
  align-items: center;
  margin: 32px 0 24px 0;
  padding: 22px 22px;
  background: rgba(255, 255, 255, 0.035);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 10px 32px rgba(124, 92, 255, 0.03);
}

.about-contact {
  display: block;
  margin: 0 0 0 0;
  padding: 22px 22px;
  background: rgba(255, 255, 255, 0.035);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 10px 32px rgba(124, 92, 255, 0.03);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
}

.contact-card {
  grid-column: span 6;
  display: grid;
  grid-template-columns: 46px 1fr 18px;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  padding: 14px 16px;
  text-decoration: none;
  color: inherit;
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;
  cursor: pointer;
  outline: none;
  border-style: solid;
}

/* 左对齐样式：邮箱、手机号、GitHub 统一 */
.contact-card--left .contact-card__meta,
.contact-card__meta--left {
  text-align: left;
  justify-items: flex-start;
  align-items: flex-start;
}

.contact-card__meta,
.contact-card__meta--left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.contact-card:focus-visible {
  outline: 2px solid #7c5cff;
}

.contact-card:hover {
  transform: translateY(-2px);
  border-color: rgba(0, 225, 255, 0.25);
  background: rgba(0, 225, 255, 0.06);
  box-shadow: 0 20px 46px rgba(0, 0, 0, 0.32);
}

.contact-card__icon {
  width: 46px;
  height: 46px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
}

.contact-card:hover .contact-card__icon {
  transform: rotate(-4deg) scale(1.05);
  background: rgba(124, 92, 255, 0.16);
  border-color: rgba(124, 92, 255, 0.3);
}

.contact-card__label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.62);
}

.contact-card__value {
  margin-top: 2px;
  font-weight: 800;
  word-break: break-all;
}

.contact-card__go {
  color: rgba(255, 255, 255, 0.6);
  transition: transform 160ms.ease, color 160ms.ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-card:hover .contact-card__go {
  transform: translateX(2px);
  color: rgba(255, 255, 255, 0.86);
}

.contact-toast {
  position: fixed;
  left: 50%;
  top: 16%;
  transform: translate(-50%, 0);
  background: #7c5cff;
  color: #fff;
  padding: 14px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 60px rgba(124, 92, 255, 0.25);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  z-index: 99;
  opacity: 0.96;
  pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 920px) {
  .contact-card {
    grid-column: span 12;
  }
}

.panel {
  grid-column: span 6;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  padding: 16px;
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
}

.panel:hover {
  transform: translateY(-2px);
  border-color: rgba(0, 225, 255, 0.22);
  background: rgba(0, 225, 255, 0.06);
}

.panel__title {
  font-weight: 800;
  margin-bottom: 8px;
}

.panel__content {
  color: rgba(255, 255, 255, 0.72);
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  margin: 0 10px 10px 0;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
}

.chip:hover {
  transform: translateY(-1px);
  border-color: rgba(124, 92, 255, 0.35);
  background: rgba(124, 92, 255, 0.12);
}

@media (max-width: 1100px) {
  .about-cards-row {
    flex-direction: column;
    gap: 20px;
  }

  .about-info-card,
  .about-panels {
    width: 100%;
    min-width: 0;
    max-width: 100%;
  }
}

@media (max-width: 920px) {
  .about-info-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    padding: 14px 8px;
  }

  .about-info-avatar {
    margin-bottom: 6px;
    width: 200px;
    height: 200px;
  }

  .about-avatar-img {
    width: 200px;
    height: 200px;
  }

  .info-label {
    width: 100px;
    text-align: left;
  }

  .info-value {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    text-align: left;
  }
}
</style>
