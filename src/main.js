  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('skills'));

  // 指定图表的配置项和数据
  var option = {
   
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '静态页面', max: 100},
            { name: 'js', max: 100},
            { name: 'Vue ', max: 100},
            { name: 'React ', max: 100},
            { name: 'TypeScript', max: 100},
            { name: '沟通能力', max: 100}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [100, 70, 78, 70, 60, 79],
                name: '能力雷达'
            }
        ]
    }]
};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);