<script setup>
defineOptions({
  name: 'Home'
})

import qiunVueUcharts from '@qiun/vue-ucharts'
import options from './options.js'
const chartData = ref({})
const barOptions = options.barOption()

const abilityChartData = ref({})
const abilityOpts = options.abilityOption()

const workChartData = ref({})
const workOpts = options.workOption()
setTimeout(() => {
  // 模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
  chartData.value = {
    categories: ['人事部', '技术部', '市场部', '销售部', '财务部', '行政管理部'],
    series: [
      {
        name: '',
        data: [6, 11, 16, 5, 2, 3]
      }
    ]
  }
  abilityChartData.value = {
    categories: ['处事', '学习', '工作', '沟通', '领导', '决策'],
    series: [
      {
        name: '个人能力',
        data: [90, 86, 99, 66, 95, 93]
      },
      {
        name: '平均数',
        data: [70, 78, 99, 77, 57, 69]
      }
    ]
  }
  workChartData.value = {
    series: [
      {
        name: '全勤率',
        color: '#4B98FE',
        data: 0.8246
      }
    ]
  }
}, 500)
</script>

<template>
  <div class="tabbar-container">
    <div class="card">
      <div class="title">各部门在职人员</div>
      <qiun-vue-ucharts
        type="column"
        :opts="barOptions"
        :chart-data="chartData"
        :ontouch="true"
        style="height: 400px;"
      />
    </div>
    <div class="card">
      <div class="title">个人能力</div>
      <qiun-vue-ucharts
        canvas2d
        type="radar"
        :opts="abilityOpts"
        :chart-data="abilityChartData"
        :ontouch="true"
        style="height: 400px;"
      />
    </div>
    <div class="card">
      <div class="title">本月出勤</div>
      <div class="work">
        <div class="work-text">
          <div style="font-size: 36px;">
            36次 / 44次
          </div>
          <div>
            已打卡 / 应打卡
          </div>
        </div>
        <qiun-vue-ucharts
          canvas2d
          type="arcbar"
          :ontouch="true"
          :opts="workOpts"
          :chart-data="workChartData"
          style="height: 300px;"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabbar-container {
  // padding: 0 20px 110px;
  padding-left: 20px;
  padding-right: 20px;
  .card {
    margin-top: 20px;
    padding: 30px;
    background-color: #fff;
    border-radius: 16px;
    .title {
      padding-bottom: 10px;
      font-size: 30px;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
    .work {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 29px;
      .work-text {
        font-size: 24px;
        color: $sub-color;
      }
    }
  }
}
</style>
