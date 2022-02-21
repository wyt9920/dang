<template>
    <el-container>
        <el-header style="height: 40px;">
            <div class="clearfix">
                <h4 class="idxlogo"><a href="../"><i class="el-icon-s-home"></i>&nbsp;网站主页</a></h4>
                <div class="idxuser">
                    <div v-if="!login" id="online">
                        <a href="/login">登录</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a href="/regedit">注册</a>
                    </div>
                    <div v-if="login" id="outline">
                        <a>欢迎你,{{user}}</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a v-on:click="logout" >退出</a>
                    </div>
                </div>
            </div>
        </el-header>
        <el-main class="idxbanner" style="height: 150px;">
            <div class="clearfix">
<!--                <div class="idxsearch">-->
<!--                    <el-input placeholder="请输入搜索内容" v-model="search" class="input-with-select">-->
<!--                        <el-button slot="append" icon="el-icon-search"></el-button>-->
<!--                    </el-input>-->
<!--                </div>-->
            </div>
        </el-main>
        <el-main style="height: 60px;">
            <div class="clearfix idxnav">
                <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                         background-color="#fff" text-color="#333" active-text-color="#d33">
                    <el-menu-item index="1">
                        <router-link to="/introduce">党的介绍</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link to="/rules">党规党章</router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <router-link to="/history">党史介绍</router-link>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <router-link to="/renda">人大回顾</router-link>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <router-link to="/dangyuan">优秀党员</router-link>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <router-link to="/test">知识答题</router-link>
                    </el-menu-item>
                </el-menu>
            </div>
        </el-main>
        <el-main class="box">
            <router-view/>
        </el-main>
        <mian-foot></mian-foot>
    </el-container>
</template>

<script>
    import MianFoot from "../components/mianFoot";

    export default {
        name: "mainTitle",
        components: {MianFoot},
        data() {
            return {
                user: '',
                search: '',
                login:false,
            };
        },
        created() {
            if(sessionStorage.getItem("login") == 'true'){
                this.$data.user = sessionStorage.getItem('name');
                this.$data.login = true;
            }
        },
        methods:{
            logout(){
                sessionStorage.clear();
                setTimeout(()=>{
                    this.$data.login = false;
                    this.$data.user = '';
                    this.$router.push('/');
                },2);
            }
        }
    }
</script>

<style scoped>
    .clearfix {
        width: 1200px;
        margin: 0 auto;
    }

    .idxlogo {
        color: #555;
        float: left;
    }

    .idxuser {
        float: right;
        letter-spacing: 2px;
    }

    .box{
        min-height: 626px;
    }
    .idxuser a {
        color: #555;
        font-weight: bold;
    }

    .idxuser a:hover {
        color: #aaa;
        font-weight: bold;
    }

    .el-header, .el-footer {
        background-color: white;
        text-align: center;
        line-height: 40px;
    }

    .idxbanner {
        background-image: url("../assets/banner.png");
    }

    .idxsearch {
        width: 350px;
        line-height: 150px;
        float: right;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
    }

    .el-main {
        padding: 0;
        color: #333;
        text-align: center;
    }

    .el-menu-item {
        width: 200px;
        font-size: 20px;
        letter-spacing: 2px;
        font-weight: bold;
    }
</style>
