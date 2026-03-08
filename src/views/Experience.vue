<template>
  <div class="experience-container">
    <!-- <h2 class="page-title">個人經歷 Experience</h2> -->

    <section
      id="tab-panel-work"
      class="experience-section"
      role="tabpanel"
      aria-labelledby="work-tab"
    >
      <!-- <h3 class="section-title">專業實習經歷 Professional Experience</h3> -->

      <div class="job-card">
        <div class="job-header">
          <div class="job-title-group">
            <h4 class="company-name">巨鷗科技股份有限公司</h4>
            <p class="job-role">SMART-IM  專案管理實習生</p>
          </div>
          <div class="job-duration">
            <span class="date-badge">2024/07 ~ 2025/01</span>
          </div>
        </div>

        <div>
          <div class="job-body">
            <p>
              在巨鷗科技十八週的實習中，我參與系統雛型設計、功能測試與資料介接等工作，從實務中理解需求釐清、系統分析與跨部門溝通在專案推動中的重要性。透過協助會議紀錄、專案月報與文件整理，我也培養了進度控管與資訊整合能力，對資訊系統專案從規劃到落地的流程有了更完整的認識。
            </p>
          </div>
        </div>

        <div class="job-contributions">
          <h5 class="contributions-title">❁ Key Contributions 
            <span class="project-tag">#國立政治大學深耕計畫專案管考平台</span>
              <span class="project-tag">#塑膠工業技術發展中心人才培訓網站</span></h5>
             
          <ul class="contributions-list">
            <li
              v-for="(item, index) in contributions"
              :key="item.title"
              class="contribution-item"
              :class="`contribution-item--${(index % 5) + 1}`"
            >
              <button
                type="button"
                class="contribution-toggle"
                :aria-expanded="isContributionOpen(index)"
                @click="toggleContribution(index)"
              >
                <span class="bullet-icon">0{{ index + 1 }}</span>
                <span class="contribution-heading">{{ item.title }}</span>
                <span class="contribution-arrow" :class="{ 'is-open': isContributionOpen(index) }">▼</span>
              </button>

              <transition name="contribution-collapse">
                <div v-if="isContributionOpen(index)" class="contribution-body">
                  {{ item.content }}
                </div>
              </transition>
            </li>
          </ul>

          <div class="internship-reflection">
            <h5 class="reflection-title">❁ Internship Reflection 實習心得</h5>
            <p>
              在巨鷗科技為期十八週的實習，讓我第一次真正接觸到資訊系統從規劃到落地的完整過程。相較於學校課程多以理論與案例討論為主，實際參與專案後才發現，職場上的專案執行更重視需求釐清、溝通協調以及進度管理等多方面能力。這段實習不僅讓我理解系統開發的實務流程，也讓我開始思考如何以更有系統的方式處理專案任務。
            </p>
            <p>
              實習期間，我參與了系統雛型設計、功能測試以及報表介接等工作內容。在反覆進行開卡測試與雛型調整的過程中，我逐漸體會到「需求釐清」在專案中的重要性。系統設計不能只停留在畫面呈現，更需要同時考量工程師的開發邏輯與最終使用者的操作習慣。透過與團隊討論人事與主計系統的資料介接方式，我也學習到如何有條理地整理不同資料來源，並思考系統後續運作的穩定性。這些經驗讓我對系統分析與需求理解有了更實際的體會，也學會從不同角色的角度重新審視專案需求。
            </p>
            <p>
              除了系統相關工作外，專案進度控管與溝通協調也是我在實習期間著力學習的部分。在協助推進政大與新竹縣政府等專案時，我參與會議並負責整理會議紀錄與專案月報。我提醒自己不能只是單純記錄會議內容，而是要在討論過程中抓住重點，將較為發散的討論整理成團隊後續可以執行的待辦事項。後續在製作教育訓練簡報與查核文件集時，我也特別注意內容的邏輯與結構，確保專案資訊能被清楚傳遞，並有助於後續的專案交接與執行。
            </p>
            <p>
              整體而言，這次實習讓我更具體地理解專案運作的全貌。從前期的需求討論與雛型設計，到後期的系統測試與文件整理，每個環節都彼此連動。過程中，我不僅培養了處理細節的耐心與解決問題的能力，也更加體會到主動溝通與負責態度在團隊合作中的重要性。未來我希望能持續精進系統分析與專案管理相關能力，將這段實習累積的經驗，應用在解決更複雜的系統需求與實際問題上。
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import '../assets/experience.css'

const openContributions = ref([0])

const contributions = [
  {
    title: '資訊架構設計',
    content: '梳理並編輯系統功能架構圖，釐清各模塊關聯，確保整體系統設計的邏輯性與完整性，降低後續開發的不確定性。',
  },
  {
    title: '系統雛型規劃',
    content: '獨立繪製系統頁面配置圖與雛型，完成核心流程設計，將抽象需求轉化為視覺化成果。',
  },
  {
    title: '系統規格定義與文件撰寫',
    content: '整理人事與主計系統介接資料、編寫專案月報與查核文件集，將繁雜資訊系統化，提供團隊清晰的開發參考依據。',
  },
  {
    title: '使用者體驗優化與迭代',
    content: '透過內外部會議與工程師反覆討論開卡需求與介接資料，綜合評估技術可行性，多次進行雛型細節的調整與優化。',
  },
  {
    title: '跨部門溝通與需求整合',
    content: '參與新竹縣政府與政大等外部專案會議，負責統整專案需求並撰寫會議紀錄，確保客戶需求與內部團隊認知一致。',
  },
]

function toggleContribution(index) {
  if (openContributions.value.includes(index)) {
    openContributions.value = openContributions.value.filter((item) => item !== index)
    return
  }

  openContributions.value = [...openContributions.value, index]
}

function isContributionOpen(index) {
  return openContributions.value.includes(index)
}
</script>
