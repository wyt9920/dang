<template>
    <div>
        <div style="margin-top: 15px; width: 95%" >
            <el-input placeholder="请输入需要搜索的内容" v-model="search" class="input-with-select" prefix-icon="el-icon-search"></el-input>
        </div>
        <el-table :data="tableData" style="width:100%">
            <el-table-column prop="uid" label="账号"></el-table-column>
            <el-table-column prop="uname" label="用户名"></el-table-column>
            <el-table-column prop="upsw" label="密码"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'userPage',
        data() {
            return {
                search:'',
                userList: [{
                    uid: '123',
                    upsw:'111',
                    uname:'laowang'
                }]
            }
        },
        created() {
            const _this = this;
            axios.get("/user/findAll").then(function (res) {
                _this.$data.userList = res.data;
            })
        },
        methods:{
            handleEdit(item){
                this.$router.push({
                    path:'/edituser',
                    query:{user: item}
                })

            },
            handleDelete(item){
                //console.log(item);
                const _this = this;
                axios.delete("/user/delete/"+item.uid);
                this.$message({
                    showClose: true,
                    message: '删除成功',
                    type: 'success'
                });
                setTimeout(function (){
                    _this.$router.go(0);
                }, 20);
            }
        },
        computed: {
            tableData() {
                const search = this.search;
                if (search) {
                    return this.userList.filter(data => {
                        return Object.keys(data).some(key => {
                            return String(data[key]).toLowerCase().indexOf(search) > -1
                        })
                    })
                }
                return this.userList;
            }
        }
    }
</script>


<style scoped>

</style>
