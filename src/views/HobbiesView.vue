<script setup lang="ts">
import { ref } from 'vue'

const BLOG_URL = 'https://blog.csdn.net/qq_45729306?spm=1000.2115.3001.5343'

// 兴趣爱好数据，每项包含icon信息，以及图展示与否
const hobbies = [
  {
    name: '技术博客撰写',
    icon: '✍️',
    desc: '喜欢梳理总结，技术博客累计阅读量 43W+，收藏点赞数 1600+，粉丝数 800+。',
    showImage: false,
    img: ''
  },
  {
    name: '羽毛球',
    icon: '🏸',
    desc: '坚持羽毛球运动三年，每周进行一两次羽毛球运动，曾获得安徽大学人工智能学院第二届“智羽杯”团体冠军。',
    showImage: true,
    img: 'public/img/智羽杯奖牌.jpg'
  },
  {
    name: '健身',
    icon: '💪',
    desc: '连续健身两年，定期进行力量训练和有氧运动。',
    showImage: false,
    img: ''
  },
  {
    name: '摄影',
    icon: '📷',
    desc: '喜欢用镜头捕捉生活与城市的光影瞬间，探寻美的角度。',
    showImage: false,
    img: ''
  }
]

// 用于控制每个可展示图片爱好的折叠状态（不展示图片的保持为false，不出现按钮）
const showImages = ref(hobbies.map(() => false))
const toggleShowImage = (index: number) => {
  showImages.value[index] = !showImages.value[index]
}
</script>

<template>
  <section class="page">
    <div class="hobby-view-list">
      <div
        v-for="(h, i) in hobbies"
        :key="h.name"
        class="experience-section"
        style="margin-bottom: 6px;"
      >
        <div class="panel__content" style="display: flex; align-items: flex-start;">
          <!-- 图标展示 -->
          <div class="hobby-icon" style="margin-right: 28px;">
            <span aria-hidden="true" style="font-size: 2.1rem;">{{ h.icon }}</span>
          </div>
          <div>
            <div class="info-row" style="align-items: flex-start;">
              <span class="info-value" style="font-weight: bold;">{{ h.name }}</span>
            </div>
            <div class="info-row" style="align-items: flex-start;">
              <span class="info-value">{{ h.desc }}</span>
            </div>
            <!-- 技术博客撰写，显示跳转按钮 -->
            <div v-if="h.name === '技术博客撰写'" class="info-row" style="align-items: flex-start;">
              <a
                :href="BLOG_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="blog-link-btn"
              >
                前往 CSDN 博客
              </a>
            </div>
            <!-- 仅当有图片时，显示折叠图片按钮和面板 -->
            <div v-if="h.showImage" class="collapse-panel">
              <button class="collapse-toggle" @click="toggleShowImage(i)">
                {{ showImages[i] ? '收起图片 ▲' : '展开图片 ▼' }}
              </button>
              <transition name="fade">
                <div v-show="showImages[i]" class="paper-image-list">
                  <div class="paper-image-wrapper">
                    <img
                      :src="h.img"
                      :alt="`${h.name} 图片`"
                      class="paper-img paper-img-uniform"
                    />
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 借用ExperienceView样式，也统一下风格 */
.experience-section {
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
  padding: 10px 22px;
  background: rgba(255, 255, 255, 0.035);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 32px rgba(124, 92, 255, 0.03);
}

.info-row {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 4px;
}
.info-label {
  width: 120px;
  font-weight: 600;
  color: var(--text, #fff);
  opacity: 0.85;
  letter-spacing: 0.5px;
  text-align: left;
  display: inline-block;
}
.info-value {
  color: rgba(255, 255, 255, 0.88);
  display: inline-block;
  text-align: left;
  word-break: break-all;
  margin-left: -15px;
  font-size: 18px;
}
.panel__content {
  color: rgba(255, 255, 255, 0.72);
}

/* 图标单独样式 */
.hobby-icon {
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(255,255,255,0.09);
  border: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 2px 10px rgba(124, 92, 255, 0.03);
}

/* 技术博客跳转按钮样式 */
.blog-link-btn {
  display: inline-block;
  background: #3194ff;
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  padding: 5px 18px;
  font-size: 17px;
  margin-top: 4px;
  margin-left: -10px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.16s;
  box-shadow: 0 2px 8px rgba(49, 148, 255, 0.09);
}

.blog-link-btn:hover, .blog-link-btn:focus {
  background: #1976d2;
  color: #fff;
}

/* 图片展开折叠样式 */
.collapse-panel {
  margin-top: 15px;
}

.collapse-toggle {
  background: #7c5cff;
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  padding: 5px 16px;
  cursor: pointer;
  transition: background 0.18s;
  margin-bottom: 10px;
}
.collapse-toggle:hover,
.collapse-toggle:focus {
  background: #5d46ca;
}
.paper-image-list {
  display: flex;
  gap: 18px;
  margin-top: 6px;
  flex-wrap: wrap;
  align-items: flex-start;
}
.paper-image-wrapper {
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  min-width: 0;
}

.paper-img {
  max-width: 240px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(124, 92, 255, 0.11);
  border: 1px solid rgba(255,255,255,0.10);
  background: #fff;
}
.paper-img-uniform {
  object-fit: contain;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.19s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
@media (max-width: 700px) {
  .experience-section {
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 12px;
  }
  .hobby-icon {
    margin-right: 0;
    margin-bottom: 8px;
  }
  .paper-img {
    max-width: 100%;
  }
}
</style>
