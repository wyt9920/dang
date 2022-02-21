<template>
    <div>
        <div style="margin-top: 15px; width: 95%" >
            <el-input placeholder="请输入需要搜索的内容" v-model="search" class="input-with-select" prefix-icon="el-icon-search"></el-input>
        </div>
        <el-table :data="tableData" style="width:100%">
            <el-table-column prop="id" label="编号" width="50px"></el-table-column>
            <el-table-column prop="data" label="题目" width="500px" show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="optiona" label="选项A"></el-table-column>
            <el-table-column prop="optionb" label="选项B"></el-table-column>
            <el-table-column prop="optionc" label="选项C"></el-table-column>
            <el-table-column prop="optiond" label="选项D"></el-table-column>
            <el-table-column prop="answer" label="答案" width="50px"></el-table-column>
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
        name: "testTable",
        data(){
            return{
                search:'',
                subject:[{
                    id:'',
                    data:'',
                    optiona:'',
                    optionb:'',
                    optionc:'',
                    optiond:'',
                    answer:'',
                }]
            }
        },
        created() {
            const _this =this;
            axios.get("/subject/findAll").then(function(res){
                _this.$data.subject = res.data;

            })
        },
        methods:{
            handleEdit(item){
                this.$router.push({
                    path:'/editTest',
                    query:{data: item}
                })
            },
            handleDelete(item){
                const _this = this;
                axios.delete("/subject/"+item.id);
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
                    return this.subject.filter(data => {
                        return Object.keys(data).some(key => {
                            return String(data[key]).toLowerCase().indexOf(search) > -1
                        })
                    })
                }
                return this.subject;
            }
        }
    }
</script>

<style scoped>

</style>
