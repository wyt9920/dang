<template>
    <el-form ref="form" :rules="rules" rel="form" :model="form">
        <el-form-item label="编号">
            <el-input v-model="form.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="标题" prop="title">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="党员姓名" prop="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="data">
            <el-input type="textarea" v-model="form.data"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">立即修改</el-button>
            <el-button @click="goBack">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "editDangyuan",
        data() {
            return {
                form: {
                    title: '',
                    name: '',
                    data: ''
                },
                rules: {
                    title: [
                        {required: true, message: '请输入标题', trigger: 'blur'},
                    ],
                    name: [
                        {required: true, message: '请输入党员姓名', trigger: 'blur'}
                    ],
                    data:[
                        {required: true, message: '请输入内容', trigger: 'blur'}
                    ]
                }
            }
        },
        created() {
            this.$data.form = this.$route.query.data;
        },
        methods:{
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    const _this = this;
                    if (valid) {
                        axios.post("/dangyuan/save", this.form).then(function (res) {
                            if(res.data == 'success') {
                                _this.$message({
                                    showClose: true,
                                    message: '修改成功',
                                    type: 'success'
                                });
                                _this.$router.push("/dangyuantable");
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
        }
    }
</script>

<style scoped>

</style>
