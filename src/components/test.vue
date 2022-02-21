<template>
    <el-card class="box-card">
        <div class="box-body">
            <div class="title">党史知识测试</div>
            <div v-if="show">{{"得分："+score}}</div>
            <div class="test">
                <el-row v-for="(item,index) in datalist" :key="index">
                    <el-row class="title-row">
                        <el-col :span="24">{{index+1 + '.' +item.title}}</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-radio
                                    v-model="item.radio"
                                    :disabled="show"
                                    v-for="citem in item.options"
                                    :label="citem.label">
                                {{citem.value}}
                                <span v-if="show" class="result">
                                        <i class="el-icon-check" v-if="item.answer == citem.label"
                                           style="color: #01DF74"></i>
                                        <i class="el-icon-close"
                                           v-if="item.radio != item.answer && item.radio == citem.label"
                                           style="color: red"></i>
                                    </span>
                            </el-radio>
                        </el-col>
                    </el-row>
                </el-row>
            </div>
            <div class="btns">
                <el-row>
                    <el-col :span="8">
                        <el-button type="primary" @click="showModel">交卷</el-button>
                    </el-col>
                    <el-col :span="8">
                        <el-button type="primary" @click="getQues">刷新题目</el-button>
                    </el-col>
                    <el-col :span="8">
                        <el-button type="primary" @click="resTodo">重做</el-button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "test",
        data() {
            return {
                show: false,
                name: '123',
                score: 0,
                datalist: []
            }
        },
        created() {
            let _this = this;
            axios.get('/subject/findtitle').then(function (req) {
                for(let a in req.data){
                    _this.$data.datalist.push({
                        title:req.data[a].data,
                        radio:'',
                        answer:req.data[a].answer,
                        options:[{label:'A',value:req.data[a].optiona},
                            {label:'B',value:req.data[a].optionb},
                            {label:'C',value:req.data[a].optionc},
                            {label:'D',value:req.data[a].optiond},]
                    })
                    if(a >=9) break;
                }
            }).catch(error => {
                console.log(error);
                _this.$data.score = "服务器连接错误，请咨询管理员";
                this.show = true;

            })
        },
        methods: {
            showModel() {
                this.show = true;
                this.$data.score = 0;
                let a;
                for (a in this.$data.datalist) {
                    if (this.$data.datalist[a].answer == this.$data.datalist[a].radio) {
                        this.$data.score = this.$data.score + 10;
                    }
                }
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            },
            getQues(){
                this.$router.go("/test");
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            },
            resTodo() {
                this.show = false;
                this.score = 0;
                let a;
                for (a in this.$data.datalist) {
                    this.$data.datalist[a].radio = '';
                }
            }

        }
    }
</script>

<style scoped>
    .box-card {
        border-top: 1px solid #eee;
    }

    .box-body {
        margin: 0 auto;
        width: 1000px;
    }

    .title {
        font-size: 30px;
        letter-spacing: 3px;
        font-weight: bold;
        margin-bottom: 40px;
    }

    .test {
        text-align: left;
        font-size: 20px;
        letter-spacing: 1px;
        font-weight: bold;
    }

    .title-row {
        border-bottom: #D3DCE6 1px solid;
        padding: 20px;
    }

    .result {
        float: right;
        font-size: 20px;
    }

    .btns {
        margin: 50px;
    }

    .el-radio-group {
        padding: 20px;
    }

    .el-radio {
        width: 100%;
        line-height: 30px;
        padding: 5px;
    }

    .el-radio:hover {
        width: 100%;
        line-height: 30px;
        background-color: #eee;
        padding: 5px;
        border-radius: 4px;
    }

</style>
