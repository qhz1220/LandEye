<template>
  <div class="echarts-container" ref="echartsRef" style="width: 600px; height: 300px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

export default {
  name: 'TechPieChart',
  setup() {
    const echartsRef = ref(null);

    onMounted(() => {
      const myChart = echarts.init(echartsRef.value);
      const option = {
        title: {
          text: '处理状况', // 标题
          left: 'center', // 标题居中
          textStyle: {
            color: '#222' // 标题颜色
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)' // 提示框格式
        },
        series: [{
          name: '处理情况',
          type: 'pie',
          radius: '80%', // 饼图半径
          center: ['50%', '50%'], // 饼图中心位置
          data: [
            { value: 335, name: '已处理' },
            { value: 310, name: '未处理' },
          ],
          label: {
            color: '#000000' ,// 标签文字颜色
            fontsize: 18,
            position:'inside',
            formatter:'{b}:{c}'
          },
          labelLine: {
            lineStyle: {
              color: '#000000' // 标签连接线颜色
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)' // 鼠标悬浮时的阴影颜色
            }
          }
        }]
      };

      myChart.setOption(option);
    });

    return { echartsRef };
  }
};
</script>


