<template>
  <div class="home-container">
    <div class="snow-layer" aria-hidden="true">
      <span
        v-for="flake in snowflakes"
        :key="flake.id"
        class="snowflake"
        :style="{
          '--flake-left': flake.left,
          '--flake-size': flake.size,
          '--flake-duration': flake.duration,
          '--flake-delay': flake.delay,
          '--flake-opacity': flake.opacity,
        }"
      ></span>
    </div>

    <section class="hero-section fade-in">
        <div class="hero-content">
        <div class="hero-visual">
          <div class="hero__avatar-container">
            <div class="hero__avatar-wrapper">
              <div class="hero__avatar-decoration-bg"></div>
              <img src="https://drive.google.com/thumbnail?id=1fvcTQBCTWUVFTaOWHj1Df61CEMGnLg9q&sz=w600" alt="張芳瑜" class="hero__avatar">
              <div class="hero__avatar-decoration-circle"></div>
            </div>
          </div>
          <div class="intro-text">
            <h1 class="name">張芳瑜 <span class="en-name">Fang-Yu Zhang</span></h1>
            <p class="current-status">
              國立台灣科技大學 資訊管理系研究所 碩士班一年級
            </p>
            <h2 class="tagline">
              結合<span class="highlight">理性邏輯</span> 與 <span class="highlight2">感性設計</span> 的專案管理者
            </h2>
          </div>
        </div>
        <p class="bio">
         我能從不同角度思考問題，尋找創新的解決方案。<br>
         在面對瓶頸時，我願意主動學習並尋求專業建議，以應對各種未知的挑戰。
        </p>
        <!-- <div class="contact-info">
          <h3>CONTACT INFO</h3>
          <div>
            <div class="contact-item">
              <i class="icon">📱</i> 0963-821-856
            </div>
            <div class="contact-item">
              <i class="icon">✉️</i> ericayu911025@gmail.com
            </div>
            <div class="contact-item">
              <i class="icon">📍</i> 台北市大安區
            </div>
          </div>
        </div> -->
      </div>
    </section>

    <section class="section-container education-section slide-up">
      <div class="section-header">
        <h3 class="section-title">Education</h3>
        <span class="section-subtitle">學歷背景</span>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">2025 - 2027</div>
          <div class="timeline-content">
            <h4 style="color: #7c4c4c;">國立台灣科技大學 資訊管理研究所</h4>
            <p class="degree">碩士班 就學中</p>
            <p class="extra">❁ 
                  <router-link class="extra-link" :to="{ path: '/portfolio', hash: '#1'}">
                     教育部教學實踐研究計畫投稿
                  </router-link> 
                  <span class="tooltip">🔍
                <span class="tooltip-text">▸ 整合生成式人工智慧於DevOps專案導向軟體工程與管理之教學流程設計與其學習成效之研究</span>
              </span>
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">2022 - 2025</div>
          <div class="timeline-content">
            <h4>國立臺中科技大學 資訊管理系</h4>
            <p class="degree">四技日間部</p>
            <p class="achievement">🌟 平均系排第 4 名 ｜ 榮獲 3 次書卷獎</p>
            <div class="extra-container">
                <p class="extra tooltip-parent">❁
                  <router-link class="extra-link" :to="{ path: '/portfolio'}">
                    全國資訊應用服務創新競賽
                  </router-link>
                  <span class="tooltip">🔍
                    <span class="tooltip-text">▸ 鈦坦敏捷開發特別獎 第二名<br>▸ 教育開放資料組 第二名</span>
                  </span>
                </p>
                <p class="extra tooltip-parent">❁ 
                   <router-link class="extra-link" :to="{ path: '/portfolio', hash: '#1'}">
                     國科會 大專學生研究計畫
                  </router-link> 
                  <span class="tooltip">🔍
                    <span class="tooltip-text">▸ 運用氣體辨識於獨居老人居家消防安全輔助之研究</span>
                  </span>
                </p>
                <p class="extra tooltip-parent">❁ 專管領域實習 <span class="tooltip">🔍
                    <span class="tooltip-text">▸ 巨鷗科技股份有限公司 - SMART-IM 專案助理</span>
                  </span>
                </p>
                <p class="extra tooltip-parent">❁ 社團參與經驗 <span class="tooltip">🔍
                    <span class="tooltip-text">▸ 學生會秘書部/選務部<br>▸ 系學會美宣組<br>▸ 科技志工服務社</span>
                  </span>
                </p>
            </div>

          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">2021 - 2022</div>
          <div class="timeline-content">
            <h4>國立臺中科技大學 智慧生產工程系 <span class="remark">轉系</span></h4>
            <p class="degree">四技日間部</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-container skills-section slide-up">
      <div class="section-header">
        <h3 class="section-title">Core Skills</h3>
        <span class="section-subtitle">專業技能與工具</span>
      </div>
      <div class="skills-grid">
        <div class="skill-card skill-card--project">
          <h4>▸  專案管理</h4>
          <p class="skill-desc">具備專案管理知識與實務經驗，能有效規劃、執行與監控專案進度，確保專案目標達成。</p>
          <div class="tags">
            <span class="tag"># 系統架構規劃</span>
            <span class="tag"># 專案時程 / 進度控管</span>
            <span class="tag"># 專案規劃執行</span>
            <span class="tag"># 專案溝通管理</span>
            <span class="tag"># 系統流程圖製作</span>
            <span class="tag"># KanBan - Trello、Jira</span>
          </div>
        </div>
        <div class="skill-card skill-card--design">
          <h4>▸  網頁介面設計</h4>
          <p class="skill-desc">熟悉 Figma、Axure 等設計工具以及HTML5/CSS3語法，能夠創建直觀且美觀的使用者介面，提升使用者體驗。</p>
          <div class="tags">
            <span class="tag">#使用者體驗設計</span>
            <span class="tag"># 介面設計 - Figma、Axure</span>
            <span class="tag"># HTML、CSS</span>
            <span class="tag"># Vue.js</span>
            <span class="tag"># Git 版本控制</span>
          </div>
        </div>
        <div class="skill-card skill-card--admin">
          <h4>▸  文書處理</h4>
          <p class="skill-desc">精通 Microsoft Office 套件，能高效處理各類文書工作，協助專案文件撰寫與會議紀錄。</p>
          <div class="tags">
            <span class="tag"># PowerPoint</span>
            <span class="tag"># Word</span>
            <span class="tag"># Excel</span>
            <span class="tag"># 行政事務處理</span>
            <span class="tag"># 會議紀錄、文件撰寫</span>
          </div>
        </div>
        <div class="skill-card skill-card--ai">
          <h4>▸  AI應用趨勢</h4>
          <p class="skill-desc">持續關注生成式AI的最新發展，了解其在宣傳文案、圖片生成以及程式撰寫等領域的應用，並探索人機協作的新可能性。</p>
          <div class="tags">
            <span class="tag"># Generative AI</span>
            <span class="tag"># 人機協作</span>
            <span class="tag"># 宣傳文案、圖片生成</span>
            <span class="tag"># Vibe coding</span>
          </div>
        </div>
      </div>
    </section>



    <section class="section-container shortcuts-section slide-up">
      <div class="section-header">
        <h3 class="section-title">Explore More</h3>
        <span class="section-subtitle">深入了解我的經歷</span>
      </div>
      <div class="cards-container">
        <router-link to="/portfolio" class="nav-card">
          <div class="card-bg portfolio-bg"></div>
          <div class="card-content">
            <div class="card-icon-wrapper">
              <span class="card-icon">💡</span>
            </div>
            <h4>專案與學術成果</h4>
            <p class="card-desc">探索我在資訊應用創新競賽的獲獎專題，以及國科會與教育部的學術研究計畫。</p>
            <span class="action-text">View Portfolio <span class="arrow">→</span></span>
          </div>
        </router-link>

        <router-link to="/experience" class="nav-card">
          <div class="card-bg experience-bg"></div>
          <div class="card-content">
            <div class="card-icon-wrapper">
              <span class="card-icon">🤝</span>
            </div>
            <h4>實務與社團經歷</h4>
            <p class="card-desc">了解我在巨鷗科技的專案助理實習經驗，以及學生會與志工服務的跨部門協調歷程。</p>
            <span class="action-text">View Experience <span class="arrow">→</span></span>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const snowflakeCount = 32;

const snowflakes = Array.from({ length: snowflakeCount }, (_, index) => {
  const size = `${(Math.random() * 5 + 4).toFixed(1)}px`;
  const left = `${(Math.random() * 100).toFixed(2)}vw`;
  const duration = `${(Math.random() * 7 + 10).toFixed(2)}s`;
  const delay = `${(Math.random() * 10).toFixed(2)}s`;
  const opacity = (Math.random() * 0.5 + 0.35).toFixed(2);

  return {
    id: index,
    size,
    left,
    duration,
    delay,
    opacity,
  };
});
</script>