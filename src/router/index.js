import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index";
import login from "../views/Login"
import regedit from "../views/regedit";
import adminMain from "../components/adminMain";
import UserTable from "../components/UserTable";
import introduce from "../components/introduce";
import mainBody from "../components/mainBody";
import adduser from "../components/adduser";
import partyRules from "../components/partyRules";
import test from "../components/test";
import history from "../components/history";
import renda from "../components/renda";
import dangyuan from "../components/dangyuan";
import editUser from "../components/editUser";
import historyTable from "../components/historyTable";
import addHistory from "../components/addHistory";
import editHistory from "../components/editHistory";
import dangyuanTable from "../components/dangyuanTable";
import addDangyuan from "../components/addDangyuan";
import editDangyuan from "../components/editDangyuan";
import rendaTable from "../components/rendaTable";
import addRenda from "../components/addRenda";
import editRenda from "../components/editRenda";
import testTable from "../components/testTable";
import addTest from "../components/addTest";
import editTest from "../components/editTest";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [{
      path: '/introduce',
      name: 'introduce',
      component: introduce
    },{
      path: '/',
      name: 'main',
      component: mainBody
    },{
      path: '/rules',
      name: 'rules',
      component: partyRules
    },{
      path: '/test',
      name: 'test',
      component: test
    },{
      path: '/history',
      name:'history',
      component: history
    },{
      path: '/renda',
      name: 'renda',
      component: renda
    },{
      path: '/dangyuan',
      name: 'dangyuan',
      component: dangyuan
    }]
  },{
    path: '/login',
    name: 'login',
    component: login
  },{
    path: '/regedit',
    name: 'regedit',
    component: regedit
  },{
    path: '/admin',
    name: 'admin',
    component: adminMain,
    children:[{
      path:'/user',
      name:'user',
      component:UserTable
    },{
      path: '/adduser',
      name: '添加用户',
      component: adduser
    },{
      path: '/edituser',
      name:'edituser',
      component: editUser
    },{
      path: '/historytable',
      name: 'historyTable',
      component: historyTable
    },{
      path: '/addhistory',
      name: 'addhistory',
      component: addHistory
    },{
      path: '/edithistory',
      name:'edithistory',
      component: editHistory
    },{
      path: '/dangyuantable',
      name:'dangyuantable',
      component: dangyuanTable
    },{
      path: '/adddangyuan',
      name: 'adddangyuan',
      component: addDangyuan
    },{
      path: '/editdangyuan',
      name: 'editdangyuan',
      component: editDangyuan
    },{
      path: '/rendatable',
      name: 'rendatable',
      component: rendaTable
    },{
      path: '/addrenda',
      name: 'addrenda',
      component: addRenda
    },{
      path: '/editrenda',
      name: 'editrenda',
      component: editRenda
    },{
      path: '/testtable',
      name:'testtable',
      component: testTable
    },{
      path: '/addtest',
      name: 'addtest',
      component: addTest
    },{
      path: '/edittest',
      name: 'edittest',
      component: editTest
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
