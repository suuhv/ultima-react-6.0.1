import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';

const radarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
            label: 'First Dataset',
            backgroundColor: 'rgba(54, 162, 235,0.2)',
            borderColor: 'rgba(54, 162, 235,1)',
            pointBackgroundColor: 'rgba(54, 162, 235,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: 'Second Dataset',
            backgroundColor: 'rgba(255, 99, 132,0.2)',
            borderColor: 'rgba(255, 99, 132,1)',
            pointBackgroundColor: 'rgba(255, 99, 132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

const getLineData = (colorMode) => {
    const isLight = colorMode === 'light';
    const dataset1Color = isLight ? '#00ACC1' : '#4DD0E1';
    const dataset2Color = isLight ? '#FF9800' : '#FFB74D';

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: dataset1Color,
                borderColor: dataset1Color,
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: dataset2Color,
                borderColor: dataset2Color,
            }
        ]
    };
}

const getBarData = (colorMode) => {
    const isLight = colorMode === 'light';
    const dataset1Color = isLight ? '#00ACC1' : '#4DD0E1';
    const dataset2Color = isLight ? '#FF9800' : '#FFB74D';

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                backgroundColor: dataset1Color,
                borderColor: dataset1Color,
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'Second Dataset',
                backgroundColor: dataset2Color,
                borderColor: dataset2Color,
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
}

const getPieData = (colorMode) => {
    const { limeColor, blueColor, tealColor, orangeColor } = getColors(colorMode);
    const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';

    return {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [
            {
                data: [540, 325, 702, 421],
                backgroundColor: [
                    blueColor,
                    tealColor,
                    limeColor,
                    orangeColor
                ],
                borderColor
            }]
    };
}

const getPolarData = (colorMode) => {
    const { limeColor, blueColor, tealColor, orangeColor } = getColors(colorMode);
    const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';

    return {
        datasets: [{
            data: [
                11,
                16,
                7,
                3
            ],
            backgroundColor: [
                blueColor,
                tealColor,
                limeColor,
                orangeColor
            ],
            borderColor,
            label: 'Dataset'
        }],
        labels: [
            'A',
            'B',
            'C',
            'D'
        ]
    };
}

const getColors = (colorMode) => {
    const isLight = colorMode === 'light';
    return {
        pinkColor: isLight ? '#EC407A' : '#F48FB1',
        purpleColor: isLight ? '#AB47BC' : '#CE93D8',
        deeppurpleColor: isLight ? '#7E57C2' : '#B39DDB',
        indigoColor: isLight ? '#5C6BC0' : '#9FA8DA',
        blueColor: isLight ? '#42A5F5' : '#90CAF9',
        lightblueColor: isLight ? '#29B6F6' : '#81D4FA',
        cyanColor: isLight ? '#00ACC1' : '#4DD0E1',
        tealColor: isLight ? '#26A69A' : '#80CBC4',
        greenColor: isLight ? '#66BB6A' : '#A5D6A7',
        lightgreenColor: isLight ? '#9CCC65' : '#C5E1A5',
        limeColor: isLight ? '#D4E157' : '#E6EE9C',
        yellowColor: isLight ? 'FFEE58' : '#FFF59D',
        amberColor: isLight ? '#FFCA28' : '#FFE082',
        orangeColor: isLight ? '#FFA726' : '#FFCC80',
        deeporangeColor: isLight ? '#FF7043' : '#FFAB91',
        brownColor: isLight ? '#8D6E63' : '#BCAAA4'
    }
}

const getChartOptions = () => {
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
    const gridLinesColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';
    const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
    return {
        legend: {
            display: true,
            labels: {
                fontFamily,
                fontColor: textColor,
            }
        },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    fontFamily,
                    fontColor: textColor
                },
                gridLines: {
                    color: gridLinesColor
                }
            }],
            xAxes: [{
                ticks: {
                    fontFamily,
                    fontColor: textColor
                },
                gridLines: {
                    color: gridLinesColor
                }
            }]
        }
    }
}

const getChartOptions2 = () => {
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
    const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
    return {
        legend: {
            display: true,
            labels: {
                fontFamily,
                fontColor: textColor,
            }
        },
        responsive: true
    }
}

const getChartOptions3 = () => {
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
    const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
    const gridLinesColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';

    return {
        legend: {
            display: true,
            labels: {
                fontFamily,
                fontColor: textColor,
            }
        },
        scale: {
            gridLines: {
                color: gridLinesColor
            },
            pointLabels: {
                fontColor: textColor
            }
        }
    }
}

let chartOptions;
let chartOptions2;
let chartOptions3;

export const ChartDemo = (props) => {
    const [lineData, setLineData] = useState(getLineData(props.colorMode));
    const [barData, setBarData] = useState(getLineData(props.colorMode));
    const [polarData, setPolarData] = useState(getLineData(props.colorMode));
    const [pieData, setPieData] = useState(getLineData(props.colorMode));

    const updateCharts = () => {
        setLineData(getLineData(props.colorMode));
        setBarData(getBarData(props.colorMode));
        setPolarData(getPolarData(props.colorMode));
        setPieData(getPieData(props.colorMode));
        chartOptions = getChartOptions();
        chartOptions2 = getChartOptions2();
        chartOptions3 = getChartOptions3();
    }

    useEffect(() => {
        updateCharts();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (props.isNewThemeLoaded) {
            updateCharts();
            props.onNewThemeChange(false);
        }
    }, [props.isNewThemeLoaded, props.onNewThemeChange]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="p-grid p-fluid">
            <div className="p-col-12 p-lg-6">
                <div className="card">
                    <h5 className="centerText">Linear Chart</h5>
                    <Chart type="line" data={lineData} options={chartOptions}></Chart>
                </div>

                <div className="card">
                    <h5 className="centerText">Pie Chart</h5>
                    <Chart type="pie" data={pieData} options={chartOptions2}></Chart>
                </div>

                <div className="card">
                    <h5 className="centerText">Polar Area Chart</h5>
                    <Chart type="polarArea" data={polarData} options={chartOptions3}></Chart>
                </div>
            </div>
            <div className="p-col-12 p-lg-6">
                <div className="card">
                    <h5 className="centerText">Bar Chart</h5>
                    <Chart type="bar" data={barData} options={chartOptions}></Chart>
                </div>

                <div className="card">
                    <h5 className="centerText">Doughnut Chart</h5>
                    <Chart type="doughnut" data={pieData} options={chartOptions2}></Chart>
                </div>

                <div className="card">
                    <h5 className="centerText">Radar Chart</h5>
                    <Chart type="radar" data={radarData} options={chartOptions3}></Chart>
                </div>
            </div>
        </div>

    )
}
