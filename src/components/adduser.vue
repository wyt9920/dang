<template>
    <el-form ref="form" :rules="rules" rel="form" :model="form">
        <el-form-item label="用户名" prop="uname">
            <el-input v-model="form.uname"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="upsw">
            <el-input v-model="form.upsw"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
            <el-button @click="goBack">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import axios from "axios";
    import api from "../untils/api";
    export default {
        name: "adduser",
        data() {
            return {
                form: {
                    uid: '',
                    uname: '',
                    upsw: ''
                },
                rules: {
                    uname: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    upsw: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    const _this = this;
                    if (valid) {
                        axios.post("/user/save", this.form).then(function (res) {
                            _this.$message({
                                showClose: true,
                                message: '添加成功',
                                type: 'success'
                            });
                            _this.$data.form.uname = '';
                            _this.$data.form.upsw = '';
                        })
                    } else {
                        this.$message({
                            showClose: true,
                            message: '添加失败，请检查用户名或密码是否合法',
                            type: 'error'
                        });
                        return false;
                    }
                })
            },
            goBack() {
                this.$router.push('/admin/user');
            }
        }

    }
</script>

<style scoped>

</style>
