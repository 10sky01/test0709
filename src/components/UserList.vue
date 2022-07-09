<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/MonthTask' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>人员信息</el-breadcrumb-item>
            <el-breadcrumb-item>人员列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片视图区 -->
        <el-card>
            <!-- 搜索 添加人员区域 -->
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input placeholder="请输入搜索人员姓名">
                        <el-button slot="append" icon="el-icon-search"> </el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">添加人员</el-button>
                </el-col>
            </el-row>
            <!-- 表单 -->
            <el-table :data="tableData" stripe style="width: 100%" border>
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="PeopleNo" label="工号" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="Sex" label="性别"></el-table-column>
                <el-table-column prop="Birth" label="出生年月"></el-table-column>
                <el-table-column prop="Position" label="职务"></el-table-column>
                <el-table-column prop="SkillLevel" label="技能等级"></el-table-column>
                <el-table-column label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" circle size="mini"
                            @click="showUserDialog(scope.row.PeopleNo, scope.row.name, scope.row.Sex, scope.row.Birth, scope.row.Position, scope.row.SkillLevel)">
                        </el-button>
                        <el-button type="danger" icon="el-icon-delete" circle size="mini"></el-button>
                    </template>
                </el-table-column>
            </el-table>

        </el-card>
        <!-- 编辑用户信息对话框 -->
        <el-dialog title="修改用户" :visible.sync="editDialogVible" width="50%">
            <el-form :model="editForm" label-width="70px">
                <el-form-item label="工号">
                    <el-input v-model="editForm.PeopleNo" disabled></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="editForm.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="editForm.Sex" placeholder="请选择" size="medium">
                        <el-option v-for="item in Sexoptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出生年月">
                    <el-select placeholder="">
                        <el-date-picker v-model="editForm.Birth" type="month" placeholder="选择月" >
                        </el-date-picker>
                    </el-select>
                </el-form-item>
                <el-form-item label="职务">
                    <el-input v-model="editForm.Position"></el-input>
                </el-form-item>
                <el-form-item label="技能等级">
                    <el-input v-model="editForm.SkillLevel"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editDialogVible = false">取 消</el-button>
                <el-button type="primary" @click="editDialogVible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // 左侧菜单栏是否折叠
      tableData: [{
        PeopleNo: '1001',
        name: '张三',
        Sex: '男',
        Birth: '1986-11',
        Position: '班长',
        SkillLevel: '正职A'
      },
      {
        PeopleNo: '1002',
        name: '李四',
        Sex: '男',
        Birth: '1985-11',
        Position: '班员',
        SkillLevel: '副职A'
      }],
      editForm: {
        PeopleNo: '1001',
        name: '张三',
        Sex: '男',
        Birth: '1986-11',
        Position: '班长',
        SkillLevel: '正值A'
      },
      //   控制修改用户对话框的修改与隐藏
      editDialogVible: false,
      //   date picker
      DatePickerMonth: '',
      Sexoptions: [{
        value: '选项1',
        label: '男'
      }, {
        value: '选项2',
        label: '女'
      }],
      SexValue: '男'
    }
  },
  methods: {
    async showUserDialog (id1, id2, id3, id4, id5) {
      console.log(id1, id2, id3, id4, id5)
      this.editDialogVible = true
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
