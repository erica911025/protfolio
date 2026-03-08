<template>
  <div class="portfolio-container">
    <!-- <h2 class="page-title">作品集 Portfolio</h2> -->

    <div class="tabs-wrap" role="tablist" aria-label="作品分類頁籤">
      <button
        id="competition-tab"
        class="tab-button"
        :class="{ 'is-active': activeTab === 'competition' }"
        type="button"
        role="tab"
        :aria-selected="activeTab === 'competition'"
        aria-controls="tab-panel-competition"
        @click="activeTab = 'competition'"
      >
        ❁ 競賽專題
      </button>
      <button
        id="academic-tab"
        class="tab-button"
        :class="{ 'is-active': activeTab === 'academic' }"
        type="button"
        role="tab"
        :aria-selected="activeTab === 'academic'"
        aria-controls="tab-panel-academic"
        @click="activeTab = 'academic'"
      >
        ❁ 學術投稿
      </button>
    </div>

    <section
      v-if="activeTab === 'competition'"
      id="tab-panel-competition"
      class="portfolio-section"
      role="tabpanel"
      aria-labelledby="competition-tab"
    >
      <h3 class="section-title">❁ 競賽專題 Competition Projects</h3>

      <div class="featured-project">
        <div class="awards-header award-gradient">
          <div class="awards-main">
            <Award class="icon icon-award" />
            <div>
              <h4 class="awards-title">第29屆 全國大專院校資訊服務創新競賽</h4>
              <p class="awards-subtitle"><span class="light">教育開放資料組</span> &amp; <span class="light">鈦坦敏捷開發特別獎</span> 雙項亞軍</p>
            </div>
          </div>
          <!-- <div class="award-rank">第二名</div> -->
        </div>

        <div class="project-layout">

          <div class="project-content">
            <div class="content-block">
              <h5 class="content-title0">
                專案背景
              </h5>
              <p class="content-text0">
                旨在解決日益嚴重的網路霸凌問題。我們結合科技與教育，不僅透過系統偵測，更提供後續的教育資源，針對教育現場痛點提供具備前瞻性的解決方案。
              </p>
            </div>


            <div class="detail-grid">
              <div class="detail-block">
                <h5 class="content-title">
                  ▸ 技術棧與 Open Data
                </h5>
                <p class="content-text">
                  系統運用「文字探勘與行為軌跡分析」精準挖掘潛在霸凌。整合政府教育 Open Data（圖書、影片、題庫），於偵測異常時自動推薦教育資訊。
                </p>
              </div>
              <div class="detail-block detail-block-split">
                <h5 class="content-title">
                  ▸ 敏捷管理實踐
                </h5>
                <p class="content-text">
                  導入 Scrum 框架，透過 Daily Stand-up 同步進度並將功能拆解為 Sprint Backlog，大幅提升應對變更的彈性與效率。
                </p>
              </div>
            </div>

            <div class="content-block">
              <h5 class="content-title0">
                My Key Contributions
              </h5>
            <div class="role-grid">

              <div class="role-card role-card-blue">
                <div class="role-icon-wrap role-icon-blue"><BarChart2 class="icon" /> <h6>資料分析</h6></div>
                <p>負責教育開放資料分析與應用規劃。</p>
              </div>
                <div class="role-card role-card-orange">
                <div class="role-icon-wrap role-icon-orange"><CalendarCheck2 class="icon" /> <h6>專案規劃</h6></div>

                <p>界定系統核心功能範圍，協調組員分工與時程控管。</p>
              </div>
              <div class="role-card role-card-pink">
                <div class="role-icon-wrap role-icon-pink"><Figma class="icon" /> <h6>介面設計</h6></div>
                <p>主導 UI/UX 視覺，以及專案LOGO、簡報與海報設計，確保產品易用性與美感。</p>
              </div>
              <div class="role-card role-card-green">
                <div class="role-icon-wrap role-icon-green"><Code2 class="icon" />  <h6>前端開發</h6></div>
                <p>以 HTML、CSS 以及 JavaScript 為基礎程式語言，透過 Vue.js 框架，完成前端區塊開發。</p>
              </div>
            </div>
            </div>

            <div class="content-block">

             <h5 class="content-title0">
                 頒獎快照 
            </h5>

             <div class="project-gallery">
              <img
                src="https://drive.google.com/thumbnail?id=1DBG5Ca5K89FcqTOqpU0dYNvSD5yRzqOO&sz=w400"
                alt="得獎照片1"
                class="gallery-photo"
              >
              <img
                src="https://drive.google.com/thumbnail?id=1_FaST34YOSC_81m0ECtiaPokM30rzO4V&sz=w400"
                alt="得獎照片2"
                class="gallery-photo"
              >
            </div>
        </div>


                      <!-- <div class="project-media">
            <div class="logo-panel">
              <img
                src="https://drive.google.com/thumbnail?id=1uSvfoNz189i_V6D7jR1MjOjTgsvSvz4G&sz=w400"
                alt="校園凌制零 Logo"
                class="project-logo"
              >
            </div>
            <div class="project-gallery">
              <img
                src="https://drive.google.com/thumbnail?id=1DBG5Ca5K89FcqTOqpU0dYNvSD5yRzqOO&sz=w400"
                alt="得獎照片1"
                class="gallery-photo"
              >
              <img
                src="https://drive.google.com/thumbnail?id=1_FaST34YOSC_81m0ECtiaPokM30rzO4V&sz=w400"
                alt="得獎照片2"
                class="gallery-photo"
              >
            </div>
            <div class="project-name-wrap">
              <h5 class="project-name">校園凌制零</h5>
              <p class="project-quote">「打造預防與防治的完整閉環」</p>
            </div>
          </div> -->


            <!-- <div class="star-block">
              <div class="star-header">
                <MessageSquare class="icon icon-star" />
                <h5>面試模擬：挑戰與解決</h5>
              </div>
              <div class="star-grid">
                <div class="star-item">
                  <p class="star-label star-label-danger">Challenge</p>
                  <p class="star-text">模型準確率不足與前後端串接延遲，導致團隊士氣低迷、進度落後。</p>
                </div>
                <div class="star-item">
                  <p class="star-label star-label-success">Action &amp; Result</p>
                  <p class="star-text">召開 Retrospective 會議梳理痛點。我重新界定資料撈取範圍並微調模型；同時利用 Figma 製作精確 Wireframe 明確 API JSON 格式。最終如期高品質交付。</p>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <section
      v-else
      id="tab-panel-academic"
      class="portfolio-section"
      role="tabpanel"
      aria-labelledby="academic-tab"
    >
      <h3 class="section-title">❁ 學術投稿 Academic Submissions</h3>

      <div class="academic-layout">
        <div class="status-badge">
          <div class="pending">
          <span class=" passed">▸ 113年 國科會大專學生研究計畫</span>
          <p class="status-text">通過</p>
          </div>

          <div class="academic-grid">
          <div class="academic-card">
            <div class="card-top">
              <h4 class="academic-title">運用氣體辨識<br>於獨居老人居家消防安全輔助之研究</h4>
            </div>
            <div class="card-bottom">
              <p class="academic-content">
                透過氣體辨識技術監測居家消防隱患。運用半導體式感測器與 Arduino Uno，結合藍芽與雲端技術，發展消防安全警示系統。
              </p>
            </div>
          </div>
        </div>
        </div>

          <div class="status-badge">
            <div class="pending">
              <span class="passed">▸ 115年 教育部教學實踐研究計畫</span>
              <p class="status-textn">審查中</p>
            </div>

            <div class="academic-card">
            <div class="card-top">
              <h4 class="academic-title">整合生成式人工智慧於DevOps專案導向軟體工程與管理之教學流程設計與其學習成效之研究</h4>
            </div>
            <div class="card-bottom">
              <p class="academic-content">
                建構並實證一套以 GAI 輔助 DevOps 的專案學習模式，使學生能在 DevOps 全流程脈絡下，培養 GAI 協作素養、流程思維與系統性問題解決能力。
              </p>
            </div>
          </div>
          </div>
      </div>

        
      
      <div class="research-capabilities">
        <p class="capabilities-title">核心研究能力展現：</p>
        <div class="tags-cloud">
          <span class="skill-tag">系統性問題解決</span>
          <span class="skill-tag">AI 協作與流程賦能</span>
          <span class="skill-tag">概念驗證與實作</span>
          <span class="skill-tag">專業企劃與提案撰寫</span>
          <span class="skill-tag">複雜資訊視覺化</span>
          <span class="skill-tag">長篇邏輯架構化</span>
        </div>
      </div>

    </section>

      <div id="1"></div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Award,
  BarChart2,
  CalendarCheck2,
  Code2,
  Figma,
} from 'lucide-vue-next'

const activeTab = ref('competition')
</script>

<style scoped src="../assets/portfolio.css"></style>