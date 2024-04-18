<template>
    <div class="common-layout">
      <el-container class="mainbackground">
        <el-header>
            <div id="mobile-bar" @click="toggleMenu">菜单</div>
            <div class="menu-bar" :class="{ open: isMenuOpen }"></div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
    export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
  </script>
    
  <style>
  
  .el-header {
    height:50px;
  }
  .mainbackground {
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    height:100vh;
  }
  html, body, #app {
    height: 100%;
    margin: 0;
  }
  .menu-bar {
    flex-direction: column;
    position: fixed;
    right: 0%;
    border-radius: 10px;
    top: 8%;
    gap: 30px;
    height: auto;
    background-color: rgba(255, 255, 255, 0.1);
    width: 200px;
    align-items: center;
    padding: 20px 0px;
    transform: translateX(100%);
    transition: all 0.3s ease;
      }
    .menu-bar li {
    text-align: center;
    }
  
  .menu-bar.open {
    transform: translateX(0%);
    }
  
  #mobile-bar {
    display: block;
    position: fixed;
    right: 5%;
    top: 5%;
    transform: translateY(-50%);
    color: white;
    font-size: 30px;
    transition: all 0.3s ease;
    cursor: pointer;
    }
      
  </style>
  
  