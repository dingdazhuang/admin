<template>
  <div class="login_page">
    <transition name="form-fade" mode="in-out">
      <section class="form_container">
        <div class="titleArea rflex">
          <img class="logo" :src="logo" alt="Kulon admin" />
          <span class="title">
            Kulon
            <i>Admin</i>
          </span>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
          <el-form-item prop="username" class="login-items">
            <span class="loginTips">
              <icon-svg class="iconuser"></icon-svg>
            </span>
            <el-input
              @keyup.enter.native="submitForm('loginForm')"
              class="area"
              type="text"
              placeholder="用户名"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" class="login-item">
            <span class="loginTips">
              <icon-svg icon-class="iconLock" />
            </span>
            <el-input
              @keyup.enter.native="submitForm('loginForm')"
              class="area"
              type="password"
              placeholder="密码"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="submit_btn" type="primary" @click="submitForm('loginForm')">SIGN IN</el-button>
          </el-form-item>
        </el-form>
        <div class="tiparea">
          <p class="wxtip">温馨提示：</p>
          <p class="tip">
            用户名为：admin/editor
            <span>(可用于切换权限)</span>
          </p>
          <p class="tip">密码为：123456</p>
        </div>
        <div class="sanFangArea">
          <p class="title">第三方账号登录</p>
          <ul class="rflex">
            <li @click="loginByWechat">
              <icon-svg icon-class="iconwechat" />
            </li>
            <li>
              <icon-svg icon-class="iconweibo" />
            </li>
            <li>
              <icon-svg icon-class="iconGithub" />
            </li>
          </ul>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import logoImg from '@/assets/img/logo.png'
// import { login } from '@/assets/api/user'
// import { setToken } from '@/utils/auth'

export default {
  data () {
    return {
      logo: logoImg,
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 8, message: '字符在2-8个之间', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
	loginByWechat () {},
	submitForm (loginForm) {
		// this.$refs[loginForm].validate(valid => {
		// 	if (valid) {
		// 		let userInfo = this.loginForm;
		// 		login(userInfo).then(res => {
		// 			let userList = res.data.userList;
		// 			setToken('token', userList.token);
		// 			this.$router.push({path: '/'});
		// 			this.$store.dispatch('initLeftMenu');
		// 		})
		// 	}
		// })
	}
  }
}
</script>

<style lang='scss' scoped>
.login_page {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../assets/img/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.form_container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 370px;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
  .titleArea {
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 22px;
    width: 100%;
    padding-bottom: 20px;
    .logo {
      width: 40px;
      margin-right: 10px;
    }
    .title {
      i {
        color: #042743;
      }
    }
  }

  .loginForm {
    .submit_btn {
      width: 100%;
      padding: 13px 0;
      font-size: 16px;
    }
    .loginTips {
      position: absolute;
      left: 10px;
      z-index: 20;
      // color: #FF7C1A;
      font-size: 18px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.manage_tip {
  margin-bottom: 20px;
  .title {
    font-family: cursive;
    font-weight: bold;
    font-size: 26px;
    color: #fff;
  }
  .logo {
    width: 60px;
    height: 60px;
  }
}

.tiparea {
  text-align: left;
  font-size: 12px;
  color: #4cbb15;
  padding: 10px 0;
  .tip {
    margin-left: 54px;
  }
}

.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
.loginForm {
  .el-button--primary {
    background-color: #042743;
    border: 1px solid #042743;
  }
}
.sanFangArea {
  border-top: 1px solid #dcdfe6;
  padding: 10px 0;
  display: none;
  .title {
    font-size: 14px;
    color: #8b9196;
    margin-bottom: 10px;
  }
  ul {
    li {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .svg-icon {
        font-size: 24px;
      }
    }
  }
}
</style>
