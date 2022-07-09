<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/MonthTask' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>班组管理</el-breadcrumb-item>
      <el-breadcrumb-item>积分规则</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <el-row :gutter="20">
          <el-col :span="8">
              <el-input placeholder="请输入操作名称">
                  <el-button slot="append" icon="el-icon-search"> </el-button>
              </el-input>
          </el-col>
        </el-row>
      <!-- 表单区域 -->
      <el-table :data="tableData" stripe style="width: 100%" border>
        <el-table-column width="50px" type="index" align="center"></el-table-column>
        <el-table-column prop="DoName" label="操作名称" align="center"></el-table-column>
        <el-table-column width="50px" prop="Scores" label="分数" align="center"></el-table-column>
        <el-table-column  prop="Explain" label="说明" align="center"></el-table-column>
        <el-table-column width="110px" prop="JobCategory" label="对应工作类别" align="center"></el-table-column>
        <el-table-column width="135px" prop="Single" label="单人、单项目类别" align="center"></el-table-column>
        <el-table-column label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" circle size="mini"
              @click="showUserDialog(scope.row.DoName, scope.row.Scores, scope.row.Explain, scope.row.JobCategory, scope.row.Single,scope.$index)">
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 编辑信息对话框 -->
    <el-dialog title="修改积分规则" :visible.sync="editDialogVible" width="50%">
      <el-form :model="editForm" label-width="70px">
        <el-form-item label="操作名称">
        <el-input v-model="this.tableData[this.index].DoName" disabled></el-input>
      </el-form-item>
         <el-form-item label="分数">
              <el-input v-model="editForm.Scores" ref="scores" ></el-input>
          </el-form-item>
          <el-form-item label="说明">
              <el-input v-model="editForm.Explain" type="textarea" ref="explain"></el-input>
          </el-form-item>
          <el-form-item label="工作类别">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                ref="jobcategory">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="单类别">
              <el-input v-model="editForm.Single" ref="single"></el-input>
          </el-form-item>
        </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVible = false">取 消</el-button>
        <el-button type="primary" @click="ChanGe">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          DoName: '倒闸操作',
          Scores: '0.2',
          Explain: '分/步；包括安措票',
          JobCategory: '倒闸操作',
          Single: ''
        },
        {
          DoName: '处理一般缺陷及异常（白天）',
          Scores: '4',
          Explain:
            '分/个；总分；班组定性；夜晚为监控通知时间为早于早上5点工作结束时间晚于24点',
          JobCategory: '工作项其他',
          Single: '1'
        }
      ],
      editForm: {
        Scores: '',
        Explain: '',
        JobCategory: '',
        Single: ''
      },
      //   控制修改用户对话框的修改与隐藏
      editDialogVible: false,
      //   date picker
      options: [{
        value: '选项1',
        label: '倒闸操作'
      }, {
        value: '选项2',
        label: '处理一般缺陷及异常（白天）'
      }],
      value: '',
      index: 0
    }
  },
  methods: {
    async showUserDialog (id1, id2, id3, id4, id5, index1) {
      console.log(id1, id2, id3, id4, id5, index1, this.index)
      this.index = index1 * 1
      this.editForm.Scores = this.tableData[this.index].Scores
      this.editForm.Explain = this.tableData[this.index].Explain
      this.editForm.Single = this.tableData[this.index].Single
      this.editDialogVible = true
    },
    ChanGe () {
      console.log(this.tableData[this.index].DoName)
      this.tableData[this.index].Scores = this.$refs.scores.value
      this.tableData[this.index].Explain = this.$refs.explain.value
      this.tableData[this.index].Single = this.$refs.single.value
      this.editForm.Scores = this.tableData[this.index].Scores
      this.editForm.Explain = this.tableData[this.index].Explain
      this.editForm.Single = this.tableData[this.index].Single
      // this.tableData[0].JobCategory = this.$refs.jobcategory.value
      this.editDialogVible = false
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
