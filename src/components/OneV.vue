<template>
  <div>1</div>
</template>

<script>
export default {
  mounted() {
    console.log(`user模块：${this.$store.state.user.username}`); // 访问store2里面的name属性
    
    this.$store.dispatch('user/setNum', 10);
    console.log(`user模块：${this.$store.state.user.number}`);
  },
}
</script>

<style>

</style>