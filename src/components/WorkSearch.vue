<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/MonthTask' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>排班管理</el-breadcrumb-item>
      <el-breadcrumb-item>排班查询</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <!-- 查询区域 -->
      <div class="block" style="height:50px">
        <el-date-picker v-model="value2" type="daterange" align="left" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" style="margin-right:10px"></el-date-picker>
        <el-button type="info" plain>重置</el-button>
        <el-button type="info" plain>查询</el-button>
      </div>
      <!-- 显示表格区域 -->
      <el-table :data="tableSearch" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column prop="Date" label="日期" align="center" width="120px" sortable></el-table-column>
        <el-table-column prop="Nature" label="性质" align="center" width="130px"></el-table-column>
        <el-table-column prop="Place" label="工作地点" align="center" width="80px"></el-table-column>
        <el-table-column prop="Content" label="工作内容" align="center"></el-table-column>
        <el-table-column prop="Remarks" label="备注" align="center"></el-table-column>
        <el-table-column prop="Person" label="人员" align="center" width="130px"></el-table-column>
        <el-table-column prop="Details" label="详情" align="center">
          <el-popover placement="top-start" title="详情" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" align="right">
          <el-button type="info" icon="el-icon-message" circle slot="reference"></el-button>
          </el-popover>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px
  }
  .lab1,
  .lab2 {
    padding: 10px;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 20px;
  }
</style>

<script>
export default {
  data () {
    return {
      tableSearch: [{
        Date: '2022-03-01',
        Nature: '巡视工作及其他',
        Place: '西太湖变',
        Content: '巡视3月上、全面巡视',
        Remarks: '查看备用2号主变的支持绝缘子是否是钟罩式，拍个照片。',
        Person: '芦卫明、马鑫',
        Details: '全面巡视（220kV）'
      }, {
        Date: '2022-03-02',
        Nature: '巡视工作及其他',
        Place: '西太湖变',
        Content: '巡视3月上、全面巡视',
        Remarks: '查看备用2号主变的支持绝缘子是否是钟罩式，拍个照片。',
        Person: '芦卫明、马鑫',
        Details: '全面巡视（220kV）'
      }],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value1: '',
      value2: ''
    }
  }
}
</script>

<style>
</style>
