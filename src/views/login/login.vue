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
      <el-form class="form" ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-form-item prop="phone">
          <el-input placeholder="请输入手机号" prefix-icon="el-icon-user" v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            show-password
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row :gutter="0">
            <el-col class="item" :span="16">
              <el-input placeholder="请输入验证码" prefix-icon="el-icon-key" v-model="ruleForm.code"></el-input>
            </el-col>
            <el-col :span="8">
              <img src="@/assets/img/key.jpg" alt class="code" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="isCheck">
          <el-checkbox v-model="ruleForm.isCheck" class="checked-em">
            <span class="el-link">我已阅读并同意</span>
            <el-link type="primary">用户协议</el-link>
            <span class="el-link">和</span>
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="right">
      <img src="@/assets/img/login_banner_ele.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        phone: "",
        pass: "",
        code: "",
        isCheck: ""
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号!", trigger: "blur" }
          // { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码!", trigger: "change" },
          { min: 6, max: 12, message: "请输入6-12位密码!", trigger: "change" }
        ],
        code: [
          {
            required: true,
            min: 4,
            max: 4,
            message: "请输入验证码!",
            trigger: "change"
          }
        ],
        isCheck: [
          { required: true, message: "请填入用户名!", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.height {
  height: 100%;
}
.width {
  width: 100%;
}
html,
body {
  .height;
}
.app {
  .height;
}
.login {
  /* 弹性盒子布局 */
  display: flex;
  /* 水平布局 */
  justify-content: space-around;
  /* 垂直居中 */
  align-items: center;
  height: 100%;
  background: linear-gradient(225deg, #01c6fa, #1493fa);
  .left {
    width: 478px;
    height: 550px;
    padding: 42px;
    background-color: #f5f5f5;
    .title {
      display: flex;
      align-items: center;
      .titleName,
      .titleName2 {
        font-weight: 400;
        color: #0c0c0c;
        margin: 0 15px;
      }
      .titleName {
        font-size: 24px;
      }
      .titleLine {
        background-color: #c7c7c7;
        display: inline-block;
        width: 1px;
        height: 28px;
      }
      .titleName2 {
        font-size: 22px;
      }
    }
    //表单
    .form {
      padding-top: 30px;
      .code {
        width: 100%;
        height: 40px;
      }
      .btn {
        width: 100%;
      }
      .btn:last-child {
        margin-top: 4px;
      }
    }
  }
}
</style>