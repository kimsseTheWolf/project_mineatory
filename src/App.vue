<script setup>
import HeaderBox from "@/components/headers/headerBox.vue";
</script>

<template>
  <HeaderBox></HeaderBox>
  <div class="body-flex">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.body-flex {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
</style>
