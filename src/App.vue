<template>
  <div class="app-wrapper">
    <!-- 頂部導覽列 -->
    <header class="navbar">
      <nav class="nav-container">
        <!-- 使用 router-link 進行導覽，Vue Router 會自動處理 active 狀態 -->
        <router-link to="/" class="nav-link">首頁 HOME</router-link>
        <router-link to="/portfolio" class="nav-link">就學經歷 LEARNING EXPERIENCE</router-link>
        <router-link to="/experience" class="nav-link">工作經歷 WORK EXPERIENCE</router-link>
      </nav>
    </header>

    <!-- 主要內容區：根據路由切換元件 -->
    <main class="main-content">
      <!-- v-slot 與 transition 搭配，增加流暢的頁面淡入淡出動畫 -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <p class="footer-title">Personal Website Info</p>
          <p class="footer-subtitle">Fang-Yu Zhang | About Me Portfolio</p>
        </div>
        <div class="footer-contact">
          <p class="footer-contact-title">聯絡資訊 Contact</p>
          <a href="tel:0963821856" class="footer-link">0963-821-856</a>
          <a href="mailto:ericayu911025@gmail.com" class="footer-link">ericayu911025@gmail.com</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import './assets/style.css'

// 在這個基礎架構中，App.vue 作為純粹的佈局元件，
// 路由切換已經交由 vue-router 自動處理，這裡不需要額外的邏輯。
</script>