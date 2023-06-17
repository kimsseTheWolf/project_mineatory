<script setup>
import {ref} from "vue";
import {message} from "ant-design-vue";
import ELUA from "@/components/agreement/ELUA.vue";
import userAPI from '@/requests/user'

const displayAgreement = ref(false)
const username = ref("")
const password = ref("")
const agreementChecked = ref(false)
const isRegisterLoading = ref(false)

function triggerAgreementClose() {
  displayAgreement.value = false
  agreementChecked.value = true
}

function triggerRegister() {
  message.info('注册目前还未开放，请等待具体开放时间')
}

async function createNewUser() {
  // announce register status
  message.info('正在注册')
  isRegisterLoading.value = true
  // get result from API
  let result = await userAPI.createNewUser(username.value, password.value)
  console.log(result)
  // close register status
  isRegisterLoading.value = false
}
</script>

<template>
<div class="flex-container">
  <div class="login-box">
    <h1 style="margin-bottom: 5px">加入Project MINATORY</h1>
    加入我们，开始你的创作和分享之旅吧！
    <a-input placeholder="用户名" class="input" v-model:value="username"></a-input>
    <a-input-password placeholder="密码" class="input" v-model:value="password"></a-input-password>
    <a-checkbox v-model:checked="agreementChecked">我已阅读并且同意<a-button type="link" @click="displayAgreement = !displayAgreement">《用户使用许可协议》</a-button></a-checkbox>
    <a-button type="primary" @click="createNewUser" :loading="isRegisterLoading">加入Project MINEATORY</a-button>
    <div style="text-align: center; margin: 5px">已经是会员？</div>
    <a-button @click="triggerRegister">前往登录</a-button>

    <a-modal :visible="displayAgreement" title="用户使用许可协议">
      <ELUA></ELUA>
      <template #footer>
        <a-button type="primary" @click="triggerAgreementClose()">关闭</a-button>
      </template>
    </a-modal>
  </div>
</div>
</template>

<style scoped>
.flex-container {
  width: auto;
  flex: auto;
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/homeBG.png");
}
.input {
  margin: 5px;
}
</style>