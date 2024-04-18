<template>
  <div ref="chart" style="width: 400px; height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      
      gaugeData: [
        {
          value: 20,
          name: '离线',
          title: {
            offsetCenter: ['-40%', '80%']
          },
          detail: {
            offsetCenter: ['-40%', '95%']
          }
        },
        {
          value: 40,
          name: '在线',
          title: {
            offsetCenter: ['0%', '80%']
          },
          detail: {
            offsetCenter: ['0%', '95%']
          }
        },
        {
          value: 60,
          name: '总数',
          title: {
            offsetCenter: ['40%', '80%']
          },
          detail: {
            offsetCenter: ['40%', '95%']
          }
        }
      ],
      myChart: null
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(this.$refs.chart);
      this.myChart.setOption(this.getOption());
    },

    getOption() {
      return {
        title:{
        text:'摄像头',
        left:'center',
        top:'5%',
        textStyle: {
          color: 'black' // 标题颜色
        }
      },
        series: [
        
          {
            type: 'gauge',
            anchor: {
              show: true,
              showAbove: true,
              size: 18,
              itemStyle: {
                color: '#FAC858'
              }
            },
            pointer: {
              icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
              width: 8,
              length: '80%',
              offsetCenter: [0, '8%']
            },
            progress: {
              show: true,
              overlap: true,
              roundCap: true
            },
            axisLine: {
              roundCap: true
            },
            data: this.gaugeData,
            title: {
              fontSize: 14
            },
            detail: {
              width: 40,
              height: 14,
              fontSize: 14,
              color: '#fff',
              backgroundColor: 'inherit',
              borderRadius: 3,
              formatter: '{value}%'
            }
          }
        ]
      };
    }
  }
};
</script>
