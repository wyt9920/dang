<template>
    <el-form ref="form" :rules="rules" rel="form" :model="form">
        <el-form-item label="账号" >
            <el-input v-model="form.uid" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="uname">
            <el-input v-model="form.uname"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="upsw">
            <el-input v-model="form.upsw"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">修改</el-button>
            <el-button @click="goBack">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "editUser",
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
                            if(res.data == 'success') {
                                _this.$message({
                                    showClose: true,
                                    message: '修改成功',
                                    type: 'success'
                                });
                                _this.$router.push("/user");
                            }
                        })
                    } else {
                        this.$message({
                            showClose: true,
                            message: '修改失败，请检查用户名或密码是否合法',
                            type: 'error'
                        });
                        return false;
                    }
                })
            },
            goBack() {
                this.$router.go(-1);
            }
        },
        created() {
            this.$data.form = this.$route.query.user;
        }
    }
</script>

<style scoped>

</style>
