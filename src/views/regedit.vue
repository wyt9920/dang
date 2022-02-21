<template>
    <div class="login_container">
        <div class="login_box">
            <div class="login-img">

            </div>
            <el-form :model="ruleForm" status-icon :rules="Rules" ref="ruleForm" class="login-form">
                <div class="form-title">注册</div>
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-row>
                        <el-col :span="12">
                            <el-button type="primary" @click="onSubmit">注册</el-button>
                        </el-col>
                        <el-col :span="12">
                            <el-button @click="toLogin">去登陆</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "regedit",
        data() {
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    name: '',
                    pass: '',
                    checkPass: ''
                },
                Rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    pass: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {required: true, message: '请再次输入密码', trigger: 'blur'},
                        {validator: validatePass2, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            onSubmit: function () {
                const _this = this;
                if ((this.$data.ruleForm.name == '' || this.$data.ruleForm.pass == '' ||this.$data.ruleForm.checkPass == '')
                ||(this.$data.ruleForm.pass != this.$data.ruleForm.checkPass)) {
                    this.$message({
                        showClose: true,
                        message: '用户名和密码不能为空',
                        type: 'error'
                    })
                    return;
                }
                let user = {
                    uname: this.$data.ruleForm.name,
                    upsw: this.$data.ruleForm.pass
                }
                axios.post("http://192.168.3.7:8181/user/save", user).then(function (res) {
                    _this.$alert(
                        '用户账号为：' + res.data.uid + '    用户名为：' + res.data.uname,
                        '恭喜你注册成功！',
                        {confirmButtonText: '我知道了'}
                    )
                })
                this.$data.ruleForm.name = this.$data.ruleForm.pass = this.$data.ruleForm.checkPass = '';
            },
            toLogin() {
                this.$router.push("/login");
            }
        }
    }
</script>

<style scoped>

    .login_container {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .login-img {
        width: 300px;
        height: 100%;
        border-radius: 8px 0 0 8px;
        background-color: #aa2222;
        float: left;
    }

    .form-title {
        font-size: 40px;
        font-weight: bold;
    }

    .login-form {
        width: 400px;
        padding: 50px;
        float: right;
    }

    .login_box {
        width: 800px;
        height: 500px;
        margin: 0 auto;
        box-shadow: rgba(100, 100, 100, 0.2) 0 0 50px;
        border-radius: 8px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
