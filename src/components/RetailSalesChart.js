import React, {useEffect, useRef} from 'react';
import Highcharts from "highcharts";

const RetailSalesChart = ({sales}) => {
    const containerEle = useRef(null);

    const drawChart = (ele, xAxis, yAxis) => {
        Highcharts.chart(ele, {
            credits: {
                enabled: false
            },
            chart: {
                type: 'spline',
            },
            title: {text: null},
            xAxis: {
                type: 'datetime',
                labels: {
                    format: '{value:%b}',
                    useHTML: true,
                    style: {
                        textTransform: "uppercase",
                    }
                },
                categories: yAxis,
                tickInterval: 10
            },
            yAxis: {
                gridLineColor: 'transparent',
                labels: {
                    enabled: false
                },
                title: {
                    text: ''
                }
            },
            legend: {
                enabled: true
            },
            series: xAxis,
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    }
                }
            },
        });
    }

    useEffect(() => {

        const yAxis = sales.map(s => new Date(s.weekEnding).getTime())
        const retailSales = sales.map(s => s.retailSales);
        const wholesaleSales = sales.map(s => s.wholesaleSales);
        const unitsSold = sales.map(s => s.unitsSold);
        const retailerMargin = sales.map(s => s.retailerMargin);

        drawChart(containerEle.current, [
            {name: 'Retail Sales', data: retailSales},
            {name: 'Wholesale Sales', data: wholesaleSales},
            {name: 'Units Sold', data: unitsSold},
            {name: 'Retailer Margin', data: retailerMargin}
        ], yAxis)

    }, [])


    return (
        <div className="salesChart">
            <h3 className="light">Retail Sales</h3>
            <div ref={containerEle}></div>
        </div>
    );
};

export default RetailSalesChart;
