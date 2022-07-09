<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像区域-->
            <div class="avatar_box">
                <img src="../assets/img/GridState.png" alt="">
            </div>
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_form" label-width="0px">
                <!--user name-->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <!--password-->
                <el-form-item prop="password">
                    <el-input :type="type" v-model="loginForm.password" prefix-icon="el-icon-lock">
                      <i slot="suffix" class="icon-style" :class="elIcon" autocomplete="auto" @click="flag = !flag"/>
                    </el-input>
                </el-form-item>
                <!--buttons-->
                <el-form-item class="btns">
                    <el-button type="primary" @click.native.prevent="cli">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false,
      loginForm: {
        username: '1001',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '用户名要求长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '密码要求长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    type () {
      return this.flag ? 'text' : 'password'
    },
    elIcon () {
      return this.flag ? 'el-icon-view' : 'el-icon-minus'
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    cli () {
      if (this.loginForm.username === '1001' && this.loginForm.password === '123456') {
        this.$router.push('/MonthTask')
        this.$message({
          message: '登录成功',
          type: 'success',
          duration: 2000
        })
      } else {
        this.$message({
          message: '登录失败',
          type: 'error',
          duration: 2000
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
    background-color: #2b4b6b;
    height: 100%;
}

.login_box {
    background-color: #fff;
    width: 450px;
    height: 300px;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0px 0px 10px #ddd;
        position: absolute;
        left: 50%;
        top: 0%;
        transform: translate(-50%, -50%);
        background-color: #fff;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }

    .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0px 20px;
        box-sizing: border-box;
        /* C3盒模型 */
    }

    .btns {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
