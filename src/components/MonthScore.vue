<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/MonthTask' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>积分统计</el-breadcrumb-item>
            <el-breadcrumb-item>月度积分表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片视图区 -->
        <el-card shadow="always" :body-style="{ padding: '20px' }">
            <div class="block" style="height:55px">
                <span class="demonstration">请选择需要查询积分的月份：</span>
                <el-date-picker v-model="value2" type="month" placeholder="选择月" format="yyyy 年 MM 月"></el-date-picker>
            </div>
             <!-- 显示积分区 -->
            <el-table :data="tableData" stripe style="width: 100%" border>
                <el-table-column width="50px" type="index" align="center"></el-table-column>
                <el-table-column width="120px" prop="Year" label="年份" align="center"></el-table-column>
                <el-table-column width="120px" prop="Month" label="月份" align="center"></el-table-column>
                <el-table-column width="120px" prop="JobNumber" label="工号" align="center"></el-table-column>
                <el-table-column width="120px" prop="Person" label="人员" align="center"></el-table-column>
                <el-table-column width="120px" prop="DoScores" label="操作票积分" align="center"></el-table-column>
                <el-table-column width="120px" prop="WorkScores" label="工作票积分" align="center"></el-table-column>
                <el-table-column width="120px" prop="WatchScores" label="巡视积分" align="center"></el-table-column>
                <el-table-column width="120px" prop="Athers" label="工作项其他积分" align="center"></el-table-column>
                <el-table-column width="120px" prop="NotWork" label="非专业积分" align="center"></el-table-column>
                <el-table-column width="120px" prop="Reward" label="奖励积分" align="center"></el-table-column>
                <el-table-column width="120px" prop="Sum" label="总计" align="center"></el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      /* 列表内容 */
      tableData: [
        {
          Year: '2022',
          Month: '03',
          JobNumber: '1001',
          Person: '何海峰',
          DoScores: '76',
          WorkScores: '0',
          WatchScores: '35.5',
          Athers: '0',
          NotWork: '37',
          Reward: '0',
          Sum: '148.5'
        }, {
          Year: '2022',
          Month: '03',
          JobNumber: '1001',
          Person: '何海峰',
          DoScores: '76',
          WorkScores: '0',
          WatchScores: '35.5',
          Athers: '0',
          NotWork: '37',
          Reward: '0',
          Sum: '148.5'
        }]
    }
  }
}
</script>
