<template>
   <el-row class="tac">
    <el-col :span="12">
      <h5>默认颜色</h5>
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/a">选项1</el-menu-item>
            <el-menu-item index="/b">选项2</el-menu-item>
            <el-menu-item index="/c">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>

  </el-row>
   
  </template>
  <script>
    export default {
      name: 'Nav-Bar',
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
  </script>