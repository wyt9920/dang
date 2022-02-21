<template>
    <div>
        <div style="margin-top: 15px; width: 95%" >
            <el-input placeholder="请输入需要搜索的内容" v-model="search" class="input-with-select" prefix-icon="el-icon-search"></el-input>
        </div>
        <el-table :data="tableData" style="width:100%">
            <el-table-column prop="id" label="编号" width="150px"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="date" label="时间" ></el-table-column>
            <el-table-column prop="data" show-overflow-tooltip="true" label="内容" width="800px"></el-table-column>
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
        name: "historyTable",
        data(){
            return {
                search:'',
                historyList:[
                    {
                        id:'',
                        title:'',
                        date:'',
                        data:''
                    }
                ]
            }
        },
        created() {
            const _this =this;
            axios.get("http://192.168.3.7:8181/history/findAll").then(function(res){
                _this.$data.historyList = res.data;
            })
        },
        methods:{
            handleEdit(item){
                this.$router.push({
                    path:'/edithistory',
                    query:{data: item}
                })
            },
            handleDelete(item){
                const _this = this;
                axios.delete("/history/"+item.id);
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
        computed:{
            tableData(){
                const search=this.search;
                if(search){
                    return this.historyList.filter(data => {
                        return Object.keys(data).some(key => {
                            return String(data[key]).toLowerCase().indexOf(search) > -1
                        })
                    })
                }
                return this.historyList;
            }
        }
    }
</script>

<style scoped>

</style>
