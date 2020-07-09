<template>
  <div class="login">
    <div class="left">
      <div class="title">
        <img src="@/assets/img/loginLogo.png" alt />
        <span class="titleName">黑马面面</span>
        <span class="titleLine"></span>
        <span class="titleName2">用户登录</span>
      </div>
      <!-- 挂载的元素 -->
      <div id="app">
        <el-row>
          <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="input1"></el-input>
        </el-row>
        <el-row>
          <el-input show-password placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="input2"></el-input>
        </el-row>
        <el-row>
          <el-col class="item" :span="16">
            <el-input placeholder="请输入验证码" prefix-icon="el-icon-key" v-model="input3"></el-input>
          </el-col>
        </el-row>
      </div>
      <el-row>
        <el-checkbox v-model="checked">
          我已阅读并同意
          <el-link type="primary">用户协议</el-link>和
          <el-link type="primary">隐私条款</el-link>
        </el-checkbox>
        <!-- 3格 数字设置为几 -->
      </el-row>
      <el-row>
        <el-button type="primary">登录</el-button>
      </el-row>
      <el-row>
        <el-button type="primary">注册</el-button>
      </el-row>
    </div>
    <div class="right">
      <img src="@/assets/img/login_banner_ele.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      checked: ""
    };
  },
  name: "login"
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
.app {
  height: 100%;
}
.login {
  /* 弹性盒子布局 */
  display: flex;
  /* 水平布局 */
  justify-content: space-around;
  /* 垂直居中 */
  align-items: center;
  height: 100%;
  background: linear-gradient(225deg, #1493fa, #01c6fa);
  .left {
    width: 478px;
    height: 550px;
    padding: 42px;
    background-color: #f5f5f5;
    .title {
      display: flex;
      align-items: center;
      .titleName {
        font-size: 24px;
        font-weight: 400;
        color: #0c0c0c;
        margin: 0 15px;
      }
      .titleLine {
        background-color: #c7c7c7;
        display: inline-block;
        width: 2px;
        height: 28px;
      }
      .titleName2 {
        font-size: 22px;
        font-weight: 400;
        color: #0c0c0c;
        margin: 0 15px;
      }
    }
    // #app .el-input {
    //   margin-top: 25px;
    // }
    .el-row {
      margin-top: 32px;
      font-size: 14px;
      font-weight: 700;
      color: #999999;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>