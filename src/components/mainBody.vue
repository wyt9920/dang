<template>
    <el-container>
        <el-main style="height: 500px;">
            <template>
                <el-carousel :interval="5000" arrow="always" height="500px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <img src="../assets/lunbo2.png"/>
                    </el-carousel-item>
                </el-carousel>
            </template>
        </el-main>
        <el-main style="height: 400px;">
            <div class="clearfix">
                <el-row :gutter="100" class="h250">
                    <el-col :span="8" class="box">
                        <div class="box-tile"><i class="el-icon-notebook-2"></i>党史介绍</div>
                        <div class="box-list">
                            <a v-for="item in historyList" :key="item.id" class="boxrow" v-on:click='GotoPage("history",item)'>
                                <div class="col1">{{item.title.substring(0,9)}}<span v-if="item.title.length > 9">...</span></div>
                                <div class="col2">{{item.date}}</div>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="8" class="box">
                        <div class="box-tile"><i class="el-icon-notebook-2"></i>人大回顾</div>
                        <div class="box-list">
                            <a v-for="item in rendaList" :key="item.id" class="boxrow" v-on:click='GotoPage("renda",item)'>
                                <div class="col1">{{item.title.substring(0,9)}}<span v-if="item.title.length > 9">...</span></div>
                                <div class="col2">{{item.date}}</div>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="8" class="box">
                        <div class="box-tile"><i class="el-icon-notebook-2"></i>优秀党员</div>
                        <div class="box-list">
                            <a v-for="item in dangyuanList" :key="item.id" class="boxrow" v-on:click='GotoPage("dangyuan",item)'>
                                <div class="col1">{{item.title.substring(0,9)}}<span v-if="item.title.length > 9">...</span></div>
                                <div class="col2">{{item.name.substring(0,6)}}</div>
                            </a>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-main>
        <el-main style="height: 100px; background-color: #ddd">
            <div class="clearfix">
                <ul class="someLink">
                    <li><a href="http://www.gov.cn/" style="border-left: none;">人民政府网</a></li>
                    <li><a href="http://www.people.com.cn/">人民网</a></li>
                    <li><a href="https://www.12371.cn/">共产党员网</a></li>
                    <li><a href="http://www.zgdsw.com/">中共党史网</a></li>
                    <li><a href="http://www.gqt.org.cn/">中国共青团网</a></li>
                    <li><a href="https://xuexi.12371.cn/special/dsgs100/">党史故事</a></li>
                </ul>
            </div>
        </el-main>
        <el-footer style="height: 0px;" class="back-black">
            <!--            <div class="clearfix">-->
            <!--                <el-row>-->
            <!--                    <el-col :span="6">Copyright&copy2021 王杨涛</el-col>-->
            <!--                    <el-col :span="6">地址：荆门市象山大道33号</el-col>-->
            <!--                    <el-col :span="6">邮编：448000</el-col>-->
            <!--                    <el-col :span="6">联系：18888888888</el-col>-->
            <!--                </el-row>-->
            <!--            </div>-->
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "mainBody",
        data() {
            return {
                historyList: [],
                rendaList: [],
                dangyuanList: [],
            };
        },

        created() {
            const _this = this;
            axios.get("/dangyuan/getpagelist").then(function (res) {
                _this.$data.dangyuanList = res.data;
            })
            axios.get("/history/getpagelist").then(function (res) {
                _this.$data.historyList = res.data;
            })
            axios.get("/renda/getpagelist").then(function (res) {
                _this.$data.rendaList = res.data;
            })

        },
        methods:{
            GotoPage(type,item){
                this.$router.push({
                    path:"/"+type,
                    name:type,
                    params:{id:item.id-1}
                })
            }
        }
    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    .el-main {
        text-align: left;
    }

    .clearfix {
        width: 1200px;
        margin: 0 auto;
    }

    .h250 {
        height: 400px;
    }

    .back-black {
        background-color: #333333;
        color: #D3DCE6;
        line-height: 50px;
        text-align: center;
    }

    .box {
        padding: 20px;
    }

    .box-tile {
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 2px;
        padding: 20px 0;
        color: #c33;
        border-bottom: #a22 2px solid;
    }

    .box-list {
        padding-top: 10px;
        height: 200px;
    }

    .boxrow {
        font-size: 17px;
        list-style-type: none;
        letter-spacing: 1px;
        line-height: 35px;
        color: #111;
    }

    .col1 {
        width: 200px;
        max-width: 200px;
        float: left;
    }

    .col2{
        width: 120px;
        float: right;
        text-align: right;
    }

    .boxrow:hover {
        color: #d22;
        cursor: pointer;
    }

    .boxrow:first-child{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .someLink {
        height: 100px;
        margin: 0 auto;
    }

    .someLink li {
        float: left;
        list-style-type: none;
    }

    .someLink li a {
        color: #333333;
        font-size: 20px;
        line-height: 100px;
        border-left: #aaa 1px solid;
        padding: 0 50px;
    }
</style>
