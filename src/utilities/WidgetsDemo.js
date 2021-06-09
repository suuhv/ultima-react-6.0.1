import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Menu } from 'primereact/menu';
import { Chart } from 'primereact/chart';
import { RTLContext } from '../App';

const overviewChartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
        data: [50, 64, 32, 24, 18, 27, 20, 36, 30],
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

const overviewChartData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
        data: [11, 30, 52, 35, 39, 20, 14, 18, 29],
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

const overviewChartData3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
        data: [20, 29, 39, 36, 45, 24, 28, 20, 15],
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

const overviewChartData4 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
        data: [30, 39, 50, 21, 33, 18, 10, 24, 20],
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

const overviewChartOptions = {
    legend: {
        display: false
    },
    responsive: true,
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

const setOverviewColors = (colorMode) => {
    const { whiteBgColor, whiteBorderColor } = getOverviewColors(colorMode);

    overviewChartData1.datasets[0].borderColor[0] = whiteBorderColor;
    overviewChartData1.datasets[0].backgroundColor[0] = whiteBgColor;

    overviewChartData2.datasets[0].borderColor[0] = whiteBorderColor;
    overviewChartData2.datasets[0].backgroundColor[0] = whiteBgColor;

    overviewChartData3.datasets[0].borderColor[0] = whiteBorderColor;
    overviewChartData3.datasets[0].backgroundColor[0] = whiteBgColor;

    overviewChartData4.datasets[0].borderColor[0] = whiteBorderColor;
    overviewChartData4.datasets[0].backgroundColor[0] = whiteBgColor;
}

const getOverviewColors = (colorMode) => {
    const isLight = colorMode === 'light';
    return {
        whiteBorderColor: isLight ? '#ffffff' : '#ffffff',
        whiteBgColor: isLight ? 'rgba(255,255,255,.35)' : 'rgba(255,255,255,.35)',
    }
}

const getChartData = (colorMode) => {
    const isLight = colorMode === 'light';
    const completedColors = {
        borderColor: isLight ? '#00ACC1' : '#4DD0E1',
        backgroundColor: isLight ? 'rgb(0, 172, 193, .3)' : 'rgb(77, 208, 225, .3)'
    };
    const canceledColors = {
        borderColor: isLight ? '#FF9800' : '#FFB74D',
        backgroundColor: isLight ? 'rgb(255, 152, 0, .3)' : 'rgb(255, 183, 77, .3)'
    };

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Completed',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: completedColors.borderColor,
                backgroundColor: completedColors.backgroundColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: 'Cancelled',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: canceledColors.borderColor,
                backgroundColor: canceledColors.backgroundColor,
                borderWidth: 2,
                fill: true
            }
        ]
    };
}

const getChartOptions = () => {
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
    const gridLinesColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';
    return {
        legend: {
            display: true,
            labels: {
                fontColor: textColor
            }
        },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: textColor
                },
                gridLines: {
                    color: gridLinesColor
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: textColor
                },
                gridLines: {
                    color: gridLinesColor
                }
            }]
        }
    }

}

let chartOptions = getChartOptions();

export const WidgetsDemo = (props) => {

    const menu15 = useRef(null);
    const menu16 = useRef(null);
    const menu17 = useRef(null);
    const menu18 = useRef(null);
    const isRTL = useContext(RTLContext);

    const [chartData, setChartData] = useState(getChartData(props.colorMode));

    const updateCharts = () => {
        setOverviewColors(props.colorMode);
        setChartData(getChartData(props.colorMode));
        chartOptions = getChartOptions();
    }

    useEffect(() => {
        updateCharts();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (props.isNewThemeLoaded) {
            updateCharts();
            props.onNewThemeChange(false);
        }
    }, [props.isNewThemeLoaded, props.onNewThemeChange]); // eslint-disable-line react-hooks/exhaustive-deps



    return (
        <div className="p-grid dashboard">
            <div className="p-col-12 p-md-6 p-lg-3">
                <div className="card overview-box p-d-flex p-flex-column p-pt-2 cyan-bgcolor solid-surface-text-color">
                    <div className="p-d-flex p-ai-center">
                        <i className="pi pi-shopping-cart"></i>
                        <h6 className={classNames('p-m-0', { 'p-pl-2': !isRTL, 'p-pr-2': isRTL })}>Orders</h6>
                        <div className={classNames({ 'p-ml-auto': !isRTL, 'p-mr-auto': isRTL })}>
                            <Button type="button" icon="pi pi-ellipsis-h" className="p-button-rounded p-button-text solid-surface-text-color" onClick={(event) => menu15.current.toggle(event)}></Button>
                            <Menu ref={menu15} popup={true} model={[{ label: 'Update', icon: 'pi pi-fw pi-refresh' }, { label: 'Edit', icon: 'pi pi-fw pi-pencil' }]}></Menu>
                        </div>
                    </div>
                    <div className="p-d-flex p-jc-between p-mt-3 p-flex-wrap">
                        <div className="p-d-flex p-flex-column">
                            <span className="p-mb-1 fs-xlarge">640</span>
                            <span className="overview-status p-p-1 fs-small">1420 Completed</span>
                        </div>
                        <div className="p-d-flex p-ai-end">
                            <Chart type="line" data={overviewChartData1} options={overviewChartOptions} responsive={true} height="60px" width="160px"></Chart>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-md-6 p-lg-3">
                <div className="card overview-box p-d-flex p-flex-column p-pt-2 orange-bgcolor solid-surface-text-color">
                    <div className="p-d-flex p-ai-center">
                        <i className="pi pi-dollar"></i>
                        <h6 className={classNames('p-m-0', { 'p-pl-2': !isRTL, 'p-pr-2': isRTL })}>Revenue</h6>
                        <div className={classNames({ 'p-ml-auto': !isRTL, 'p-mr-auto': isRTL })}>
                            <Button type="button" icon="pi pi-ellipsis-h" className="p-button-rounded p-button-text solid-surface-text-color" onClick={(event) => menu16.toggle(event)}></Button>
                            <Menu ref={menu16} popup={true} model={[{ label: 'Update', icon: 'pi pi-fw pi-refresh' }, { label: 'Edit', icon: 'pi pi-fw pi-pencil' }]}></Menu>
                        </div>
                    </div>
                    <div className="p-d-flex p-jc-between p-mt-3 p-flex-wrap">
                        <div className="p-d-flex p-flex-column">
                            <span className="p-mb-1 fs-xlarge">$57K</span>
                            <span className="overview-status p-p-1 fs-small">$9,640 Income</span>
                        </div>
                        <div className="p-d-flex p-ai-end">
                            <Chart type="line" data={overviewChartData2} options={overviewChartOptions} responsive={true} height="60px" width="160px"></Chart>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-md-6 p-lg-3">
                <div className="card overview-box p-d-flex p-flex-column p-pt-2 pink-bgcolor solid-surface-text-color">
                    <div className="p-d-flex p-ai-center">
                        <i className="pi pi-users"></i>
                        <h6 className={classNames('p-m-0', { 'p-pl-2': !isRTL, 'p-pr-2': isRTL })}>Customers</h6>
                        <div className={classNames({ 'p-ml-auto': !isRTL, 'p-mr-auto': isRTL })}>
                            <Button type="button" icon="pi pi-ellipsis-h" className="p-button-rounded p-button-text solid-surface-text-color" onClick={(event) => menu17.current.toggle(event)}></Button>
                            <Menu ref={menu17} popup={true} model={[{ label: 'Update', icon: 'pi pi-fw pi-refresh' }, { label: 'Edit', icon: 'pi pi-fw pi-pencil' }]}></Menu>
                        </div>
                    </div>
                    <div className="p-d-flex p-jc-between p-mt-3 p-flex-wrap">
                        <div className="p-d-flex p-flex-column">
                            <span className="p-mb-1 fs-xlarge">8572</span>
                            <span className="overview-status p-p-1 fs-small">25402 Registered</span>
                        </div>
                        <div className="p-d-flex p-ai-end">
                            <Chart type="line" data={overviewChartData3} options={overviewChartOptions} responsive={true} height="60px" width="160px"></Chart>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-md-6 p-lg-3">
                <div className="card overview-box p-d-flex p-flex-column p-pt-2 purple-bgcolor solid-surface-text-color">
                    <div className="p-d-flex p-ai-center">
                        <i className="pi pi-comments"></i>
                        <h6 className={classNames('p-m-0', { 'p-pl-2': !isRTL, 'p-pr-2': isRTL })}>Comments</h6>
                        <div className={classNames({ 'p-ml-auto': !isRTL, 'p-mr-auto': isRTL })}>
                            <Button type="button" icon="pi pi-ellipsis-h" className="p-button-rounded p-button-text solid-surface-text-color" onClick={(event) => menu18.current.toggle(event)}></Button>
                            <Menu ref={menu18} popup={true} model={[{ label: 'Update', icon: 'pi pi-fw pi-refresh' }, { label: 'Edit', icon: 'pi pi-fw pi-pencil' }]}></Menu>
                        </div>
                    </div>
                    <div className="p-d-flex p-jc-between p-mt-3 p-flex-wrap">
                        <div className="p-d-flex p-flex-column">
                            <span className="p-mb-1 fs-xlarge">805</span>
                            <span className="overview-status p-p-1 fs-small">85 Responded</span>
                        </div>
                        <div className="p-d-flex p-ai-end">
                            <Chart type="line" data={overviewChartData4} options={overviewChartOptions} responsive={true} height="60px" width="160px"></Chart>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="card height-100 p-d-flex p-flex-column">
                    <div className="p-d-flex p-jc-center p-p-3 rounded-normal content-alt-bgcolor">
                        <img src="assets/layout/images/widgets/feature-faq.svg" alt="feature-faq" />
                    </div>
                    <div className="p-d-flex p-flex-column p-ai-center p-mt-3">
                        <h5 className="p-mb-2">Frequently Asked Questions</h5>
                        <p className="muted-text">We answer all your burning questions about Ultima, and some probably never even thought to ask.</p>
                    </div>
                    <div className="p-d-flex p-jc-between p-ai-center p-pt-3 p-mt-auto">
                        <small className="muted-text">46 Questions</small>
                        <Button label="VIEW FAQ"></Button>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="card height-100 p-d-flex p-flex-column">
                    <div className="p-d-flex p-jc-center p-p-3 rounded-normal content-alt-bgcolor">
                        <img src="assets/layout/images/widgets/feature-onboarding.svg" alt="feature-onboarding" />
                    </div>
                    <div className="p-d-flex p-flex-column p-ai-center p-mt-3">
                        <h5 className="p-mb-2">Onboarding</h5>
                        <p className="muted-text">Follow the steps to start your Ultima adventure within a few days.</p>
                    </div>
                    <div className="p-d-flex p-jc-between p-ai-center p-pt-3 p-mt-auto">
                        <small className="muted-text">3 Steps Left</small>
                        <Button label="VIEW STEPS"></Button>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="card height-100 p-d-flex p-flex-column">
                    <div className="p-d-flex p-jc-center p-p-3 rounded-normal content-alt-bgcolor">
                        <img src="assets/layout/images/widgets/feature-security.svg" alt="feature-security" />
                    </div>
                    <div className="p-d-flex p-flex-column p-ai-center p-mt-3">
                        <h5 className="p-mb-2">Security Center</h5>
                        <p className="muted-text">Security surveillance management and threat protection for your Ultima cloud workloads.</p>
                    </div>
                    <div className="p-d-flex p-jc-between p-ai-center p-pt-3 p-mt-auto">
                        <small className="muted-text">3 Steps Left</small>
                        <Button label="VIEW CENTER"></Button>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="card height-100">
                    <div className="card-header">
                        <h5>Documents</h5>
                    </div>

                    <ul className="widget-list">
                        <li className="p-d-flex p-py-3">
                            <div className="p-d-flex p-ai-center">
                                <i className="pi pi-star p-p-2 lightblue-bgcolor white-color widget-list-item-radius"></i>
                                <div className={classNames({ 'p-ml-2': !isRTL, 'p-mr-2': isRTL })}>
                                    <div>Design Team | Sprint 021</div>
                                    <small className="muted-text">21MB</small>
                                </div>
                            </div>
                            <Button type="button" icon="pi pi-copy" className={classNames('p-button-outlined', { 'p-ml-auto p-mr-1': !isRTL, 'p-mr-auto p-ml-1': isRTL })}></Button>
                            <Button type="button" icon="pi pi-arrow-down" className="p-button-outlined"></Button>
                        </li>

                        <li className="p-d-flex p-py-3">
                            <div className="p-d-flex p-ai-center">
                                <i className="pi pi-file-excel p-p-2 yellow-bgcolor text-color widget-list-item-radius"></i>
                                <div className={classNames({ 'p-ml-2': !isRTL, 'p-mr-2': isRTL })}>
                                    <div>Elite Report 2020-Q4</div>
                                    <small className="muted-text">56.00MB</small>
                                </div>
                            </div>
                            <Button type="button" icon="pi pi-copy" className={classNames('p-button-outlined', { 'p-ml-auto p-mr-1': !isRTL, 'p-mr-auto p-ml-1': isRTL })}></Button>
                            <Button type="button" icon="pi pi-arrow-down" className="p-button-outlined"></Button>
                        </li>

                        <li className="p-d-flex p-py-3">
                            <div className="p-d-flex p-ai-center">
                                <i className="pi pi-image p-p-2 teal-bgcolor white-color widget-list-item-radius"></i>
                                <div className={classNames({ 'p-ml-2': !isRTL, 'p-mr-2': isRTL })}>
                                    <div>Ultima Marketing Assets</div>
                                    <small className="muted-text">1.29GB</small>
                                </div>
                            </div>
                            <Button type="button" icon="pi pi-copy" className={classNames('p-button-outlined', { 'p-ml-auto p-mr-1': !isRTL, 'p-mr-auto p-ml-1': isRTL })}></Button>
                            <Button type="button" icon="pi pi-arrow-down" className="p-button-outlined"></Button>
                        </li>

                        <li className="p-d-flex p-py-3">
                            <div className="p-d-flex p-ai-center">
                                <i className="pi pi-file p-p-2 bluegrey-bgcolor white-color widget-list-item-radius"></i>
                                <div className={classNames({ 'p-ml-2': !isRTL, 'p-mr-2': isRTL })}>
                                    <div>Ultima Remastered Docs</div>
                                    <small className="muted-text">26.54KB</small>
                                </div>
                            </div>
                            <Button type="button" icon="pi pi-copy" className={classNames('p-button-outlined', { 'p-ml-auto p-mr-1': !isRTL, 'p-mr-auto p-ml-1': isRTL })}></Button>
                            <Button type="button" icon="pi pi-arrow-down" className="p-button-outlined"></Button>
                        </li>

                        <li className="p-d-flex p-py-3">
                            <div className="p-d-flex p-ai-center">
                                <i className="pi pi-key p-p-2 purple-bgcolor white-color widget-list-item-radius"></i>
                                <div className={classNames({ 'p-ml-2': !isRTL, 'p-mr-2': isRTL })}>
                                    <div>Keychain</div>
                                    <small className="muted-text">320.09KB</small>
                                </div>
                            </div>
                            <Button type="button" icon="pi pi-copy" className={classNames('p-button-outlined', { 'p-ml-auto p-mr-1': !isRTL, 'p-mr-auto p-ml-1': isRTL })}></Button>
                            <Button type="button" icon="pi pi-arrow-down" className="p-button-outlined"></Button>
                        </li>

                        <li className="p-d-flex p-py-3">
                            <div className="p-d-flex p-ai-center">
                                <i className="pi pi-th-large p-p-2 pink-bgcolor white-color widget-list-item-radius"></i>
                                <div className={classNames({ 'p-ml-2': !isRTL, 'p-mr-2': isRTL })}>
                                    <div>U03 - Feedback Session</div>
                                    <small className="muted-text">128.45KB</small>
                                </div>
                            </div>
                            <Button type="button" icon="pi pi-copy" className={classNames('p-button-outlined', { 'p-ml-auto p-mr-1': !isRTL, 'p-mr-auto p-ml-1': isRTL })}></Button>
                            <Button type="button" icon="pi pi-arrow-down" className="p-button-outlined"></Button>
                        </li>
                    </ul>

                    <Button type="button" label="Download All" icon="pi pi-cloud-download" className="p-button-text p-button-plain p-mt-4"></Button>
                </div>
            </div>

            <div className="p-col-12 p-lg-8">
                <div className="p-grid p-m-0 widget-pricing">
                    <div className="p-col-12 p-xl-4">
                        <div className="card p-p-0">
                            <div className="p-d-flex p-flex-column p-ai-center indigo-bgcolor white-color p-p-6 fs-large">
                                <span>BASIC</span>
                                <h1 className="p-text-bold">$5</h1>
                                <span>Monthly</span>
                            </div>
                            <ul className="options">
                                <li><i className="pi pi-check"></i><span>Responsive</span></li>
                                <li><i className="pi pi-check"></i><span>Push Messages</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-col-12 p-xl-4">
                        <div className="card p-p-0">
                            <div className="p-d-flex p-flex-column p-ai-center pink-bgcolor white-color p-p-6 fs-large">
                                <span>STANDARD</span>
                                <h1 className="p-text-bold">$25</h1>
                                <span>Monthly</span>
                            </div>
                            <ul className="options">
                                <li><i className="pi pi-check"></i><span>Responsive</span></li>
                                <li><i className="pi pi-check"></i><span>Push Messages</span></li>
                                <li><i className="pi pi-check"></i><span>7/24 Support</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-col-12 p-xl-4 pricing-box pricing-professional">
                        <div className="card p-p-0">
                            <div className="p-d-flex p-flex-column p-ai-center cyan-bgcolor white-color p-p-6 fs-large">
                                <span>PROFESSIONAL</span>
                                <h1 className="p-text-bold">$50</h1>
                                <span>Monthly</span>
                            </div>
                            <ul className="options">
                                <li><i className="pi pi-check"></i><span>Responsive</span></li>
                                <li><i className="pi pi-check"></i><span>Push Messages</span></li>
                                <li><i className="pi pi-check"></i><span>7/24 Support</span></li>
                                <li><i className="pi pi-check"></i><span>Free Shipping</span></li>
                                <li><i className="pi pi-check"></i><span>Unlimited Bandwidth</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="card height-100 widget-map">
                    <div className="map-container p-p-3">
                        <span className="p-input-icon-left p-d-block p-fluid">
                            <i className="pi pi-search"></i>
                            <InputText placeholder="Search for delivery" />
                        </span>
                    </div>
                    <div className="p-mt-3 p-d-flex p-ai-center">
                        <div className="actions">
                            <Button type="button" icon="pi pi-share-alt" className="p-button-rounded p-button-text"></Button>
                            <Button type="button" icon="pi pi-compass" className="p-button-rounded p-button-text"></Button>
                            <Button type="button" icon="pi pi-heart" className="p-button-rounded p-button-text"></Button>
                        </div>
                        <span className={classNames('muted-text', { 'p-ml-auto': !isRTL, 'p-mr-auto': isRTL })}>View on </span>
                        <Button type="button" label="Google Maps" className="p-button-text p-button-plain p-px-1"></Button>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="card height-100">
                    <div className="card-header">
                        <h5 className="p-mb-0">Overview</h5>
                    </div>
                    <div className="muted-text fs-small p-my-2">Last 7 Months</div>
                    <hr className="p-mt-0" />

                    <ul className="widget-list">
                        <li className="p-mb-3">
                            <div className="p-d-flex p-jc-between p-mb-2">
                                <span>W1</span>
                                <small className="muted-text">41/100</small>
                            </div>
                            <ProgressBar value={41} showValue={false}></ProgressBar>
                        </li>
                        <li className="p-mb-3">
                            <div className="p-d-flex p-jc-between p-mb-2">
                                <span>W2</span>
                                <small className="muted-text">23/100</small>
                            </div>
                            <ProgressBar value={23} showValue={false}></ProgressBar>
                        </li>
                        <li className="p-mb-3">
                            <div className="p-d-flex p-jc-between p-mb-2">
                                <span>W3</span>
                                <small className="muted-text">81/100</small>
                            </div>
                            <ProgressBar value={81} showValue={false}></ProgressBar>
                        </li>
                        <li className="p-mb-3">
                            <div className="p-d-flex p-jc-between p-mb-2">
                                <span>W4</span>
                                <small className="muted-text">33/100</small>
                            </div>
                            <ProgressBar value={33} showValue={false}></ProgressBar>
                        </li>
                        <li className="p-mb-3">
                            <div className="p-d-flex p-jc-between p-mb-2">
                                <span>W5</span>
                                <small className="muted-text">37/100</small>
                            </div>
                            <ProgressBar value={37} showValue={false}></ProgressBar>
                        </li>
                        <li className="p-mb-3">
                            <div className="p-d-flex p-jc-between p-mb-2">
                                <span>W6</span>
                                <small className="muted-text">12/100</small>
                            </div>
                            <ProgressBar value={12} showValue={false}></ProgressBar>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="card height-100 p-d-flex p-flex-column p-ai-center">
                    <img className="p-mt-3" src="assets/layout/images/widgets/asset-profile.png" alt="profile" />
                    <h5 className="p-mb-1">John Doe</h5>

                    <div className="location p-d-flex p-ai-center p-mb-5">
                        <i className={classNames('pi pi-map-marker p-mr-1', { 'p-mr-1': !isRTL, 'p-ml-1': isRTL })}></i>
                        <span>London UK</span>
                    </div>

                    <div className="p-d-flex p-jc-between p-as-stretch p-px-3 p-mt-6 p-mb-3">
                        <div className="p-d-flex p-flex-column p-ai-center">
                            <span>FRIENDS</span>
                            <span className="fs-large p-text-bold indigo-color p-mt-2">660</span>
                        </div>
                        <div className="p-d-flex p-flex-column p-ai-center">
                            <span>COMMENTS</span>
                            <span className="fs-large p-text-bold indigo-color p-mt-2">98K</span>
                        </div>
                        <div className="p-d-flex p-flex-column p-ai-center">
                            <span>PROJECTS</span>
                            <span className="fs-large p-text-bold indigo-color p-mt-2">51</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-md-6 p-mb-4">
                <div className="card widget-overlay p-mt-5 height-100">
                    <div className="overlay-header p-p-3">
                        <Chart type="line" data={chartData} options={chartOptions} responsive={true} height="100%"></Chart>
                    </div>
                    <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
                        <span className="fs-xlarge p-mb-1 cyan-color p-text-bold">5.758</span>
                        <span className="p-mb-3 muted-text">Daily Users</span>
                        <i className="pi pi-users p-p-3 cyan-bgcolor white-color rounded-circle fs-xlarge"></i>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-md-6 p-mb-4">
                <div className="card widget-overlay p-mt-5 height-100">
                    <div className="overlay-header">
                        <img src="assets/layout/images/widgets/image-blog.jpg" alt="blog" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
                        <h4>A New Headquarters</h4>
                        <span className="p-mb-3 cyan-bgcolor white-color p-p-2">Corporate News</span>
                        <span className="p-text-center muted-text description">The decision has been made. To mark the beginning of a new chapter in its history, Ultima will move from the Quartier in Tokyo to a new location in Hong Kong. The new location – near the airport – reflects the requirements of an internationally active brand. New Office concepts provide modern way of close collaboration.</span>
                    </div>
                    <div className="p-d-flex p-ai-center p-mt-4">
                        <Button type="button" label="Learn More" icon="pi pi-plus-circle" className="p-button-text p-button-plain"></Button>
                        <Button type="button" icon="pi pi-share-alt" className={classNames('p-button-rounded p-button-text', { 'p-ml-auto': !isRTL, 'p-mr-auto': isRTL })}></Button>
                        <Button type="button" icon="pi pi-heart" className="p-button-rounded p-button-text"></Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

