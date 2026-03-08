<template>
  <div class="app-wrapper">
    <!-- 頂部導覽列 -->
    <header class="navbar">
      <nav class="nav-container">
        <!-- 使用 router-link 進行導覽，Vue Router 會自動處理 active 狀態 -->
        <router-link to="/" class="nav-link">首頁</router-link>
        <router-link to="/portfolio" class="nav-link">作品集</router-link>
        <router-link to="/experience" class="nav-link">個人經歷</router-link>
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
  </div>
</template>

<script setup>
import './assets/style.css'

// 在這個基礎架構中，App.vue 作為純粹的佈局元件，
// 路由切換已經交由 vue-router 自動處理，這裡不需要額外的邏輯。
</script>