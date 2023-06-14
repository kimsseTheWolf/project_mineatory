<script setup>
import HeaderBox from "@/components/headers/headerBox.vue";
</script>

<template>
  <HeaderBox></HeaderBox>
  <router-view></router-view>
</template>

<style scoped>
.body-flex {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
}
</style>
