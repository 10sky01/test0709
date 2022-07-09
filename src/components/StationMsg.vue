<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/MonthTask' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>变电站信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <!-- 搜索 添加人员区域 -->
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input placeholder="请输入搜索变电站名称">
                        <el-button slot="append" icon="el-icon-search"> </el-button>
                    </el-input>
                </el-col>
            </el-row>
      <!-- 表单区域 -->
      <el-table :data="tableData" stripe style="width: 100%" border>
        <el-table-column width="50px" type="index" align="center"></el-table-column>
        <el-table-column prop="StationName" label="变电站名称" align="center"></el-table-column>
        <el-table-column prop="VoltageClass" label="电压等级" align="center"></el-table-column>
        <el-table-column prop="Address" label="地址" align="center"></el-table-column>
        <el-table-column label="线路" align="center" >
            <template slot-scope="scope">
                <a @mouseover="page1" @click="page2" style="text-decoration:underline">{{scope.row.Line}}</a>
            </template>
        </el-table-column>
        <el-table-column prop="Switch" label="开关" align="center">
            <template slot-scope="scope">
                <a @mouseenter="page3" @click="page4" style="text-decoration:underline">{{scope.row.Switch}}</a>
            </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 线路小页面区 -->
    <el-dialog title="具体线路信息" :visible.sync="editDialogVible1" width="40%">
        <el-table :data="List1" stripe style="width: 100%" border>
            <el-table-column width="50px" type="index" align="center"></el-table-column>
            <el-table-column prop="dName" label="电路名称" align="center"></el-table-column>
            <el-table-column prop="lcode" label="线路编号" align="center"></el-table-column>
            <el-table-column prop="degree" label="电压等级" align="center"></el-table-column>
        </el-table>
    </el-dialog>
    <!-- 线路小页面区 -->
    <el-dialog title="具体开关信息" :visible.sync="editDialogVible2" width="40%">
        <el-table :data="List2" stripe style="width: 100%" border>
            <el-table-column width="50px" type="index" align="center"></el-table-column>
            <el-table-column prop="switch" label="开关名称" align="center"></el-table-column>
            <el-table-column prop="line" label="线路名称" align="center"></el-table-column>
        </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        StationName: '西太湖变',
        VoltageClass: '220',
        Address: '西太湖',
        Line: '旧周线',
        Switch: '714开关'
      }, {
        StationName: '西太湖变',
        VoltageClass: '220',
        Address: '新北区',
        Line: '旧周线',
        Switch: '714开关'
      }],
      List1: [{
        dName: '顺西线1109',
        lcode: '1109',
        degree: '110kV'
      }, {
        dName: '顺西线1109',
        lcode: '1109',
        degree: '110kV'
      }],
      List2: [{
        switch: '714开关',
        line: '旧周线'
      }, {
        switch: '714开关',
        line: '旧周线'
      }],
      editDialogVible1: false,
      editDialogVible2: false
    }
  },
  methods: {
    page1 () {
      this.editDialogVible1 = true
    },
    page2 () {
      this.editDialogVible1 = false
    },
    page3 () {
      this.editDialogVible2 = true
    },
    page4 () {
      this.editDialogVible2 = false
    }
  }
}
</script>

<style lang="less" scoped>
.el-card {
    background-color: #fff;
    box-shadow: 0 1px rgba(0, 0, 0, 0.15) !important;
}
.el-table {
    margin-top: 15px;
}
</style>
