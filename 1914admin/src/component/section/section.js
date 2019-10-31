import React from 'react';
//
// // 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts';
// // 引入柱状图
// import  'echarts/lib/chart/bar';
// // 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';

class EchartsTest extends React.Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var echarts=require('echarts')
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 400, height: 400 }}></div>
        );
    }
}

export default EchartsTest;