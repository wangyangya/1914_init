import React from 'react';

class Box extends React.Component {
    componentDidMount() {
        var echarts=require('echarts');
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption ({
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        });

    }
    render(){
        return(
            <div id="main" style={{width:400,height:400}}></div>
        )
    }
}
export default Box