export default {
  barOption(data) {
    return {
      color: ['#1989FA'],
      padding: [20, 6, 0, 0],
      dataLabel: false,
      enableScroll: true, // 开启图表拖拽功能
      touchMoveLimit: 120,
      xAxis: {
        fontSize: 12,
        scrollShow: true, // 新增是否显示滚动条，默认false
        itemCount: 5, // 当页柱状图数量
        marginTop: 5
      },
      yAxis: {
        gridColor: '#ebedf0',
        disabled: false,
        disableGrid: false,
        gridType: 'dash',
        dashLength: '4',
        data: [
          {
            axisLine: false
            // max: Math.ceil(Math.max(...chartData.value.series[0].data) / 5) * 5
          }
        ]
      },
      legend: {
        show: false
      },
      extra: {
        column: {
          type: 'stack',
          width: 16,
          activeBgColor: '#000000',
          activeBgOpacity: 0.04
        }
      }
    }
  },
  abilityOption(data) {
    return {
      color: ['#4B98FE', '#00D05E'],
      padding: [0, 0, 0, 20],
      dataLabel: false,
      enableScroll: false,
      legend: {
        show: true,
        position: 'left',
        lineHeight: 32
      },
      extra: {
        radar: {
          gridType: 'radar',
          gridColor: '#E6E6E6',
          gridCount: 2,
          opacity: 0.2,
          max: 100,
          labelShow: true
        }
      }
    }
  },
  workOption(data) {
    return {
      color: ['#4B98FE', '#00D05E', '#FFAC00', '#FB6A67', '#957BFE', '#00B9FE', '#FE871B', '#00C8B0', '#F674D6'],
      title: {
        name: '82.46%',
        fontSize: 20,
        color: '#4B98FE'
      },
      subtitle: {
        name: '全勤率',
        fontSize: 12,
        color: '#4B98FE',
        offsetY: 6
      },
      extra: {
        arcbar: {
          type: 'circle',
          width: 8
        }
      }
    }
  }
}
