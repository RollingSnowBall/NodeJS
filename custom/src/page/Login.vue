<template>
  <div id="app" class="appBackground">
      <div class="titleDiv"></div>
      <el-row :gutter="20">
          <el-col :span="6" :offset="6"><div>
              <el-input v-model="input" placeholder="请输入ID"></el-input>
          </div></el-col>
      </el-row>
      <el-row :gutter="20">
          <el-col :span="6" :offset="6"><div>
              <el-input v-model="input" placeholder="请输入密码"></el-input>
          </div></el-col>
      </el-row>
      <el-row :gutter="20">
          <el-col :span="6" :offset="10"><div >
              <el-button type="primary">主要按钮</el-button>
          </div></el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        inputId: ''
    }
  }
}
</script>

<style>
    .titleDiv{
        height: 200px;
    }
    .custom-grid{
        border:1px solid #000;
        height: 50px;
    }
    .el-row {
        margin-bottom: 20px;
    }
    .el-row:last-child {
        margin-bottom: 0;
    }
    .el-col {
        border-radius: 4px;
    }
</style>