<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/MonthTask' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新增工作任务</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 具体内容 -->
        <el-tabs v-model="activeName" @tab-click="handleClick" style="margin:20px" type="border-card">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="工作性质">
                    <el-select v-model="form.work" placeholder="请选择工作性质">
                        <el-option label="性质一" value="shanghai"></el-option>
                        <el-option label="性质二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="工作地点">
                    <el-select v-model="form.place" placeholder="请选择活动区域">
                        <el-option label="地点一" value="shanghai"></el-option>
                        <el-option label="地点二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="工作内容">
                    <el-input type="textarea" v-model="form.text"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.add"></el-input>
                </el-form-item>
                <el-form-item label="人员">
                    <el-select v-model="form.people" multiple placeholder="请选择人员">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="类型">
                    <el-select v-model="form.style" placeholder="请选择活动类型">
                        <el-option label="类型一" value="shanghai"></el-option>
                        <el-option label="类型二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="积分">
                    <el-input type="text" v-model="form.score"></el-input>
                </el-form-item>
                 <el-form-item>
                    <el-button type="info" plain @click="submitForm('form')">确定</el-button>
                    <el-button type="info" plain @click="resetForm('form')">取消</el-button>
                </el-form-item>
            </el-form>
        </el-tabs>
    </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        work: '',
        place: '',
        text: '',
        add: '',
        people: '',
        style: '',
        score: ''
      },
      /* 人员信息 */
      options: [{
        value: '选项1',
        label: '张三'
      }, {
        value: '选项2',
        label: '李四'
      }, {
        value: '选项3',
        label: '王五'
      }, {
        value: '选项4',
        label: '小明'
      }],
      value: ''
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.form = ''
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.form = ''
    }
  }
}
</script>
