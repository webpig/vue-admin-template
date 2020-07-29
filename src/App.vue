<template>
  <div id="app">
    <el-container>
      <el-header height="80px" class="header">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <Aside></Aside>
        </el-aside>
        <el-main class="main"></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header'
import Aside from './components/Aside'

export default {
  name: 'App',
  components: {
    Header,
    Aside
  }
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-color: #d3dce6;
  height: calc(100vh - 80px);
}
.main {
  background-color: #e9eef3;
}
</style>
