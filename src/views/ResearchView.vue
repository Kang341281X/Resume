<script setup lang="ts">
import { ref } from 'vue'

const showAaaaiImages = ref(false)

import aaaai1 from '../assets/img/AAAI1.jpg'
import aaaai2 from '../assets/img/AAAI2.jpg'
</script>

<template>
  <section class="page">
    <div class="experience-section">
      <div class="panel__content">
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">论文：</span>
          <span class="info-value info-value--long">
            Compression Artifacts Removal for VVC with Frequency Domain Mixture of Experts Network
          </span>
        </div>
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">会议：</span>
          <span class="info-value">AAAI 2026（CCF A 类顶会，本人二作，导师一作）</span>
        </div>
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">状态：</span>
          <span class="info-value">已收录</span>
        </div>

        <div class="work-content">
          <div class="work-item">
            <div class="work-title">科研经历</div>
            <ul class="work-list">
              <li>设计频域混合专家（FMoE）模块，将四种频域变换（DCT、FFT、DWT 和
                SWT）集成到混合专家网络（MoE）中，通过稀疏激活策略自适应选择最优专家分支对不同类型压缩伪影进行处理，实现高效图像压缩伪影去除；</li>
              <li>设计频域感知因子（FAF）在频域维度对图像特征进行自适应处理，并通过逆变换将特征映射回空间域；</li>
              <li>使用 VTM-20.0 编解码器构建基于 H.266/VVC
                标准下的压缩伪影数据集（VVC-CAR），该数据集涵盖四种量化参数（QP=22、27、32、37）的压缩伪影，为模型训练和测试提供更具挑战性的真实场景数据。</li>
            </ul>
          </div>
          <div class="work-item">
            <div class="work-title">贡献</div>
            <ul class="work-list">
              <li>提出 ARMoE 模型，通过对四种频域专家模块与稀疏激活策略的结合，实现对多类型复杂压缩伪影的自适应去除，相比现有方法显著提升图像恢复质量；</li>
              <li>构建 VVC-CAR 数据集，填补了 H.266/VVC 压缩伪影数据集的空白，为后续研究提供了标准化数据基础。</li>
            </ul>
          </div>
        </div>

        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">GitHub：</span>
          <span class="info-value" style="margin-left: -20px;">
            <a href="https://github.com/Kang341281X/ARMoE" target="_blank" rel="noopener noreferrer"
              class="custom-link">
              https://github.com/Kang341281X/ARMoE
            </a>
          </span>
        </div>

        <div class="collapse-panel">
          <button class="collapse-toggle" @click="showAaaaiImages = !showAaaaiImages">
            {{ showAaaaiImages ? '收起图片 ▲' : '展开图片 ▼' }}
          </button>
          <transition name="fade">
            <div v-show="showAaaaiImages" class="paper-image-list">
              <div class="paper-image-wrapper paper-image-wrapper--first">
                <img :src="aaaai1" alt="AAAI1" class="paper-img paper-img-uniform" />
              </div>
              <div class="paper-image-wrapper">
                <img :src="aaaai2" alt="AAAI2" class="paper-img paper-img-uniform" />
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div class="experience-section">
      <div class="panel__content">
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">论文：</span>
          <span class="info-value info-value--long">
            LFTNet: Long-Range Fourier-Gate Transformer for Efficient Lightweight Image Super-Resolution
          </span>
        </div>
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">会议：</span>
          <span class="info-value">IJCAI 2026（CCF A 类顶会，本人一作）</span>
        </div>
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">状态：</span>
          <span class="info-value">第二阶段审稿中</span>
        </div>

        <div class="work-content">
          <div class="work-item">
            <div class="work-title">科研经历</div>
            <ul class="work-list">
              <li>设计长距离多头自注意力（LMSA）模块，通过沿水平和垂直方向建立长距离依赖关系扩展感受野，实现跨区域的上下文信息交互，从而增强模型对全局结构和远程特征的捕捉能力；</li>
              <li>将离散傅里叶变换（DFT）集成到前馈网络中，构建离散傅里叶门控前馈神经网络（FGFN），在频域维度对特征进行自适应调制，并通过门控机制结合空间局部信息，提升全局纹理和高频细节捕捉能力。</li>
            </ul>
          </div>
          <div class="work-item">
            <div class="work-title">贡献</div>
            <ul class="work-list">
              <li>设计 LMSA 模块，实现线性复杂度的长程依赖建模，有效解决轻量化注意力网络的性能瓶颈；</li>
              <li>设计 FGFN 模块，利用频域门控操作替代传统 FFN，在减少参数量的同时增强模型表达能力。</li>
            </ul>
          </div>
        </div>

        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">GitHub：</span>
          <span class="info-value" style="margin-left: -20px;">
            <a href="https://github.com/Kang341281X/LFTNet" target="_blank" rel="noopener noreferrer"
              class="custom-link">
              https://github.com/Kang341281X/LFTNet
            </a>
          </span>
        </div>
      </div>
    </div>

    <div class="experience-section">
      <div class="panel__content">
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">专利：</span>
          <span class="info-value info-value--long">
            基于频域混合专家网络的图像压缩伪影去除方法
          </span>
        </div>
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">状态：</span>
          <span class="info-value">专利投稿中，公开阶段</span>
        </div>
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">申请号：</span>
          <span class="info-value">202511956170.1</span>
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
  margin-left: -40px;
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

.paper-image-wrapper--first {
  margin-right: -300px;
}

.paper-img {
  max-width: 340px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(124, 92, 255, 0.11);
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: #fff;
}

.paper-img-uniform {
  max-height: 240px;
  height: 240px;
  width: auto;
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

.custom-link {
  display: inline-block;
  color: #7c5cff;
  font-weight: 500;
  background: rgba(124, 92, 255, 0.09);
  padding: 3px 10px 3px 12px;
  border-radius: 8px;
  transition: background 0.16s, color 0.16s, box-shadow 0.16s;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(124, 92, 255, 0.08);
  position: relative;
}

.custom-link:hover,
.custom-link:focus {
  background: #7c5cff;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 6px 24px rgba(124, 92, 255, 0.13);
  outline: none;
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

  .work-title {
    font-size: 17px;
  }

  .work-list li {
    font-size: 16px;
    line-height: 1.6;
  }

  .paper-img {
    max-width: 280px;
  }

  .paper-img-uniform {
    max-height: 200px;
    height: 200px;
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

  .work-title {
    font-size: 15px;
    padding-left: 8px;
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

  .paper-image-list {
    gap: 16px;
  }

  .paper-img {
    max-width: 220px;
  }

  .paper-img-uniform {
    max-height: 160px;
    height: 160px;
  }

  .custom-link {
    font-size: 13px;
    padding: 2px 8px;
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

  .work-title {
    font-size: 14px;
    padding-left: 6px;
    border-left-width: 2px;
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

  .paper-image-list {
    gap: 10px;
    flex-direction: column;
    align-items: center;
  }

  .paper-image-wrapper {
    width: 100%;
  }

  .paper-img {
    max-width: 100%;
  }

  .paper-img-uniform {
    max-height: 140px;
    height: 140px;
  }

  .custom-link {
    font-size: 12px;
    padding: 2px 6px;
  }
}
</style>