<template>
  <div class="container4">
    <div class="datechoice1">
      <input type="date" v-model="startDate" @change="generateDateRange" >
      <input type="date" v-model="endDate" @change="generateDateRange" >
    </div>
    <div ref="echartsRef" id="Histogram" style="width: 600px; height: 260px;"></div>
  </div>
</template>

<script>
//import { ref, onMounted } from 'vue';
//import * as echarts from 'echarts';

/*export default {
  name: 'WarnType',
  setup() {
    const echartsRef = ref(null);

    onMounted(() => {
      const myChart = echarts.init(echartsRef.value);
      const option = {
        title: {
          text: '预警类型', // 标题
          left: 'center', // 标题居中
          textStyle: {
            color: '#222' // 标题颜色
          }
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: [], // X 轴数据
          axisLabel: {
            color: '#222' // X 轴标签颜色
          },
          axisLine: {
            lineStyle: {
              color: '#ccc' // X 轴线颜色
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#222' // Y 轴标签颜色
          },
          axisLine: {
            lineStyle: {
              color: '#ccc' // Y 轴线颜色
            }
          },
          splitLine: {
            lineStyle: {
              color: '#666' // 分隔线颜色
            }
          }
        },
        series: [
            {data: [120, 200, 150, 80, 70, 110, 130], type: 'bar', itemStyle: {color: '#00b0ff'}},
            {data: [150, 210, 120, 70, 80, 116, 140], type: 'bar', itemStyle: {color: '#00b0ff'}},
        ]
      };

      myChart.setOption(option);
    });

    return { echartsRef };
  }
};*/
export default {
  name:'TypeNum',
  data(){
    return{
      startDate: '',
      endDate: '',
      option : {
        title: {
          text: '预警类型', // 标题
          left: 'center', // 标题居中
          textStyle: {
            color: '#222' // 标题颜色
          }
        },
        tooltip: { // 设置tip提示
          trigger: 'axis'
        },
        grid: {
          top: '14%',
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        legend:{},
        xAxis: {
          name:'日期',
          type: 'category',
          data: [], // X 轴数据
          axisLabel: {
            color: 'black' // X 轴标签颜色
          },
          axisLine: {
            lineStyle: {
              color: '#666' // X 轴线颜色
            }
          },
          nameTextStyle: { // 坐标轴名称的文字样式
            fontSize: 12,
            padding: [0, 0, 0, -15],
            color:'black'
          }
        },
        yAxis: {
          name:'数量',
          type: 'value',
          axisLabel: {
            color: '#000' // Y 轴标签颜色
          },
          axisLine: {
            lineStyle: {
              color: '#000' // Y 轴线颜色
            }
          },
          splitLine: {
            lineStyle: {
              color: '#666' // 分隔线颜色
            }
          }
        },
        series: [
          {data: [120, 200, 150, 80, 70, 110, 130], type: 'bar', itemStyle: {color: '#00b0ff'}},
          {data: [150, 210, 120, 70, 80, 116, 140], type: 'bar', itemStyle: {color: '#808080'}},
        ]
      },
    }
  },
  mounted() {
    this.chartChange()
  },
  methods: {
    chartChange() {
      const myEcharts = this.$echarts.init(document.getElementById('Histogram'), 'vintage')
      // 使用刚指定的配置项和数据显示图表。
      myEcharts.setOption(this.option, true)
    },
    generateDateRange() {
      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);
      const dateRange = [];
      // 添加起始日期
      dateRange.push(startDate.toISOString().slice(0, 7)); // 格式化为'yyyy-MM'
      // 循环生成中间日期
      while (startDate < endDate) {
        startDate.setMonth(startDate.getMonth() + 1);
        const nextMonth = new Date(startDate);
        dateRange.push(nextMonth.toISOString().slice(0, 7)); // 格式化为'yyyy-MM'
      }
      this.option.xAxis.data = dateRange;
      this.chartChange();
    }
  }
}
</script>
<style>
.container4 {
  display: flex;
  flex-direction: column;
}
.datechoice1 {
  padding-left:16px
}
</style>


