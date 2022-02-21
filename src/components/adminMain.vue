<template>
    <el-container class="home-container">
        <el-header style="font-size: 12px">
            <div>
                <span>网站后台管理</span>
            </div>
            <el-button plain @click="back">退出</el-button>
        </el-header>
        <el-container>
            <el-aside width="300px">
                <el-menu :default-openeds="['1','2','3','4','5']">

                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>用户管理</template>
                        <router-link to="/user">
                            <el-menu-item>用户表</el-menu-item>
                        </router-link>
                        <router-link to="/adduser">
                            <el-menu-item>新增用户</el-menu-item>
                        </router-link>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>党史管理</template>
                        <router-link to="/historytable">
                            <el-menu-item>党史表</el-menu-item>
                        </router-link>
                        <router-link to="/addhistory">
                            <el-menu-item>新增党史信息</el-menu-item>
                        </router-link>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>优秀党员管理</template>
                        <router-link to="/dangyuantable">
                            <el-menu-item>优秀党员</el-menu-item>
                        </router-link>
                        <router-link to="/adddangyuan">
                            <el-menu-item>新增优秀党员</el-menu-item>
                        </router-link>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-setting"></i>人大信息管理</template>
                        <router-link to="/rendatable">
                            <el-menu-item>人大信息</el-menu-item>
                        </router-link>
                        <router-link to="/addrenda">
                            <el-menu-item>新增信息</el-menu-item>
                        </router-link>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-setting"></i>题目信息管理</template>
                        <router-link to="/testtable">
                            <el-menu-item>题库信息</el-menu-item>
                        </router-link>
                        <router-link to="/addtest">
                            <el-menu-item>新增题目</el-menu-item>
                        </router-link>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>
<style scoped>
    .home-container {
        height: 100%;
    }

    .el-header {
        background-color: #409EFF;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: #fff;
        font-size: 50px;
    }

    .el-header div {
        font-size: 20px;
        line-height: 50px;
        padding-left: 80px;
    }

    .el-aside {
        border-right: 1px solid #eee;
    }

    .el-submenu {
        line-height: 80px;
    }
</style>

<script>
    export default {
        name:'admin',
        data() {
            return {}
        },
        methods:{
            back(){
                this.$router.push("/");
            }
        }
    };
</script>
