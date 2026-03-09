<script setup lang="ts">
import { ref } from 'vue'

const showCompetitionImage = ref(false)
</script>

<template>
  <section class="page">
    <div class="experience-section">
      <div class="panel__content">
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-value info-value--long" style="font-size: 28px;">
            第二十六届中国机器人及人工智能大赛三等奖（国家级 A 类，作品名称：智教领航）
          </span>
        </div>

        <div class="work-content">
          <div class="work-item">
            <ul class="work-list">
              <li>
                基于 YOLO 框架构建多尺度表情变体大模型（Small、Medium、XLarge），通过调节网络深度、宽度和通道数实现精度与效率的平衡，并针对六类表情识别任务优化了分类头输出维度；
              </li>
              <li>
                设计两段式推理链路：第一阶段使用 YOLO 对人脸表情进行检测，第二阶段在检测区域使用傅里叶变换子层的 Transformer 捕捉特征，将计算量降低至
                O(NlogN)，提升实时检测和视频场景等的识别速度与精度。
              </li>
              <li>
                采集多角度、多光照条件下的表情样本，构建复杂场景私有数据集以增强模型训练效果，增强模型的泛化性。
              </li>
              <li>
                训练阶段结合Dropout、L2正则化与Mixup数据增强策略以抑制过拟合、增强样本分布多样性，同时采用混合精度训练以降低显存占用并提升训练效率，优化器选择AdamW，并结合学习率预热与余弦退火调度策略，以提升训练初期稳定性并加快模型收敛；
              </li>
            </ul>
          </div>
        </div>

        <div class="competition-image-section">
          <div class="collapse-panel">
            <button class="collapse-toggle" @click="showCompetitionImage = !showCompetitionImage">
              {{ showCompetitionImage ? '收起图片 ▲' : '展开图片 ▼' }}
            </button>
            <transition name="fade">
              <div v-show="showCompetitionImage" class="competition-image-wrapper">
                <img src="../assets/img/竞赛证书.png" alt="竞赛图片" class="competition-image" />
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  display: flex;
  align-items: center;
  margin: 15px 0 0 0;
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
  flex-shrink: 0;
  font-weight: 600;
  color: var(--text, #fff);
  opacity: 0.85;
  letter-spacing: 0.5px;
  text-align: left;
  display: inline-block;
}

.info-value {
  flex: 1;
  min-width: 0;
  color: rgba(255, 255, 255, 0.88);
  display: inline-block;
  text-align: left;
  word-break: break-all;
  margin-left: -15px;
}

.info-value--long {
  width: auto;
  max-width: 100%;
}

.panel__content {
  color: rgba(255, 255, 255, 0.72);
  width: 100%;
}

.work-content {
  margin-top: 16px;
  padding-left: 8px;
}

.work-item {
  margin-bottom: 18px;
}

.work-item:last-child {
  margin-bottom: 0;
}

.work-list {
  margin: 0;
  padding-left: 24px;
  list-style-type: disc;
}

.work-list li {
  font-size: 18px;
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

.competition-image-section {
  width: 100%;
}

.competition-image-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.competition-image {
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(124, 92, 255, 0.11);
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 920px) {
  .experience-section {
    padding: 12px 16px;
  }

  .info-row {
    font-size: 17px;
    flex-wrap: wrap;
  }

  .info-label {
    width: 100px;
    font-size: 16px;
  }

  .info-value {
    width: auto;
    min-width: 0;
    flex: 1;
    font-size: 16px;
    margin-left: -10px;
  }

  .work-list li {
    font-size: 16px;
    line-height: 1.6;
  }

  .competition-image {
    width: 260px;
  }
}

@media (max-width: 768px) {
  .experience-section {
    padding: 10px 12px;
    margin: 12px 0 0 0;
    border-radius: 12px;
  }

  .info-row {
    font-size: 15px;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  .info-label {
    width: auto;
    font-size: 14px;
    margin-right: 0;
  }

  .info-value {
    width: 100%;
    font-size: 14px;
    margin-left: 0;
  }

  .work-content {
    margin-top: 12px;
    padding-left: 4px;
  }

  .work-item {
    margin-bottom: 14px;
  }

  .work-list {
    padding-left: 18px;
  }

  .work-list li {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 6px;
  }

  .collapse-panel {
    margin-top: 14px;
  }

  .collapse-toggle {
    padding: 4px 12px;
    font-size: 14px;
  }

  .competition-image {
    width: 220px;
  }
}

@media (max-width: 480px) {
  .experience-section {
    padding: 8px 10px;
    margin: 10px 0 0 0;
    border-radius: 10px;
  }

  .info-row {
    font-size: 13px;
  }

  .info-label {
    font-size: 13px;
  }

  .info-value {
    font-size: 13px;
  }

  .work-content {
    margin-top: 10px;
    padding-left: 2px;
  }

  .work-item {
    margin-bottom: 12px;
  }

  .work-list {
    padding-left: 14px;
  }

  .work-list li {
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 5px;
  }

  .collapse-panel {
    margin-top: 10px;
  }

  .collapse-toggle {
    padding: 3px 10px;
    font-size: 12px;
    border-radius: 6px;
  }

  .competition-image {
    width: 100%;
    max-width: 280px;
  }
}
</style>