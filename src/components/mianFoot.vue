<template>
    <el-container>
        <el-footer style="height: 50px;" class="back-black">
            <div class="clearfix">
                <el-row>
                    <el-col :span="6">Copyright&copy2021 王杨涛</el-col>
                    <el-col :span="6">地址：荆门市象山大道33号</el-col>
                    <el-col :span="6">邮编：448000</el-col>
                    <el-col :span="6">联系：18888888888</el-col>
                </el-row>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "mianFoot"
    }
</script>

<style scoped>
    .clearfix {
        width: 1200px;
        margin: 0 auto;
    }

    .back-black {
        background-color: #333333;
        color: #D3DCE6;
        line-height: 50px;
        text-align: center;
    }
</style>
