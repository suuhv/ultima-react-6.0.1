import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Menu } from 'primereact/menu';
import { ProgressBar } from 'primereact/progressbar';
import { Chart } from 'primereact/chart';
import { Button } from 'primereact/button';
import { ProductService } from '../service/ProductService';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { RTLContext } from '../App';

const storeAData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
        data: [55, 3, 45, 6, 44, 58, 84, 68, 64],
        borderColor: [
            '#4DD0E1',
        ],
        backgroundColor: [
            'rgba(77, 208, 225, 0.8)',
        ],
        borderWidth: 2,
        fill: true
    }
    ]
};

const storeBData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
        data: [81, 75, 63, 100, 69, 79, 38, 37, 76],
        borderColor: [
            '#4DD0E1',
        ],
        backgroundColor: [
            'rgba(77, 208, 225, 0.8)',
        ],
        borderWidth: 2,
        fill: true
    }
    ]
};

const storeCData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
        data: [99, 55, 22, 72, 24, 79, 35, 91, 48],
        borderColor: [
            '#4DD0E1',
        ],
        backgroundColor: [
            'rgba(77, 208, 225, 0.8)',
        ],
        borderWidth: 2,
        fill: true
    }
    ]
};

const storeDData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
        data: [5, 51, 68, 82, 28, 21, 29, 45, 44],
        borderColor: [
            '#4DD0E1',
        ],
        backgroundColor: [
            'rgba(77, 208, 225, 0.8)',
        ],
        borderWidth: 2,
        fill: true
    }
    ]
};

const storeOptions = {
    legend: {
        display: false
    },
    responsive: true,
    aspectRatio: 4,
    scales: {
        yAxes: [{
            display: false
        }],
        xAxes: [{
            display: false
        }]
    },
    tooltips: {
        enabled: false
    },
    elements: {
        point: {
            radius: 0
        }
    },
};


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

const getPieData = (colorMode) => {
    const { limeColor, blueColor, tealColor } = getColors(colorMode);
    const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';
    return {
        labels: ['O', 'D', 'R'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    blueColor,
                    tealColor,
                    limeColor
                ],
                borderColor
            }
        ]
    }
}

const getPieOptions = () => {
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
    const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
    return {
        responsive: true,
        aspectRatio: 1,
        legend: {
            position: 'top',
            labels: {
                fontFamily,
                fontColor: textColor
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };
}

const getChartData = (colorMode) => {
    const { limeColor, amberColor, orangeColor, blueColor, lightblueColor,
        cyanColor, tealColor, greenColor, lightgreenColor } = getColors(colorMode);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: '2012',
                data: [6, 25, 97, 12, 7, 70, 42],
                borderColor: blueColor,
                backgroundColor: blueColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2013',
                data: [81, 3, 5, 11, 59, 47, 99],
                borderColor: lightblueColor,
                backgroundColor: lightblueColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2014',
                data: [68, 47, 46, 46, 61, 70, 94],
                borderColor: cyanColor,
                backgroundColor: cyanColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2015',
                data: [31, 9, 18, 76, 6, 11, 79],
                borderColor: tealColor,
                backgroundColor: tealColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2016',
                data: [85, 37, 47, 29, 2, 10, 54],
                borderColor: greenColor,
                backgroundColor: greenColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2017',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: lightgreenColor,
                backgroundColor: lightgreenColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2018',
                data: [89, 18, 95, 18, 97, 61, 54],
                borderColor: limeColor,
                backgroundColor: limeColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2019',
                data: [18, 36, 39, 58, 41, 50, 72],
                borderColor: amberColor,
                backgroundColor: amberColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2020',
                data: [31, 4, 35, 74, 47, 35, 46],
                borderColor: orangeColor,
                backgroundColor: orangeColor,
                borderWidth: 2,
                fill: true
            }
        ]
    };
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
                fontColor: textColor
            }
        },
        responsive: true,
        maintainAspectRatio: false,
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
                categoryPercentage: .9,
                barPercentage: .8,
                ticks: {
                    fontFamily,
                    fontColor: textColor
                },
                gridLines: {
                    color: gridLinesColor
                }
            }]
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
}

const getDoughnutData = (colorMode) => {
    const { blueColor, lightblueColor, cyanColor, tealColor, greenColor,
        lightgreenColor, orangeColor } = getColors(colorMode);
    const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';

    return {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
            {
                data: [11, 29, 71, 33, 28, 95, 6],
                backgroundColor: [blueColor, lightblueColor, cyanColor, tealColor, greenColor, lightgreenColor, orangeColor],
                borderColor
            }
        ]
    };
}

const getDoughnutOptions = () => {
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
    const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
    return {
        responsive: true,
        legend: {
            position: 'top',
            labels: {
                fontFamily,
                fontColor: textColor
            }
        },
        circumference: Math.PI,
        rotation: -Math.PI,
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };
}

let chartMonthlyData;
let chartMonthlyOptions;
let doughnutData;
let doughnutOptions;
let pieData;
let pieOptions;

export const DashboardAnalytics = (props) => {

    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const isRTL = useContext(RTLContext)
    const bar = useRef(null);
    const doughnut = useRef(null);
    const storeA = useRef(null);
    const storeB = useRef(null);
    const storeC = useRef(null);
    const storeD = useRef(null);
    const pie = useRef(null);
    const menu11 = useRef(null);
    const menu12 = useRef(null);
    const menu13 = useRef(null);

    const [storeATotalValue, setStoreATotalValue] = useState(100);
    const [storeADiff, setStoreADiff] = useState(0);

    const [storeBTotalValue, setStoreBTotalValue] = useState(120);
    const [storeBDiff, setStoreBDiff] = useState(0);

    const [storeCTotalValue, setStoreCTotalValue] = useState(150);
    const [storeCDiff, setStoreCDiff] = useState(0);

    const [storeDTotalValue, setStoreDTotalValue] = useState(80);
    const [storeDDiff, setStoreDDiff] = useState(0);

    const calculateStore = (storeData, totalValue) => {
        let randomNumber = +((Math.random() * 500).toFixed(2));
        let data = storeData.datasets[0].data;
        let length = data.length;
        data.push(randomNumber);
        data.shift();

        let diff = +((data[length - 1] - data[length - 2]).toFixed(2));
        let status = diff === 0 ? 0 : (diff > 0 ? 1 : -1);
        totalValue = +((totalValue + diff).toFixed(2));

        return { diff, totalValue, status };
    }

    useEffect(() => {
        const productService = new ProductService();
        productService.getProducts().then(data => setProducts(data));

        chartMonthlyData = getChartData(props.colorMode);
        chartMonthlyOptions = getChartOptions();
        doughnutData = getDoughnutData(props.colorMode);
        doughnutOptions = getDoughnutOptions();
        pieData = getPieData(props.colorMode);
        pieOptions = getPieOptions();

        let storeInterval = setInterval(() => {
            let { diff: _storeADiff, totalValue: _storeATotalValue } = calculateStore(storeAData, storeATotalValue);
            setStoreADiff(_storeADiff);
            setStoreATotalValue(_storeATotalValue);
            storeA.current.chart.update();

            let { diff: _storeBDiff, totalValue: _storeBTotalValue } = calculateStore(storeBData, storeBTotalValue);
            setStoreBDiff(_storeBDiff);
            setStoreBTotalValue(_storeBTotalValue);
            storeB.current.chart.update();

            let { diff: _storeCDiff, totalValue: _storeCTotalValue } = calculateStore(storeCData, storeCTotalValue);
            setStoreCDiff(_storeCDiff)
            setStoreCTotalValue(_storeCTotalValue);
            storeC.current.chart.update();

            let { diff: _storeDDiff, totalValue: _storeDTotalValue } = calculateStore(storeDData, storeDTotalValue);
            setStoreDDiff(_storeDDiff);
            setStoreDTotalValue(_storeDTotalValue);
            storeD.current.chart.update();
        }, 2000)

        return () => {
            clearInterval(storeInterval);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (props.isNewThemeLoaded) {
            chartMonthlyData = getChartData(props.colorMode);
            chartMonthlyOptions = getChartOptions();
            doughnutData = getDoughnutData(props.colorMode);
            doughnutOptions = getDoughnutOptions();
            pieData = getPieData(props.colorMode);
            pieOptions = getPieOptions();
            props.onNewThemeChange(false);
        }
    }, [props.isNewThemeLoaded, props.onNewThemeChange]); // eslint-disable-line react-hooks/exhaustive-deps

    const imageTemplate = (rowData, column) => {
        var src = "assets/demo/images/product/" + rowData.image;
        return <img src={src} alt={rowData.brand} width="50px" className="p-shadow-4" />;
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const actionTemplate = (rowData, column) => {
        return (
            <>
                <span className="p-column-title">View</span>
                <Button icon="pi pi-search" type="button" className={classNames('p-button-rounded p-button-text p-mb-1', { 'p-mr-2': !isRTL, 'p-ml-2': isRTL })}></Button>
            </>
        )
    }

    const priceBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title">Price</span>
                {formatCurrency(data.price)}
            </>
        );
    };

    const bodyTemplate = (data, props) => {
        return (
            <>
                <span className="p-column-title">{props.header}</span>
                {data[props.field]}
            </>
        );
    };

    const changeMonthlyDataView = () => {
        if (bar.current.chart.options.scales.xAxes[0].stacked) {
            bar.current.chart.options.scales.xAxes[0].stacked = false;
            bar.current.chart.options.scales.yAxes[0].stacked = false;
        }
        else {
            bar.current.chart.options.scales.xAxes[0].stacked = true;
            bar.current.chart.options.scales.yAxes[0].stacked = true;
        }

        bar.current.chart.update();
    }

    const changeDoughnutDataView = () => {
        if (doughnut.current.chart.options.circumference === Math.PI) {
            doughnut.current.chart.options.circumference = 2 * Math.PI;
            doughnut.current.chart.options.rotation = -Math.PI / 2;
        } else {
            doughnut.current.chart.options.circumference = Math.PI;
            doughnut.current.chart.options.rotation = -Math.PI;
        }

        doughnut.current.chart.update();
    }

    const togglePieDoughnut = () => {
        pie.current.chart.options.cutoutPercentage = pie.current.chart.options.cutoutPercentage ? 0 : 50;
        pie.current.chart.update();
    }

    const changePieDoughnutDataView = () => {
        if (pie.current.chart.options.circumference === Math.PI) {
            pie.current.chart.options.circumference = 2 * Math.PI;
            pie.current.chart.options.rotation = -Math.PI / 2;
        } else {
            pie.current.chart.options.circumference = Math.PI;
            pie.current.chart.options.rotation = -Math.PI;
        }

        pie.current.chart.update();
    }

    return (
        <div className="p-grid dashboard">
            <div className="p-col-12 p-md-8">
                <div className="card height-100">
                    <div className="card-header">
                        <h5>Monthly Comparison</h5>
                        <Button type="button" label="Vertical/Stacked Data" className={classNames('p-button-text', { 'p-ml-auto': !isRTL, 'p-mr-auto': isRTL })} onClick={changeMonthlyDataView}></Button>
                    </div>

                    <Chart ref={bar} type="bar" data={chartMonthlyData} options={chartMonthlyOptions} responsive="true" height="400px"></Chart>
                </div>
            </div >

            <div className="p-col-12 p-md-4">
                <div className="card widget-insights height-100">
                    <div className="card-header p-mb-2">
                        <h5>Insights</h5>
                        <div>
                            <Button type="button" icon="pi pi-ellipsis-h" className="p-button-rounded p-button-text p-button-plain" onClick={(event) => menu11.current.toggle(event)}></Button>
                            <Menu ref={menu11} popup={true} model={[{ label: 'Update', icon: 'pi pi-fw pi-refresh' }, { label: 'Edit', icon: 'pi pi-fw pi-pencil' }]}></Menu>
                        </div>
                    </div>
                    <div className="card-subheader p-mb-2 p-d-flex p-ai-center">
                        <span>November 22 - November 29</span>
                        <Button type="button" label="Semi/Full Data" className={classNames('p-button-text', { 'p-ml-auto': !isRTL, 'p-mr-auto': isRTL })} onClick={changeDoughnutDataView}></Button>
                    </div >
                    <Chart ref={doughnut} type="doughnut" data={doughnutData} options={doughnutOptions} responsive="true" ></Chart >
                    <div className="p-d-flex p-flex-column p-jc-center">
                        <div className="p-d-flex p-flex-row p-ai-center p-mt-4 p-px-3">
                            <i className="pi pi-thumbs-up p-p-3 rounded-circle lightgreen-bgcolor solid-surface-text-color"></i>
                            <div className={classNames('p-d-flex p-flex-column', { 'p-ml-3': !isRTL, 'p-mr-3': isRTL })}>
                                <span>Best Day of the Week</span>
                                <small>Friday</small>
                            </div>
                            <span className={classNames('indigo-color', { 'p-ml-auto': !isRTL, 'p-mr-auto': isRTL })}>95</span>
                        </div >
                        <div className="p-d-flex p-flex-row p-ai-center p-my-4 p-px-3">
                            <i className="pi pi-thumbs-down rounded-circle p-p-3 orange-bgcolor solid-surface-text-color"></i>
                            <div className={classNames('p-d-flex p-flex-column', { 'p-ml-3': !isRTL, 'p-mr-3': isRTL })}>
                                <span>Worst Day of the Week</span>
                                <small>Saturday</small>
                            </div>
                            <span className={classNames('indigo-color', { 'p-ml-auto': !isRTL, 'p-mr-auto': isRTL })} > 6</span >
                        </div >
                    </div >
                </div >
            </div >

            <div className="p-col-12 p-md-4">
                <div className="card widget-social">
                    <div className="p-d-flex p-jc-between p-ai-center p-p-3">
                        <div className="social-icon">
                            <i className="pi pi-twitter blue-color fs-xxlarge"></i>
                        </div>
                        <div className="info p-d-flex p-flex-column">
                            <span className="value">44.995</span>
                            <span className="subtext p-mt-2">Retweets</span>
                        </div>
                    </div>

                    <div className="stats p-d-flex p-jc-between p-mt-3">
                        <div className="left p-d-flex p-flex-column ">
                            <span className="title">Target</span>
                            <span className="value p-mb-2">10.000</span>
                            <ProgressBar value="50" showValue={false}></ProgressBar>
                        </div>
                        <div className="right p-d-flex p-flex-column">
                            <span className="title">All Time Record</span>
                            <span className="value p-mb-2">50.702</span>
                            <ProgressBar value="24" showValue={false}></ProgressBar>
                        </div>
                    </div>
                </div >
            </div >

            <div className="p-col-12 p-md-4">
                <div className="card widget-social">
                    <div className="p-d-flex p-jc-between p-ai-center p-p-3">
                        <div className="social-icon">
                            <i className="pi pi-facebook indigo-color fs-xxlarge"></i>
                        </div>
                        <div className="info p-d-flex p-flex-column">
                            <span className="value">44.995</span>
                            <span className="subtext p-mt-2">Facebook Interactions</span>
                        </div>
                    </div>

                    <div className="stats p-d-flex p-jc-between p-mt-3">
                        <div className="left p-d-flex p-flex-column ">
                            <span className="title">Target</span>
                            <span className="value p-mb-2">10.000</span>
                            <ProgressBar value="23" showValue={false}></ProgressBar>
                        </div>
                        <div className="right p-d-flex p-flex-column">
                            <span className="title">All Time Record</span>
                            <span className="value p-mb-2">99.028</span>
                            <ProgressBar value="38" showValue={false}></ProgressBar>
                        </div>
                    </div>
                </div >
            </div >

            <div className="p-col-12 p-md-4">
                <div className="card widget-social">
                    <div className="p-d-flex p-jc-between p-ai-center p-p-3">
                        <div className="social-icon">
                            <i className="pi pi-github text-color fs-xxlarge"></i>
                        </div>
                        <div className="info p-d-flex p-flex-column">
                            <span className="value">81.002</span>
                            <span className="subtext p-mt-2">Star</span>
                        </div>
                    </div>

                    <div className="stats p-d-flex p-jc-between p-mt-3">
                        <div className="left p-d-flex p-flex-column ">
                            <span className="title">Target</span>
                            <span className="value p-mb-2">10.000</span>
                            <ProgressBar value="62" showValue={false}></ProgressBar>
                        </div>
                        <div className="right p-d-flex p-flex-column">
                            <span className="title">All Time Record</span>
                            <span className="value p-mb-2">162.550</span>
                            <ProgressBar value="14" showValue={false}></ProgressBar>
                        </div>
                    </div>
                </div >
            </div >

            <div className="p-col-12 p-md-12">
                <div className="card p-grid p-nogutter widget-sales p-d-block p-d-sm-flex">
                    <div className="p-lg-3 p-md-6 p-sm-12 p-p-0">
                        <div className="sales-info p-d-flex p-flex-column p-p-4">
                            <span className="muted-text">Store A Sales</span>
                            <span className="fs-large p-mt-2">
                                {storeADiff !== 0 && <i className={classNames('fw-700 fs-large pi', { 'p-pr-1': !isRTL, 'p-pl-1': isRTL, 'pi-arrow-up green-color': storeADiff > 0, 'pi-arrow-down pink-color': storeADiff < 0 })}></i>}
                            ${storeATotalValue}
                                {storeADiff !== 0 && <span className={classNames('fw-500 fs-normal', { 'p-ml-1': !isRTL, 'p-mr-1': isRTL, 'green-color': storeADiff > 0, 'pink-color': storeADiff < 0 })}>
                                    {storeADiff > 0 ? '+' : ''}{storeADiff}
                                </span>}
                            </span>
                        </div>
                        <div className="p-px-4">
                            <Chart ref={storeA} type="line" data={storeAData} options={storeOptions} responsive="true"></Chart>
                        </div>
                    </div >
                    <div className="p-lg-3 p-md-6 p-sm-12 p-p-0">
                        <div className="sales-info p-d-flex p-flex-column p-p-4">
                            <span className="muted-text">Store B Sales</span>
                            <span className="fs-large p-mt-2">
                                {storeBDiff !== 0 && <i className={classNames('fw-700 fs-large pi', { 'p-pr-1': !isRTL, 'p-pl-1': isRTL, 'pi-arrow-up green-color': storeBDiff > 0, 'pi-arrow-down pink-color': storeBDiff < 0 })}></i>}
                            ${storeBTotalValue}
                                {storeBDiff !== 0 && <span className={classNames('fw-500 fs-normal', { 'p-ml-1': !isRTL, 'p-mr-1': isRTL, 'green-color': storeBDiff > 0, 'pink-color': storeBDiff < 0 })}>
                                    {storeBDiff > 0 ? '+' : ''}{storeBDiff}
                                </span>}
                            </span>
                        </div >
                        <div className="p-px-4">
                            <Chart ref={storeB} type="line" data={storeBData} options={storeOptions} responsive="true"></Chart>
                        </div >
                    </div >
                    <div className="p-lg-3 p-md-6 p-sm-12 p-p-0">
                        <div className="sales-info p-d-flex p-flex-column p-p-4">
                            <span className="muted-text">Store C Sales</span>
                            <span className="fs-large p-mt-2">
                                {storeCDiff !== 0 && <i className={classNames('fw-700 fs-large pi', { 'p-pr-1': !isRTL, 'p-pl-1': isRTL, 'pi-arrow-up green-color': storeCDiff > 0, 'pi-arrow-down pink-color': storeCDiff < 0 })}></i>}
                            ${storeCTotalValue}
                                {storeCDiff !== 0 && <span className={classNames('fw-500 fs-normal', { 'p-ml-1': !isRTL, 'p-mr-1': isRTL, 'green-color': storeCDiff > 0, 'pink-color': storeCDiff < 0 })}>
                                    {storeCDiff > 0 ? '+' : ''}{storeCDiff}
                                </span>}
                            </span>
                        </div >
                        <div className="p-px-4">
                            <Chart ref={storeC} type="line" data={storeCData} options={storeOptions} responsive="true"></Chart>
                        </div >
                    </div >
                    <div className="p-lg-3 p-md-6 p-sm-12 p-p-0">
                        <div className="sales-info p-d-flex p-flex-column p-p-4">
                            <span className="muted-text">Store D Sales</span>
                            <span className="fs-large p-mt-2">
                                {storeDDiff !== 0 && <i className={classNames('fw-700 fs-large pi', { 'p-pr-1': !isRTL, 'p-pl-1': isRTL, 'pi-arrow-up green-color': storeDDiff > 0, 'pi-arrow-down pink-color': storeDDiff < 0 })}></i>}
                            ${storeDTotalValue}
                                {storeDDiff !== 0 && <span className={classNames('fw-500 fs-normal', { 'p-ml-1': !isRTL, 'p-mr-1': isRTL, 'green-color': storeDDiff > 0, 'pink-color': storeDDiff < 0 })}>
                                    {storeDDiff > 0 ? '+' : ''}{storeDDiff}
                                </span>}
                            </span>
                        </div >
                        <div className="p-px-4">
                            <Chart ref={storeD} type="line" data={storeDData} options={storeOptions} responsive="true"></Chart>
                        </div >
                    </div >
                </div >
            </div >

            <div className="p-col-12 p-md-6">
                <div className="card height-100 widget-topsearchs">
                    <div className="card-header">
                        <h5>Top Searchs</h5>
                        <div>
                            <Button type="button" icon="pi pi-ellipsis-h" className="p-button-rounded p-button-text p-button-plain" onClick={(event) => menu12.current.toggle(event)}></Button>
                            <Menu ref={menu12} popup={true} model={[{ label: 'Update', icon: 'pi pi-fw pi-refresh' }, { label: 'Edit', icon: 'pi pi-fw pi-pencil' }]}></Menu>
                        </div>
                    </div>
                    <div className="p-d-flex p-jc-between item">
                        <span>Mat Orange Case</span>
                        <span className="value type-green">82% CONV RATE</span>
                    </div>
                    <div className="p-d-flex p-jc-between item">
                        <span>Space T-Shirt</span>
                        <span className="value type-green">78% CONV RATE</span>
                    </div>
                    <div className="p-d-flex p-jc-between item">
                        <span>Orange Black Hoodie</span>
                        <span className="value type-green">61% CONV RATE</span>
                    </div>
                    <div className="p-d-flex p-jc-between item">
                        <span>Wonders Notebook</span>
                        <span className="value type-yellow">48 CONV RATE</span>
                    </div>
                    <div className="p-d-flex p-jc-between item">
                        <span>Robots T-Shirt</span>
                        <span className="value type-yellow">34% CONV RATE</span>
                    </div>
                    <div className="p-d-flex p-jc-between item">
                        <span>Green Portal Sticker</span>
                        <span className="value type-pink">11% CONV RATE</span>
                    </div>
                </div >
            </div >

            <div className="p-col-12 p-md-6">
                <div className="card">
                    <DataTable value={products} className="p-datatable-products" paginator={true} rows={4}
                        selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)}>
                        <Column header="Image" body={imageTemplate} style={{ width: '5rem' }} />
                        <Column field="name" body={bodyTemplate} header="Name" sortable />
                        <Column field="category" body={bodyTemplate} header="Category" sortable />
                        <Column field="price" header="Price" sortable body={priceBodyTemplate} />
                        <Column header="View" body={actionTemplate} style={{ width: '4rem' }} />
                    </DataTable>
                </div >
            </div >

            <div className="p-col-12 p-md-4">
                <div className="card widget-expenses">
                    <div className="card-header">
                        <h5>Expenses</h5>
                        <div>
                            <Button type="button" icon="pi pi-ellipsis-h" className="p-button-rounded p-button-text p-button-plain" onClick={(event) => menu13.current.toggle(event)}></Button>
                            <Menu ref={menu13} popup={true} model={[{ label: 'Update', icon: 'pi pi-fw pi-refresh' }, { label: 'Edit', icon: 'pi pi-fw pi-pencil' }]}></Menu>
                        </div>
                    </div>
                    <div className="card-subheader p-mb-2 p-pb-3">
                        November 22 - November 29
                </div>

                    <div className="p-d-flex p-jc-between p-ai-center p-my-2 item">
                        <div className="p-d-flex p-flex-column">
                            <i className="pi pi-cloud type p-mb-2"></i>
                            <span className="value p-mb-1">$30.247</span>
                            <span className="subtext">Cloud Infrastructure</span>
                        </div>
                        <span className="item-button"><button className="p-link"><i className="pi pi-chevron-right"></i></button></span>
                    </div>
                    <div className="p-d-flex p-jc-between p-ai-center p-my-2 item">
                        <div className="p-d-flex p-flex-column">
                            <i className="pi pi-tag type p-mb-2"></i>
                            <span className="value p-mb-1">$29.550</span>
                            <span className="subtext">General Goods</span>
                        </div>
                        <span className="item-button"><button className="p-link"><i className="pi pi-chevron-right"></i></button></span>
                    </div>
                    <div className="p-d-flex p-jc-between p-ai-center p-my-2 item">
                        <div className="p-d-flex p-flex-column">
                            <i className="pi pi-desktop type p-mb-2"></i>
                            <span className="value p-mb-1">$16.660</span>
                            <span className="subtext">Consumer Electronics</span>
                        </div>
                        <span className="item-button"><button className="p-link"><i className="pi pi-chevron-right"></i></button></span>
                    </div>
                    <div className="p-d-flex p-jc-between p-ai-center p-my-2 item">
                        <div className="p-d-flex p-flex-column">
                            <i className="pi pi-compass type p-mb-2"></i>
                            <span className="value p-mb-1">$5.801</span>
                            <span className="subtext">Incalculables</span>
                        </div>
                        <span className="item-button"><button className="p-link"><i className="pi pi-chevron-right"></i></button></span>
                    </div>
                </div >
            </div >

            <div className="p-col-12 p-md-8">
                <div className="card widget-traffic height-100">
                    <div className="card-header">
                        <h5>All Traffic Channels</h5>
                        <Button type="button" label="Pie/Doughnut Data" className={classNames('p-button-text', { 'p-ml-auto': !isRTL, 'p-mr-auto': isRTL })} onClick={() => togglePieDoughnut()}></Button>
                        <Button type="button" label="Semi/Full Data" className="p-button-text p-mx-2" onClick={changePieDoughnutDataView}></Button>
                    </div>
                    <div className="p-d-flex p-grid">
                        <div className="p-col-12 p-md-6 left p-d-flex p-flex-column p-jc-evenly">
                            <div className="total p-d-flex p-flex-column">
                                <span className="title p-mb-2">Total</span>
                                <span className="value p-mb-5">66.761</span>
                            </div>

                            <div className="info p-d-flex p-jc-between">
                                <div className="organic p-d-flex p-flex-column">
                                    <span className="title p-mb-1">Organic</span>
                                    <span className="value">51.596</span>
                                </div>
                                <div className="direct p-d-flex p-flex-column">
                                    <span className="title p-mb-1">Direct</span>
                                    <span className="value">11.421</span>
                                </div>
                                <div className="referral p-d-flex p-flex-column">
                                    <span className="title p-mb-1">Referral</span>
                                    <span className="value">3.862</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-6 right p-d-flex p-jc-center">
                            <Chart ref={pie} type="pie" data={pieData} options={pieOptions}></Chart>
                        </div>
                    </div >
                </div >
            </div >
        </div >

    )
}
