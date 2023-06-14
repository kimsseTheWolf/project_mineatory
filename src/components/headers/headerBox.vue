<script setup>
import HeaderFunctionBox from "@/components/headers/headerFunctionBox.vue";
</script>

<template>
<div class="main-header-box">
  <div class="title">Project MINEATORY</div>
  <header-function-box></header-function-box>
</div>
</template>

<style scoped>
.main-header-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 10px;
  width: 100%;
  height: fit-content;
  position: sticky;
  top: 0;
  left: 0;
  background-color: dodgerblue;
  color: white;
}
.title {
  font-size: 30px;
  font-weight: bolder;
}
</style>