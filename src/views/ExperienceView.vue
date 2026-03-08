<script setup lang="ts">
import { ref } from 'vue'

// 折叠面板状态
const showAaaaiImages = ref(false)
const showImages = ref(false)

// 图片资源路径
import aaaai1 from '../assets/img/AAAI1.jpg'
import aaaai2 from '../assets/img/AAAI2.jpg'
import lcfc from '../assets/img/LCFC.jpg'
import lcfcexit from '../assets/img/实习证明.jpg'

</script>

<template>
  <section class="page">
    <h1 class="page__title">科研经历</h1>
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
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">方向：</span>
          <span class="info-value">深度学习、计算机视觉、图像恢复、压缩伪影去除</span>
        </div>
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">网址：</span>
          <span class="info-value">
            <a href="https://github.com/Kang341281X/ARMoE" target="_blank" rel="noopener noreferrer"
              class="custom-link">
              https://github.com/Kang341281X/ARMoE
            </a>
          </span>
        </div>
        <!-- 折叠图片面板 -->
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
          <span class="info-value">投稿中</span>
        </div>
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">方向：</span>
          <span class="info-value">深度学习、计算机视觉、图像恢复、轻量级图像超分辨率</span>
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
          <span class="info-value">初审阶段，NO.202511956170.1</span>
        </div>
      </div>
    </div>

    <br />

    <h1 class="page__title">实习经历</h1>
    <div class="experience-section">
      <div class="panel__content">
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">公司：</span>
          <span class="info-value info-value--long">
            联宝电子科技有限公司
          </span>
        </div>
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">职位：</span>
          <span class="info-value">AI Agent算法实习生</span>
        </div>
        <div class="info-row" style="align-items: flex-start;">
          <span class="info-label">时间：</span>
          <span class="info-value">2025.12 - 2026.3</span>
        </div>
        <div class="work-content">
          <div class="work-item">
            <div class="work-title">工作内容一：工业大脑之流程编排系统优化</div>
            <ul class="work-list">
              <li>
                参与搭建并落地由LLM驱动的贴标机流程自动化生成系统，实现Agent统一编排自动化流程：配置驱动的LLM→Mermaid→MBC.MCP渲染流水线，批量生成1–7种标签贴取JSON流程文件并自动输出可视化报告；
              </li>
              <li>
                构建7步Prompt思维链和few-shot引导，针对Mermaid输出引入MermaidChecker做样式完整性校验，并叠加Mermaid语法校验与错误重试机制，降低LLM生成流程的"不可渲染、格式漂移和流程不守恒"概率；
              </li>
              <li>
                实现批量任务并发生成与可视化报告自动汇总，基于ProcessPoolExecutor实现多任务并发调度，支持批量生成不同数量标签的贴取流程，并编写工具脚本将Mermaid解析为动作序列，最终完成多张流程图的自动拼接。
              </li>
            </ul>
          </div>
          <div class="work-item">
            <div class="work-title">工作内容二：标签对比算法设计与优化</div>
            <ul class="work-list">
              <li>设计基于余弦相似度的JSON标签文件对比工具：将动作集名称做字符级向量化，并统一词表维度，以阈值筛选最佳匹配动作对，在实现"语义相似匹配"的同时仍能稳定完成跨文件的参数属性对比；</li>
              <li>设计标签文件中相同动作集参数的自对比，为Prompt优化提供可量化的动态参数偏差依据，降低人工校验成本。</li>
            </ul>
          </div>
        </div>
        <!-- 折叠图片面板 -->
        <div class="collapse-panel">
          <button class="collapse-toggle" @click="showImages = !showImages">
            {{ showImages ? '收起图片 ▲' : '展开图片 ▼' }}
          </button>
          <transition name="fade">
            <div v-show="showImages" class="paper-image-list">
              <div class="paper-image-wrapper">
                <img :src="lcfc" alt="LCFC" class="paper-img paper-img-uniform" />
              </div>
              <div class="paper-image-wrapper">
                <img :src="lcfcexit" alt="LCFC" class="paper-img paper-img-uniform" />
              </div>
            </div>
          </transition>
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

/* 折叠按钮与图片样式 */
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
  /* Remove height: auto for now, handled below */
}

/* 保持图片高度一致且等比缩放 */
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
