<script setup lang="ts">
import { ref } from 'vue'

type Project = {
  time: string
  name: string
  role: string
  details: string[]
  image?: string
}

const showImages = ref<boolean[]>([])

const projects: Project[] = [
  {
    time: '2024.10 - 2025.3',
    name: '智教领航私有人脸表情识别系统',
    role: '算法优化',
    details: [
      '基于YOLO11-cls分类骨干网络，构建多尺度模型变体（Small、Medium、Large、XLarge），通过调节网络深度、宽度与最大通道数参数平衡模型精度与效率，针对表情分类任务优化分类头，以适配六类表情识别任务；',
      '设计两段式模型推理链路：首先使用YOLOv11进行人脸检测与定位，然后对检测区域使用基于波动方程的全局建模机制进行特征捕捉与分类，使第二阶段的自注意力机制复杂度降低为 O(NlogN)，准确率提升约10%；',
      '引入Dropout与L2正则化双重约束抑制过拟合，使用数据增强策略丰富样本分布，启用混合精度训练实现显存占用降低约40%，增强实时摄像头检测、视频图片文件和服务器端批量文件处理等不同场景下的速度与精度；',
      '采用AdamW优化器搭配SmoothL1交叉熵损失，实现学习率预热与余弦退火联合调度策略，有效规避训练初期梯度震荡问题，加速模型收敛并增强训练稳定性；',
      '采集多角度、多光照条件下的表情样本，构建复杂场景私有数据集以增强模型训练效果，增强模型的泛化性。'
    ],
    image: '/img/表情识别结果.jpg'
  }
]

projects.forEach((_, i) => {
  showImages.value[i] = false
})

function toggleImage(index: number) {
  showImages.value[index] = !showImages.value[index]
}
</script>

<template>
  <section class="page">
    <h1 class="page__title">项目经历</h1>

    <div v-for="(p, index) in projects" :key="p.name" class="project-section">
      <div class="panel__content">
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">时间：</span>
          <span class="info-value">{{ p.time }}</span>
        </div>
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">项目：</span>
          <span class="info-value" style="width: 950px;">{{ p.name }}</span>
        </div>
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">角色：</span>
          <span class="info-value">{{ p.role }}</span>
        </div>
        <div class="work-content">
          <div class="work-title">工作内容：</div>
          <ul class="work-list">
            <li v-for="(detail, index) in p.details" :key="index">{{ detail }}</li>
          </ul>
        </div>
        <div v-if="p.image" class="collapse-panel">
          <button class="collapse-toggle" @click="toggleImage(index)">
            {{ showImages[index] ? '收起图片 ▲' : '展开图片 ▼' }}
          </button>
          <transition name="fade">
            <div v-show="showImages[index]" class="paper-image-list">
              <div class="paper-image-wrapper">
                <img :src="p.image" :alt="p.name" class="paper-img paper-img-uniform" />
              </div>
            </div>
          </transition>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.project-section {
  display: flex;
  align-items: center;
  margin: 15px 0 0 0;
  padding: 10px 22px;
  background: rgba(255, 255, 255, 0.035);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 32px rgba(124, 92, 255, 0.03);
}

.panel__content {
  color: rgba(255, 255, 255, 0.72);
}

.info-row {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 4px;
}

.info-label {
  width: 80px;
  font-weight: 600;
  color: var(--text, #fff);
  opacity: 0.85;
  letter-spacing: 0.5px;
  text-align: left;
  display: inline-block;
}

.info-value {
  width: 600px;
  color: rgba(255, 255, 255, 0.88);
  display: inline-block;
  text-align: left;
  word-break: break-all;
  margin-left: -15px;
}

.work-content {
  margin-top: 16px;
  padding-left: 8px;
}

.work-title {
  font-size: 20px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.92);
  margin-bottom: 10px;
  padding-left: 12px;
  border-left: 3px solid var(--brand, #7c5cff);
}

.work-list {
  margin: 0;
  padding-left: 24px;
  list-style-type: disc;
}

.work-list li {
  font-size: 20px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: 8px;
  text-align: justify;
}

.work-list li:last-child {
  margin-bottom: 0;
}

.collapse-panel {
  margin-top: 18px;
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
  gap: 24px;
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
  width: 750px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(124, 92, 255, 0.11);
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: #fff;
}

.paper-img-uniform {
  height: auto;
  object-fit: contain;
  object-position: top center;
  display: block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
