<script setup>
import {ref} from 'vue'

const isLoginEnabled = ref(false)
</script>

<template>
<div class="header-function-box">
  <div v-if="isLoginEnabled">
    <a-button class="inline-button" ghost>加入Project MINEATORY</a-button>
    <a-button class="inline-button" ghost>登录</a-button>
  </div>
  <div v-if="!isLoginEnabled">
    <a-button class="inline-button" ghost>请等待注册开放</a-button>
  </div>
</div>
</template>

<style scoped>
.header-function-box {
  display: flex;
  flex-direction: row;
  margin: 5px;
  padding: 5px;
  width: fit-content;
  height: fit-content;
}
.inline-button {
  margin-right: 5px;
}
</style>