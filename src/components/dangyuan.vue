<template>
    <el-card class="box-card">
        <el-container>
            <el-aside width="200px">
                <div class="listTitle">优秀党员</div>
                <ul class="titleList">
                    <li v-for="(item,index) in dataList" :key="index"  v-on:click="changePage(index)">
                        <a>{{item.name}}</a>
                    </li>
                </ul>
            </el-aside>
            <el-main>
                <div class="title">{{dataList[id].title}}</div>
                <div class="mark"></div>
                <div class="msg">{{dataList[id].data}}</div>
            </el-main>
        </el-container>
    </el-card>
</template>

<script>
    export default {
        name: "dangyuan",
        data() {
            return {
                id: 2,
                dataList: [],
            }
        },
        methods:{
            changePage(index){
                this.$data.id = index;
            }
        },
        created() {
            let _this = this;
            if (this.$route.params.id) {
                this.$data.id = this.$route.params.id;
            }
            axios.get("/dangyuan/findAll").then(function (res) {
                _this.$data.dataList = res.data;
                console.log(_this.$data.dataList);
            })
        }
    }
</script>

<style scoped>
    .box-card {
        border-top: 1px solid #eee;
        min-height: 600px;
    }

    .listTitle{
        background-color: #aa2222;
        color: white;
        font-size: 20px;
        font-weight: bold;
        padding: 10px 0;
        width: 193px;
    }

    .el-container {
        margin: 0 auto;
        width: 1200px;
    }
    .titleList li a {
        cursor: pointer;
    }
    .box-body {
        margin: 0 auto;
        width: 1200px;
    }

    .el-aside {
        height: 626px;
        width: 150px;
    }

    .el-main {
        height: 626px;
        width: 1000px;
        padding: 20px;
    }

    .titleList li{
        height: 40px;
        width: 180px;
        line-height: 40px;
        text-align: left;
        padding-left: 10px;
        border-left: rgba(0,0,0,0) 3px solid;
        border-bottom: #eee 1px solid;
    }

    .titleList li:hover{
        border-left: #aa2222 3px solid;
        background-color: #eee;
    }

    .title {
        font-size: 30px;
        letter-spacing: 3px;
        font-weight: bold;

    }

    .mark {
        font-size: 10px;
        color: #555555;
        padding: 20px 0;
    }

    .msg {
        text-align: left;
        line-height: 30px;
        text-indent: 40px;
    }

</style>
