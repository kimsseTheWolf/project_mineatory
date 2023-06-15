<script setup>
import {ref} from 'vue'
import {message} from "ant-design-vue";

const displayAnnounce = ref(false)
const clickAmount = ref(0)

function triggerWaitingMessage() {
  message.info('请等待用户注册开放后再使用本功能')
  clickAmount.value += 1
  if (clickAmount.value >= 3) {
    message.warning('你这么着急干啥啊（恼）')
    clickAmount.value = 0
  }
}
</script>

<template>
  <div class="flex-box" id="deep-blue">
    <div class="title">Project MINEATORY</div>
    <div style="margin-bottom: 5px">创建，编写，分享属于自己的设定和世界观！</div>
    <div style="display: flex; flex-direction: row">
      <router-link to="/register">
        <a-button type="primary" size="large" style="margin-right: 5px" @click="triggerWaitingMessage">加入Project MINEATORY</a-button>
      </router-link>
      <a-button type="primary" size="large" shape="circle" @click="displayAnnounce = !displayAnnounce">
        <img src="@/assets/icons/Assets.svg" width="28">
      </a-button>
    </div>
  </div>

  <a-modal :visible="displayAnnounce" title="收集美术资源">
    <div style="display: flex; flex-direction: column">
      <div>如果您看到了这个对话框，那么您可以帮我们一些忙吗QAQ！</div>
      <div>现在这个网站比较缺少美术资源，尤其是插画和背景图片。<b>如果您有意愿帮助我们制作一些美术资源的话，我们将感激不尽！</b></div>
      <div>我们也许也会需要翻译来帮助我们制作多语言支持</div>
      <div>具体的信息可以咨询站长：kimsseTheWolf（傻狼）</div>
    </div>
    <template #footer>
      <a-button type="primary" @click="displayAnnounce = !displayAnnounce">我知道啦~</a-button>
    </template>
  </a-modal>
</template>

<style scoped>
.flex-box {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 10px;
  width: 100%;
  flex: auto;
  justify-content: center;
  align-items: center;
  background-color: #125ea8;
  color: white;
  background-image: url("@/assets/homeBG.png");
}
.title {
  font-size: 40px;
  font-weight: bolder;
}

#deep-blue {
  background-color: #125ea8;
  color: white;
}
</style>