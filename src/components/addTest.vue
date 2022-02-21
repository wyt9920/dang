<template>
    <el-form ref="form" :rules="rules" :model="subject">
        <el-form-item label="题目" prop="data">
            <el-input type="textarea" v-model="subject.data"></el-input>
        </el-form-item>
        <el-form-item label="选项A" prop="optiona">
            <el-input v-model="subject.optiona"></el-input>
        </el-form-item>
        <el-form-item label="选项B" prop="optionb">
            <el-input v-model="subject.optionb"></el-input>
        </el-form-item>
        <el-form-item label="选项C" prop="optionc">
            <el-input v-model="subject.optionc"></el-input>
        </el-form-item>
        <el-form-item label="选项D" prop="optiond">
            <el-input v-model="subject.optiond"></el-input>
        </el-form-item>
        <el-form-item label="答案" prop="answer">
            <el-input v-model="subject.answer"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">立即添加</el-button>
            <el-button @click="goBack">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "addTest",
        data() {
            return {
                subject: {
                    id: '',
                    data: '',
                    optiona: '',
                    optionb: '',
                    optionc: '',
                    optiond: '',
                    answer: '',
                },
                rules: {
                    data: [
                        {required: true, message: '该选项不能为空', trigger: 'blur'}
                    ],
                    optiona: [
                        {required: true, message: '该选项不能为空', trigger: 'blur'}
                    ],
                    optionb: [
                        {required: true, message: '该选项不能为空', trigger: 'blur'}
                    ],
                    optionc: [
                        {required: true, message: '该选项不能为空', trigger: 'blur'}
                    ],
                    optiond: [
                        {required: true, message: '该选项不能为空', trigger: 'blur'}
                    ],
                    answer: [
                        {required: true, message: '该选项不能为空', trigger: 'blur'}
                    ],
                }
            }
        },
        methods:{
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    const _this = this;
                    if (valid) {
                        console.log(this.subject);
                        axios.post("/subject/save",this.subject).then(function (res) {
                            _this.$message({
                                showClose: true,
                                message: '添加成功',
                                type: 'success'
                            });
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
                this.$router.push('/testTable');
            }
        }

    }
</script>

<style scoped>

</style>
