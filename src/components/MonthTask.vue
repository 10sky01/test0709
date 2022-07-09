<template>
    <el-container class="home-container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="../assets/img/GridState.png" alt="">
                <span>排班管理系统</span>
            </div>
        </el-header>
        <!-- 页面主体区域 -->
        <el-container style="height: 150px; border: 1px solid #333744">
            <!-- 侧边栏 -->
            <el-aside :width="isCollapse ? '64px':'200px'">
                <div class="toggle-button" @click="toggleCollapse">|||</div>
                <!-- 侧边栏菜单区域 -->
                <el-menu background-color="#333744" text-color="#fff" active-text-color="#409eff"
                    :collapse-transition="false" unique-opened :collapse="isCollapse" router default-active=activePath>
                    <!--一级菜单1-->
                    <el-submenu index="1">
                        <!--一级菜单模板-->
                        <template slot="title">
                            <i class="el-icon-user-solid"></i>
                            <span>人员信息</span>
                        </template>
                        <!--二级菜单-->
                        <el-menu-item index="AddUser">
                            <i class="el-icon-menu"></i>
                            <span slot="title">添加人员</span>
                        </el-menu-item>
                        <el-menu-item index="UserList" @click="saveNavState('/'+subItem.path)">
                            <i class="el-icon-menu"></i>
                            <span slot="title">人员列表</span>
                        </el-menu-item>
                    </el-submenu>
                    <!--一级菜单2-->
                    <el-submenu index="2">
                        <!--一级菜单模板-->
                        <template slot="title">
                            <i class="el-icon-s-management"></i>
                            <span>班组管理</span>
                        </template>
                        <!--二级菜单-->
                        <el-menu-item index="2-1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">人员信息表</span>
                        </el-menu-item>
                        <el-menu-item index="2-2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">变电站管理</span>
                        </el-menu-item>
                        <el-menu-item index="ScoreRules" @click="saveNavState('/'+subItem.path)">
                            <i class="el-icon-menu"></i>
                            <span slot="title">积分规则</span>
                        </el-menu-item>
                        <el-menu-item index="PatrolRules" @click="saveNavState('/'+subItem.path)">
                            <i class="el-icon-menu"></i>
                            <span slot="title">巡视规则</span>
                        </el-menu-item>
                        <el-menu-item index="2-5">
                            <i class="el-icon-menu"></i>
                            <span slot="title">值班规则</span>
                        </el-menu-item>
                    </el-submenu>
                    <!--一级菜单3-->
                    <el-submenu index="3">
                        <!--一级菜单模板-->
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>月度排班</span>
                        </template>
                        <!--二级菜单-->
                        <el-menu-item index="3-1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">月度工作计划表</span>
                        </el-menu-item>
                        <el-menu-item index="3-2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">月度人员值班表</span>
                        </el-menu-item>
                        <el-menu-item index="3-3">
                            <i class="el-icon-menu"></i>
                            <span slot="title">月度排班表</span>
                        </el-menu-item>
                    </el-submenu>
                    <!--一级菜单2-->
                    <el-submenu index="4">
                        <!--一级菜单模板-->
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>数据导入</span>
                        </template>
                        <!--二级菜单-->
                        <el-menu-item index="4-1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">巡视计划</span>
                        </el-menu-item>
                        <el-menu-item index="4-2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">市调停电计划</span>
                        </el-menu-item>
                        <el-menu-item index="4-3">
                            <i class="el-icon-menu"></i>
                            <span slot="title">配调停电计划</span>
                        </el-menu-item>
                        <el-menu-item index="4-4">
                            <i class="el-icon-menu"></i>
                            <span slot="title">市调检修计划</span>
                        </el-menu-item>
                        <el-menu-item index="4-5">
                            <i class="el-icon-menu"></i>
                            <span slot="title">配调检修计划</span>
                        </el-menu-item>
                        <el-menu-item index="4-6">
                            <i class="el-icon-menu"></i>
                            <span slot="title">操作票导入</span>
                        </el-menu-item>
                        <el-menu-item index="4-7">
                            <i class="el-icon-menu"></i>
                            <span slot="title">工作票导入</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!-- 右侧内容主体 -->
            <el-main>
                <router-view></router-view>
                <div>
                    <h1>2022年7月工作计划</h1>
                </div>
                <template>
                    <el-tabs v-model="activeName" type="border-card" @tab-click="handleTabsClick">
                        <el-tab-pane label="当月工作计划" name="CurrentMonth">
                            <!-- 当月计划表单 -->
                            <el-table :data="tableData" stripe style="width: 100%" border>
                                <el-table-column type="index"></el-table-column>
                                <el-table-column prop="TaskDate" label="日期" width="100"></el-table-column>
                                <el-table-column prop="TingdianPlace" label="停电场所" width="80"></el-table-column>
                                <el-table-column prop="XunshiPlace" label="巡视地点" width="80"></el-table-column>
                                <el-table-column prop="VoltageLevel" label="电压等级" width="80"></el-table-column>
                                <el-table-column prop="TingdianRange" label="停电范围" width="280"></el-table-column>
                                <el-table-column prop="XunshiNeirong" label="巡视内容"></el-table-column>
                                <el-table-column prop="TingdianBeginTime" label="停电开始时间" width="140"></el-table-column>
                                <el-table-column prop="TingdianEndTime" label="停电结束时间" width="140"></el-table-column>
                                <el-table-column label="操作" width="100">
                                    <template slot-scope="scope">
                                        <el-tooltip content="编辑" placement="top" effect="light">
                                            <el-button type="primary" icon="el-icon-edit" circle size="mini"
                                                @click="showUserDialog(scope.row.PeopleNo, scope.row.name, scope.row.Sex, scope.row.Birth, scope.row.Position, scope.row.SkillLevel)">
                                            </el-button>
                                        </el-tooltip>
                                        <el-tooltip content="详情" placement="top" effect="light">
                                            <el-button type="success" icon="el-icon-notebook-2" circle size="mini">
                                            </el-button>
                                        </el-tooltip>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="下月工作计划" name="NextMonth">
                            <!-- 下月计划表单 -->
                            <el-table :data="tableData" stripe style="width: 100%" border>
                                <el-table-column type="index"></el-table-column>
                                <el-table-column prop="TaskDate" label="日期" width="100"></el-table-column>
                                <el-table-column prop="TingdianPlace" label="停电场所" width="80"></el-table-column>
                                <el-table-column prop="XunshiPlace" label="巡视地点" width="80"></el-table-column>
                                <el-table-column prop="VoltageLevel" label="电压等级" width="80"></el-table-column>
                                <el-table-column prop="TingdianRange" label="停电范围" width="280"></el-table-column>
                                <el-table-column prop="XunshiNeirong" label="巡视内容"></el-table-column>
                                <el-table-column prop="TingdianBeginTime" label="停电开始时间" width="140"></el-table-column>
                                <el-table-column prop="TingdianEndTime" label="停电结束时间" width="140"></el-table-column>
                                <el-table-column label="操作" width="100">
                                    <template>
                                        <el-tooltip content="编辑" placement="top" effect="light">
                                            <el-button type="primary" icon="el-icon-edit" circle size="mini"
                                                @click="showUserDialog(scope.row.PeopleNo, scope.row.name, scope.row.Sex, scope.row.Birth, scope.row.Position, scope.row.SkillLevel)">
                                            </el-button>
                                        </el-tooltip>
                                        <el-tooltip content="详情" placement="top" effect="light">
                                            <el-button type="success" icon="el-icon-notebook-2" circle size="mini">
                                            </el-button>
                                        </el-tooltip>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                    </el-tabs>
                </template>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
      // 左侧菜单栏是否折叠
      isCollapse: false,
      activePath: '',
      //   表单数据
      tableData: [{
        TaskDate: '2002-07-01',
        TingdianPlace: '运村变',
        XunshiPlace: '',
        VoltageLevel: '220 kV',
        TingdianRange: '旧周线714开关检修；旧周7909线检修',
        XunshiNeirong: '',
        TingdianBeginTime: '2022-07-01 08:00',
        TingdianEndTime: '2022-07-01 18:00'
      },
      {
        TaskDate: '2002-07-02',
        TingdianPlace: '',
        XunshiPlace: '运村变',
        VoltageLevel: '220 kV',
        TingdianRange: '',
        XunshiNeirong: '熄灯巡视、红外测温',
        TingdianBeginTime: '',
        TingdianEndTime: ''
      }],
      //   Tabs标签
      activeName: 'CurrentMonth'
    }
  },
  methods: {
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
    },
    handleTabsClick () {
    }
  },
  created () {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activPath')
  }
}
</script>

<style lang="less" scoped>
.home-container {
    height: 100%;
}
.el-header {
    background-color: #373D41;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    align-items: center;
    font-size: 25px;
    color: #fff;
    div {
        display: flex;
        align-items: center;
    }
    span {
        margin-left: 15px;
        user-select: non;
    }
    img {
            width: 15%;
            height: 100%;
            background-color: #eee;
    }
}
.el-aside{
    background-color:#333744;
    .el-menu {
        border-right: none;
    }
    .toggle-button {
        background-color: #4a5064;
        font-size: 10px;
        line-height: 34px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.4em;
    }
}
.el-main{
    background-color:#eaedf1;
}
</style>
