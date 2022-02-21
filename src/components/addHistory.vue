<template>
    <el-form ref="form" :rules="rules" rel="form" :model="form">
        <el-form-item label="标题" prop="title">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="时间" prop="date">
            <el-date-picker
                    v-model="form.date"
                    type="date"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="内容" prop="data">
            <el-input type="textarea" v-model="form.data"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
            <el-button @click="goBack">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "addHistory",
        data() {
            return {
                form: {
                    title: '',
                    date: '',
                    data: ''
                },
                rules: {
                    title: [
                        {required: true, message: '请输入标题', trigger: 'blur'},
                    ],
                    date: [
                        {required: true, message: '请选择时间', trigger: 'blur'}
                    ],
                    data:[
                        {required: true, message: '请输入内容', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    const _this = this;
                    if (valid) {
                        console.log(this.form);
                        axios.post("/history/save", this.form).then(function (res) {
                            _this.$message({
                                showClose: true,
                                message: '添加成功',
                                type: 'success'
                            });
                            _this.$data.form.title = '';
                            _this.$data.form.date = '';
                            _this.$data.form.data = '';
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
