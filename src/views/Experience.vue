<template>
  <div class="experience-container">
    <!-- <h2 class="page-title">個人經歷 Experience</h2> -->

    <div class="tabs-wrap" role="tablist" aria-label="經歷分類頁籤">
      <button
        id="work-tab"
        class="tab-button"
        :class="{ 'is-active': activeTab === 'work' }"
        type="button"
        role="tab"
        :aria-selected="activeTab === 'work'"
        aria-controls="tab-panel-work"
        @click="activeTab = 'work'"
      >
        💼 工作經驗
      </button>
      <button
        id="club-tab"
        class="tab-button"
        :class="{ 'is-active': activeTab === 'club' }"
        type="button"
        role="tab"
        :aria-selected="activeTab === 'club'"
        aria-controls="tab-panel-club"
        @click="activeTab = 'club'"
      >
        🌟 社團經驗
      </button>
    </div>

    <section
      v-if="activeTab === 'work'"
      id="tab-panel-work"
      class="experience-section"
      role="tabpanel"
      aria-labelledby="work-tab"
    >
      <h3 class="section-title">專業實習經歷 Professional Experience</h3>

      <div class="job-card">
        <div class="job-header">
          <div class="job-title-group">
            <h4 class="company-name">巨鷗科技股份有限公司</h4>
            <p class="job-role">SMART-IM 專案助理</p>
          </div>
          <div class="job-duration">
            <span class="date-badge">2024/07 ~ 2025/01</span>
          </div>
        </div>

        <div class="job-projects">
          <span class="project-tag">#國立政治大學深耕計畫專案管考平台</span>
          <span class="project-tag">#塑膠工業技術發展中心人才培訓網站</span>
        </div>

        <div class="job-contributions">
          <h5 class="contributions-title">Key Contributions 核心貢獻</h5>
          <ul class="contributions-list">
            <li>
              <span class="bullet-icon">▸</span>
              <div>
                <strong>資訊架構設計：</strong>梳理並編輯系統功能架構圖，釐清各模塊關聯，確保整體系統設計的邏輯性與完整性，降低後續開發的不確定性。
              </div>
            </li>
            <li>
              <span class="bullet-icon">▸</span>
              <div>
                <strong>系統雛型規劃：</strong>獨立繪製系統頁面配置圖與雛型，完成核心流程設計，將抽象需求轉化為視覺化成果。
              </div>
            </li>
            <li>
              <span class="bullet-icon">▸</span>
              <div>
                <strong>系統規格定義與文件撰寫：</strong>整理人事與主計系統介接資料、編寫專案月報與查核文件集，將繁雜資訊系統化，提供團隊清晰的開發參考依據。
              </div>
            </li>
            <li>
              <span class="bullet-icon">▸</span>
              <div>
                <strong>使用者體驗優化與迭代：</strong>透過內外部會議與工程師反覆討論開卡需求與介接資料，綜合評估技術可行性，多次進行雛型細節的調整與優化。
              </div>
            </li>
            <li>
              <span class="bullet-icon">▸</span>
              <div>
                <strong>跨部門溝通與需求整合：</strong>參與新竹縣政府與政大等外部專案會議，負責統整專案需求並撰寫會議紀錄，確保客戶需求與內部團隊認知一致。
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section
      v-else
      id="tab-panel-club"
      class="experience-section"
      role="tabpanel"
      aria-labelledby="club-tab"
    >
      <h3 class="section-title">社團經驗 Leadership & Extracurricular</h3>

      <div class="clubs-grid">
        <div class="club-card">
          <div class="club-header">
            <h4>學生會副會長</h4>
          </div>
          <div class="club-body">
            <h5 class="sub-title">執行內容 Key Executions</h5>
            <ul class="task-list">
              <li>參與籌備四校聯歡晚會、共振月台音樂祭、吾夜校園演唱會。</li>
              <li>協助辦理校內學生會長選拔。</li>
            </ul>
          </div>
          <div class="club-footer takeaway-box">
            <h5 class="sub-title">核心收穫 Key Takeaways</h5>
            <p>在多方協調中精煉跨部門溝通能力。</p>
          </div>
        </div>

        <div class="club-card">
          <div class="club-header">
            <h4>學生會秘書部 / 選務部</h4>
          </div>
          <div class="club-body">
            <h5 class="sub-title">執行內容 Key Executions</h5>
            <ul class="task-list">
              <li>擔任校園特約商店總召，成功簽約<strong> 30+ </strong>合作店家。</li>
              <li>協助舉辦高中職飢餓十二活動。</li>
              <li>協助撰寫會議記錄、製作活動表單等相關文件。</li>
              <li>協助公關部紀錄與討論特約商店相關事宜。</li>
            </ul>
          </div>
          <div class="club-footer takeaway-box">
            <h5 class="sub-title">核心收穫 Key Takeaways</h5>
            <p>學會在繁瑣工作中保持組織運作流暢。</p>
          </div>
        </div>

        <div class="club-card">
          <div class="club-header">
            <h4>科技志工服務社</h4>
          </div>
          <div class="club-body">
            <h5 class="sub-title">執行內容 Key Executions</h5>
            <ul class="task-list">
              <li>每週籌備活動，至社區據點陪伴爺爺奶奶。</li>
            </ul>
          </div>
          <div class="club-footer takeaway-box">
            <h5 class="sub-title">核心收穫 Key Takeaways</h5>
            <p>深刻體會社會公益與同理心的力量，透過互動企劃帶給他人笑容與溫暖。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import '../assets/experience.css'

const activeTab = ref('work')
</script>
