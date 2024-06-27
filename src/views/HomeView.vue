<template>
  <div class="home" style="display: flex">
    <Navbar></Navbar>
    <el-main id="main">
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
export default {
  name: "HomeView",
  components: {
    Navbar,
  },
};
</script>
