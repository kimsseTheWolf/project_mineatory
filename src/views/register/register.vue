<script setup>
import {ref} from "vue";
import {message} from "ant-design-vue";

const displayAgreement = ref(false)
const username = ref("")
const password = ref("")
const agreementChecked = ref(false)

function triggerAgreementClose() {
  displayAgreement.value = false
  agreementChecked.value = true
}

function triggerRegister() {
  message.info('注册目前还未开放，请等待具体开放时间')
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
    <a-button type="primary" @click="triggerRegister">加入Project MINEATORY</a-button>
    <div style="text-align: center; margin: 5px">已经是会员？</div>
    <a-button @click="triggerRegister">前往登录</a-button>

    <a-modal :visible="displayAgreement" title="用户使用许可协议">
      <p>首先非常感谢您支持并使用Project MINEATORY。我们热衷于让所有人都可以制作，管理，分享自己的世界观和自己的一些设定。这些设定也允许你在网络世界中以一种新的方式来表达自己。但是在此之前您需要阅读并了解我们的用户许可协议来保护您的数据与权益。</p>
      <p>我们承诺：</p>
      <ul>
        <li>本平台目前并没有正式的数据库，我们所有的数据目前是通过我们的Notion来存储。请您不要使用一般您常用的用户名与密码以保护您的隐私安全。</li>
        <li>我们的管理员没有权限来查看您的密码以及本平台上其他的隐私信息。</li>
        <li>我们不会将您的使用数据分享给任何除了Notion以外的第三方机构。</li>
      </ul>
      <p>您需要注意：</p>
      <ul>
        <li>遵守相关的法律法规，请不要在本平台讨论，上传，编写设计性别暴力，政治敏感话题，色情内容，赌博，毒品相关的内容。</li>
        <li>您的用户名，简介，与头像不应该存在歧视，偏见，以及上述的不正当内容</li>
        <li>尊重他人隐私，平等对待其他人</li>
        <li>如果您的作品是转载，或者作品的题材与撰写是由AI模型生成的，您需要告知其他人</li>
      </ul>
      <p>若您的内容违反了上述的要求，您的内容可能会遭到下架删除处理。严重者可能会受到封号处理。对于因为不正当内容而导致的损失，本平台不会对此承担任何责任。</p>
      <p>非常感谢您阅读我们的用户许可协议，希望您可以在我们的平台自由地创造新的内容！</p>
      <p>来自Project MINEATORY的开发与运营团队</p>
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