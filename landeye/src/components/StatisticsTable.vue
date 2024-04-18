<template>
    <div class="container">
    <div class="container1">
        <LineChart />
        <GaugeChart />
      </div>
      <div class="container2">
        <PieChart />
        <Histogram />
      </div>
    </div>
</template>
  
<script>
  import LineChart from './statistics/LineChart.vue'
  import PieChart from './statistics/PieChart.vue'
  import Histogram from './statistics/Histogram.vue'
  import GaugeChart from "./statistics/GaugeChart.vue";
  
  export default {
    components: {
      GaugeChart,
      LineChart,
      PieChart,
      Histogram
    }
  }
  </script>
  
  <style>
  .container {
    width:80%;
    height:100%;
    padding-top:10px;
  }
  .container1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right:40px;
  }
  .container2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  </style>
  