<template>
  <div id="app">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/MonthTask' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>班组管理</el-breadcrumb-item>
      <el-breadcrumb-item>巡视规则</el-breadcrumb-item>
    </el-breadcrumb>
  <!-- 卡片视图区 -->
    <el-tabs v-model="activeName" @tab-click="handleClick" style="margin:20px" type="border-card">
      <el-tab-pane label="例行巡视规则" name="first" >
      <!--使用draggable组件-->
      <div class="itxst">
      <!-- 元素盒子 -->
      <div class="col people" style="position:fixed;right:70px">
          <div class="title" >请选择需要例行巡视的变电站：
            <el-button type="info" plain @click="click1">生成巡视计划</el-button>
          </div>
         <draggable v-model="arrf" :group="group"  animation="300" dragClass="dragClass"         ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
             <div class="item peo" v-for="item in arrf" :key="item.id" >{{item.name}}</div>
            </transition-group>
        </draggable>
      </div>
      <!-- 分组14个 -->
      <div class="gro">
      <div  class="col group">
        <div class="title" style="float:left">分组1</div>
        <draggable v-model="arrf1" :group="group1" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
          <transition-group :style="style">
            <div class="item gro" v-for="item in arrf1" :key="item.id" >{{item.name}}</div>
          </transition-group>
        </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组2</div>
        <draggable v-model="arrf2" :group="group2" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
          <transition-group :style="style">
            <div class="item gro" v-for="item in arrf2" :key="item.id">{{item.name}}</div>
          </transition-group>
        </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组3</div>
          <draggable v-model="arrf3" :group="group3" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrf3" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组4</div>
          <draggable v-model="arrf4" :group="group4" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrf4" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组5</div>
          <draggable v-model="arrf5" :group="group5" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrf5" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组6</div>
          <draggable v-model="arrf6" :group="group6" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrf6" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组7</div>
          <draggable v-model="arrf7" :group="group7" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrf7" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组8</div>
          <draggable v-model="arrf8" :group="group8" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrf8" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组9</div>
          <draggable v-model="arrf9" :group="group9" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrf9" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组10</div>
          <draggable v-model="arrf10" :group="group10" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrf10" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组10</div>
          <draggable v-model="arrf11" :group="group11" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrf11" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组12</div>
          <draggable v-model="arrf12" :group="group12" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrf12" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组13</div>
          <draggable v-model="arrf13" :group="group13" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrf13" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组14</div>
          <draggable v-model="arrf14" :group="group14" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrf14" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
    </div>
    <!-- 分组结束 -->
    </div>
    </el-tab-pane>
    <el-tab-pane label="夜间巡视规则" name="second">
      <div class="itxst">
      <!-- 元素盒子 -->
      <div class="col people" style="position:fixed;right:70px">
          <div class="title" >请选择需要夜间巡视的变电站：
            <el-button type="info" plain @click="click2">生成巡视计划</el-button>
          </div>
         <draggable v-model="arrs" :group="group"  animation="300" dragClass="dragClass"         ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
             <div class="item peo" v-for="item in arrs" :key="item.id" >{{item.name}}</div>
            </transition-group>
        </draggable>
      </div>
      <!-- 分组14个 -->
      <div class="gro">
      <div  class="col group">
        <div class="title" style="float:left">分组1</div>
        <draggable v-model="arrs1" :group="group1" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
          <transition-group :style="style">
            <div class="item gro" v-for="item in arrs1" :key="item.id" >{{item.name}}</div>
          </transition-group>
        </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组2</div>
        <draggable v-model="arrs2" :group="group2" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
          <transition-group :style="style">
            <div class="item gro" v-for="item in arrs2" :key="item.id">{{item.name}}</div>
          </transition-group>
        </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组3</div>
          <draggable v-model="arrs3" :group="group3" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrs3" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组4</div>
          <draggable v-model="arrs4" :group="group4" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrs4" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组5</div>
          <draggable v-model="arrs5" :group="group5" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrs5" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组6</div>
          <draggable v-model="arrs6" :group="group6" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrs6" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组7</div>
          <draggable v-model="arrs7" :group="group7" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrs7" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组8</div>
          <draggable v-model="arrs8" :group="group8" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrs8" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组9</div>
          <draggable v-model="arrs9" :group="group9" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrs9" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组10</div>
          <draggable v-model="arrs10" :group="group10" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrs10" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组10</div>
          <draggable v-model="arrs11" :group="group11" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrs11" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组12</div>
          <draggable v-model="arrs12" :group="group12" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrs12" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组13</div>
          <draggable v-model="arrs13" :group="group13" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrs13" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
      <div  class="col group">
        <div class="title" style="float:left">分组14</div>
          <draggable v-model="arrs14" :group="group14" animation="300" dragClass="dragClass" ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
            <transition-group :style="style">
              <div class="item gro" v-for="item in arrs14" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
      </div>
    </div>
    <!-- 分组结束 -->
    </div>
    </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
/* 导入draggable组件 */
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  // #region
  data () {
    return {
      activeName: 'first',
      drag: false,
      /* 初始化，使得每个框均可拖拽 */
      group: { name: 'site', pull: true, put: true },
      group1: { name: 'site', pull: true, put: true },
      group2: { name: 'site', pull: true, put: true },
      group3: { name: 'site', pull: true, put: true },
      group4: { name: 'site', pull: true, put: true },
      group5: { name: 'site', pull: true, put: true },
      group6: { name: 'site', pull: true, put: true },
      group7: { name: 'site', pull: true, put: true },
      group8: { name: 'site', pull: true, put: true },
      group9: { name: 'site', pull: true, put: true },
      group10: { name: 'site', pull: true, put: true },
      group11: { name: 'site', pull: true, put: true },
      group12: { name: 'site', pull: true, put: true },
      group13: { name: 'site', pull: true, put: true },
      group14: { name: 'site', pull: true, put: true },
      arrf: [
        { id: 1, name: '运村变1' }, { id: 2, name: '运村变2' }, { id: 3, name: '运村变3' },
        { id: 4, name: '运村变4' }, { id: 5, name: '运村变5' }, { id: 6, name: '运村变6' },
        { id: 7, name: '运村变7' }, { id: 8, name: '运村变8' }, { id: 9, name: '运村变9' },
        { id: 10, name: '运村变10' }, { id: 11, name: '运村变11' }, { id: 12, name: '运村变12' },
        { id: 13, name: '运村变13' }, { id: 14, name: '运村变14' }, { id: 15, name: '运村变15' },
        { id: 16, name: '运村变16' }, { id: 17, name: '运村变17' }, { id: 18, name: '运村变18' },
        { id: 19, name: '运村变19' }, { id: 120, name: '运村变20' }, { id: 21, name: '运村变21' },
        { id: 22, name: '运村变22' }
      ],
      arrs: [
        { id: 1, name: '运村变1' }, { id: 2, name: '运村变2' }, { id: 3, name: '运村变3' },
        { id: 4, name: '运村变4' }, { id: 5, name: '运村变5' }, { id: 6, name: '运村变6' },
        { id: 7, name: '运村变7' }, { id: 8, name: '运村变8' }, { id: 9, name: '运村变9' },
        { id: 10, name: '运村变10' }, { id: 11, name: '运村变11' }, { id: 12, name: '运村变12' },
        { id: 13, name: '运村变13' }, { id: 14, name: '运村变14' }, { id: 15, name: '运村变15' },
        { id: 16, name: '运村变16' }, { id: 17, name: '运村变17' }, { id: 18, name: '运村变18' },
        { id: 19, name: '运村变19' }, { id: 120, name: '运村变20' }, { id: 21, name: '运村变21' },
        { id: 22, name: '运村变22' }
      ],
      /* 例行巡视数组 */
      arrf1: [],
      arrf2: [],
      arrf3: [],
      arrf4: [],
      arrf5: [],
      arrf6: [],
      arrf7: [],
      arrf8: [],
      arrf9: [],
      arrf10: [],
      arrf11: [],
      arrf12: [],
      arrf13: [],
      arrf14: [],
      /* 夜间巡视数组 */
      arrs1: [],
      arrs2: [],
      arrs3: [],
      arrs4: [],
      arrs5: [],
      arrs6: [],
      arrs7: [],
      arrs8: [],
      arrs9: [],
      arrs10: [],
      arrs11: [],
      arrs12: [],
      arrs13: [],
      arrs14: [],
      style: 'min-height:120px;display: block;'
    }
  },
  // #endregion
  methods: {
    onStart () {
      this.drag = true
    },
    onEnd () {
      this.drag = false
    },
    click1 () {
      alert('例行巡视计划已生成')
    },
    click2 () {
      alert('夜间巡视计划已生成')
    }
  }
}
</script>
<style scoped>
/*定义要拖拽元素的样式*/
.ghostClass {
  background-color: #66ab96 !important;
}
.chosenClass {
  background-color: #fff !important;
  opacity: 1 !important;
}
.dragClass {
  background-color: #373d41 !important;
  opacity: 1 !important;
  box-shadow: none !important;
  outline: none !important;
  background-image: none !important;
}
.itxst {
  margin: 10px;
  min-height: 200px;
}
.title {
  padding: 6px 12px;
}
.people {
  width: 30%;
  float:right;
  height: 365px;
  margin-bottom:450px
}
.group {
  width: 53%;
  margin-left: 10px;
  margin-top: 2px;
  height: 35px
}
.col {
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 5px;
  float: left;
}
.col + .col {
  margin-left: 10px;
}
.peo {
  width: 20%;
}
.item {
  float: left;
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: #f1f1f1;
}
.item:hover {
  background-color: #fdfdfd;
  cursor: move;
}
.item + .item {
  border-top: none;
  margin-top: 6px;
}
</style>
