<template>
    <div class="login_container">
        <div class="login_box">
            <div class="login-img">
            </div>
            <el-form ref="form" :rules="loginRules" :model="form" class="login-form">
                <div class="form-title">登录</div>
                <el-form-item prop="uid">
                    <el-input placeholder="请输入账号" oninput="value=value.replace(/[^\d.]/g,'')" prefix-icon="el-icon-user" v-model="form.uid"></el-input>
                </el-form-item>
                <el-form-item prop="upsw">
                    <el-input placeholder="请输入密码" prefix-icon="el-icon-key" type="password" v-model="form.upsw" autocomplete="no"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button  type="primary" @click="onSubmit(form)">登录</el-button>
                    <el-button @click="goRegedit">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import api from "../untils/api";

    export default {
        name: "Login",
        data(){
            return{
                form:{
                },
                loginRules:{
                    uid:[
                        {required: true, message: '请输入用户ID', trigger: 'blur'}
                    ],
                    upsw:[
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
            onSubmit() {
                let _this = this;
                axios.post("http://192.168.3.7:8181/user/login",this.$data.form).then(function (resp) {
                    if(resp.data != 'error'){
                        sessionStorage.setItem("name", resp.data);
                        sessionStorage.setItem("login","true");
                        _this.$router.push("/");
                    }else{
                        _this.$message.error('用户名或密码错误！');
                    }
                })
            },
            goRegedit:function () {
                this.$router.push("/regedit");
            }
        },
        created() {
            if(sessionStorage.getItem('login') == 'true'){
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>

    .login_container{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .login-img{
        width: 300px;
        height: 100%;
        border-radius: 8px 0 0 8px;
        background-color: #aa2222;
        float: left;
    }

    .form-title{
        font-size: 40px;
        font-weight: bold;
        padding-bottom: 50px;
    }
    .login-form{
        width: 400px;
        padding: 100px 50px;
        float: right;
    }

    .login_box{
        width: 800px;
        height: 500px;
        margin: 0 auto;
        box-shadow: rgba(100,100,100,0.2) 0 0 50px;
        border-radius: 8px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    .el-button{
        margin: 10px 50px;
    }
</style>
