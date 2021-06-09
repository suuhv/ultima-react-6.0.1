import React, { useContext, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { MegaMenu } from 'primereact/megamenu';
import { useHistory } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { CSSTransition } from 'react-transition-group';
import { RTLContext } from './App';

const AppTopbar = (props) => {

    const isRTL = useContext(RTLContext);
    const history = useHistory();

    // Fixed for 6.1.0
    // eslint-disable-next-line
    const searchPanel = useRef(null)

    useEffect(() => {
        // Fixed for 6.1.0
        /*if (props.searchActive) {
            searchPanel.current.element.focus();
        }*/
    }, [props.searchActive])

    const onInputKeydown = (event) => {
        const key = event.which;

        //escape, tab and enter
        if (key === 27 || key === 9 || key === 13) {
            props.onSearch(false);
        }
    };

    const model = [
        {
            label: 'UI KIT',
            items: [
                [
                    {
                        label: 'UI KIT 1',
                        items: [
                            { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', command: () => { history.push('/uikit/formlayout') } },
                            { label: 'Input', icon: 'pi pi-fw pi-check-square', command: () => { history.push('/uikit/input') } },
                            { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', command: () => { history.push('/uikit/floatlabel') } },
                            { label: 'Button', icon: 'pi pi-fw pi-mobile', command: () => { history.push('/uikit/button') } },
                            { label: 'File', icon: 'pi pi-fw pi-file', command: () => { history.push('/uikit/file') } }
                        ]
                    }
                ],
                [
                    {
                        label: 'UI KIT 2',
                        items: [
                            { label: 'Table', icon: 'pi pi-fw pi-table', command: () => { history.push('/uikit/table') } },
                            { label: 'List', icon: 'pi pi-fw pi-list', command: () => { history.push('/uikit/list') } },
                            { label: 'Tree', icon: 'pi pi-fw pi-share-alt', command: () => { history.push('/uikit/tree') } },
                            { label: 'Panel', icon: 'pi pi-fw pi-tablet', command: () => { history.push('/uikit/panel') } },
                            { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', command: () => { history.push('/uikit/chart') } }
                        ]
                    }
                ],
                [
                    {
                        label: 'UI KIT 3',
                        items: [
                            { label: 'Overlay', icon: 'pi pi-fw pi-clone', command: () => { history.push('/uikit/overlay') } },
                            { label: 'Menu', icon: 'pi pi-fw pi-bars', command: () => { history.push('/uikit/menu') } },
                            { label: 'Message', icon: 'pi pi-fw pi-comment', command: () => { history.push('/uikit/message') } },
                            { label: 'Misc', icon: 'pi pi-fw pi-circle-off', command: () => { history.push('/uikit/misc') } }
                        ]
                    }
                ]
            ]
        },
        {
            label: 'UTILITIES',
            items: [
                [
                    {
                        label: 'UTILITIES 1',
                        items: [
                            { label: 'Display', icon: 'pi pi-fw pi-desktop', command: () => { history.push('/utilities/display') } },
                            { label: 'Elevation', icon: 'pi pi-fw pi-external-link', command: () => { history.push('/utilities/elevation') } }
                        ]
                    },
                    {
                        label: 'UTILITIES 2',
                        items: [
                            { label: 'FlexBox', icon: 'pi pi-fw pi-directions', command: () => { history.push('/utilities/flexbox') } }
                        ]
                    }
                ],
                [
                    {
                        label: 'UTILITIES 3',
                        items: [
                            { label: 'Icons', icon: 'pi pi-fw pi-search', command: () => { history.push('/utilities/icons') } }
                        ]
                    },
                    {
                        label: 'UTILITIES 4',
                        items: [
                            { label: 'Text', icon: 'pi pi-fw pi-pencil', command: () => { history.push('/utilities/text') } },
                            { label: 'Widgets', icon: 'pi pi-fw pi-star-o', command: () => { history.push('/utilities/widgets') } }
                        ]
                    }
                ],
                [
                    {
                        label: 'UTILITIES 5',
                        items: [
                            { label: 'Grid System', icon: 'pi pi-fw pi-th-large', command: (event) => { history.push('/utilities/grid') } },
                            { label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', command: (event) => { history.push('/utilities/spacing') } },
                            { label: 'Typography', icon: 'pi pi-fw pi-align-center', command: (event) => { history.push('/utilities/typography') } }
                        ]
                    }
                ],
            ]
        }
    ];

    return (
        <div className="layout-topbar p-shadow-4">
            <div className="layout-topbar-left">
                <button type="button" style={{ cursor: 'pointer' }} className="layout-topbar-logo p-link" onClick={() => history.push('/')}>
                    <img id="app-logo" src="assets/layout/images/logo-light.svg" alt="ultima-layout" style={{ height: '2.25rem' }} />
                </button>
                <button type="button" className="layout-menu-button p-shadow-6 p-link" onClick={props.onMenuButtonClick}>
                    <i className="pi pi-chevron-right"></i>
                </button>
                <button type="button" className="layout-topbar-mobile-button p-link">
                    <i className="pi pi-ellipsis-v fs-large" onClick={props.onMobileTopbarButtonClick}></i>
                </button>
            </div>

            <div className={classNames('layout-topbar-right', { 'layout-topbar-mobile-active': props.mobileTopbarActive })}>
                <div className="layout-topbar-actions-left">
                    <MegaMenu model={model} className="layout-megamenu" />
                </div>
                <div className="layout-topbar-actions-right">
                    <ul className="layout-topbar-items">
                        <li className="layout-topbar-item layout-search-item">
                            <button className="layout-topbar-action rounded-circle p-link" onClick={() => props.onSearch(true)}>
                                <i className="pi pi-search fs-large"></i>
                            </button>
                            <CSSTransition classNames="p-toggleable" timeout={{ enter: 1000, exit: 450 }} in={props.searchActive} unmountOnExit>
                                <div className="layout-search-panel p-inputgroup">
                                    <span className="p-inputgroup-addon"><i className="pi pi-search"></i></span>
                                    <InputText type="text" placeholder="Search" onKeyDown={onInputKeydown} />
                                    <span className="p-inputgroup-addon">
                                        <Button type="button" icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" onClick={() => props.onSearch(false)}></Button>
                                    </span>
                                </div>
                            </CSSTransition>
                        </li>

                        <li className="layout-topbar-item notifications">
                            <button className="layout-topbar-action rounded-circle p-link" onClick={(event) => props.onTopbarItemClick({ originalEvent: event, item: 'notifications' })}>
                                <span className="p-overlay-badge">
                                    <i className="pi pi-bell fs-large"></i>
                                    <span className="p-badge p-badge-warning p-badge-dot"></span>
                                </span>
                            </button>

                            <CSSTransition classNames="p-toggleable" timeout={{ enter: 1000, exit: 450 }} in={props.activeTopbarItem === 'notifications'} unmountOnExit>
                                <ul className="layout-topbar-action-panel p-shadow-6 fadeInDown">
                                    <li className="p-mb-3">
                                        <span className="p-px-3 fs-small">You have <b>4</b> new notifications</span>
                                    </li>
                                    <li className="layout-topbar-action-item">
                                        <div className="p-d-flex p-flex-row p-ai-center">
                                            <img src="assets/demo/images/avatar/avatar-1.png" alt="" />
                                            <div className={classNames('p-d-flex p-flex-column', { 'p-ml-3': !isRTL, 'p-mr-3': isRTL })} style={{ flexGrow: '1' }}>
                                                <div className="p-d-flex p-ai-center p-jc-between p-mb-1">
                                                    <span className="fs-small p-text-bold">Jerome Bell</span>
                                                    <small>42 mins ago</small>
                                                </div>
                                                <span className="fs-small">How to write content about your photographs?</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="layout-topbar-action-item">
                                        <div className="p-d-flex p-flex-row p-ai-center">
                                            <img src="assets/demo/images/avatar/avatar-2.png" alt="" />
                                            <div className={classNames('p-d-flex p-flex-column', { 'p-ml-3': !isRTL, 'p-mr-3': isRTL })} style={{ flexGrow: '1' }}>
                                                <div className="p-d-flex p-ai-center p-jc-between p-mb-1">
                                                    <span className="fs-small p-text-bold">Cameron Williamson</span>
                                                    <small>48 mins ago</small>
                                                </div>
                                                <span className="fs-small">Start a blog to reach your creative peak.</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="layout-topbar-action-item">
                                        <div className="p-d-flex p-flex-row p-ai-center">
                                            <img src="assets/demo/images/avatar/avatar-3.png" alt="" />
                                            <div className={classNames('p-d-flex p-flex-column', { 'p-ml-3': !isRTL, 'p-mr-3': isRTL })} style={{ flexGrow: '1' }}>
                                                <div className="p-d-flex p-ai-center p-jc-between p-mb-1">
                                                    <span className="fs-small p-text-bold">Anna Miles</span>
                                                    <small>1 day ago</small>
                                                </div>
                                                <span className="fs-small">Caring is the new marketing</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="layout-topbar-action-item">
                                        <div className="p-d-flex p-flex-row p-ai-center">
                                            <img src="assets/demo/images/avatar/avatar-4.png" alt="" />
                                            <div className={classNames('p-d-flex p-flex-column', { 'p-ml-3': !isRTL, 'p-mr-3': isRTL })} style={{ flexGrow: '1' }}>
                                                <div className="p-d-flex p-ai-center p-jc-between p-mb-1">
                                                    <span className="fs-small p-text-bold">Arlene Mccoy</span>
                                                    <small>4 day ago</small>
                                                </div>
                                                <span className="fs-small">Starting your traveling blog with Vasco.</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>
                        <li className="layout-topbar-item app">
                            <button className="layout-topbar-action rounded-circle p-link" onClick={(event) => props.onTopbarItemClick({ originalEvent: event, item: 'apps' })}>
                                <i className="pi pi-table fs-large"></i>
                            </button>

                            <CSSTransition classNames="p-toggleable" timeout={{ enter: 1000, exit: 450 }} in={props.activeTopbarItem === 'apps'} unmountOnExit>
                                <div className="layout-topbar-action-panel p-shadow-6">
                                    <div className="p-grid p-nogutter">
                                        <div className="layout-topbar-action-item p-col-4">
                                            <button className="p-d-flex p-ai-center p-flex-column text-color p-link">
                                                <i className="pi pi-image action indigo-bgcolor white-color"></i>
                                                <span>Products</span>
                                            </button>
                                        </div>
                                        <div className="layout-topbar-action-item p-col-4">
                                            <button className="p-d-flex p-ai-center p-flex-column text-color p-link">
                                                <i className="pi pi-file-pdf action orange-bgcolor white-color"></i>
                                                <span>Reports</span>
                                            </button>
                                        </div>
                                        <div className="layout-topbar-action-item p-col-4">
                                            <button className="p-d-flex p-ai-center p-flex-column text-color p-link">
                                                <i className="pi pi-dollar action teal-bgcolor white-color"></i>
                                                <span>Balance</span>
                                            </button>
                                        </div>
                                        <div className="layout-topbar-action-item p-col-4">
                                            <button className="p-d-flex p-ai-center p-flex-column text-color p-link">
                                                <i className="pi pi-cog action pink-bgcolor white-color"></i>
                                                <span>Settings</span>
                                            </button>
                                        </div>
                                        <div className="layout-topbar-action-item p-col-4">
                                            <button className="p-d-flex p-ai-center p-flex-column text-color p-link">
                                                <i className="pi pi-key action bluegrey-bgcolor white-color"></i>
                                                <span>Credentials</span>
                                            </button>
                                        </div>
                                        <div className="layout-topbar-action-item p-col-4">
                                            <button className="p-d-flex p-ai-center p-jc-center p-flex-column text-color p-link">
                                                <i className="pi pi-sitemap action cyan-bgcolor white-color"></i>
                                                <span>Sitemap</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        </li>
                        <li className="layout-topbar-item">
                            <button className="layout-topbar-action p-d-flex p-dir-row p-jc-center p-ai-center p-px-2 rounded-circle p-link" onClick={(event) => props.onTopbarItemClick({ originalEvent: event, item: 'profile' })}>
                                <img src="assets/demo/images/avatar/amyelsner.png" alt="avatar" style={{ width: '32px', height: '32px' }} />
                            </button>

                            <CSSTransition classNames="p-toggleable" timeout={{ enter: 1000, exit: 450 }} in={props.activeTopbarItem === 'profile'} unmountOnExit>
                                <ul className="layout-topbar-action-panel p-shadow-6">
                                    <li className="layout-topbar-action-item">
                                        <button className="p-d-flex p-flex-row p-ai-center p-link">
                                            <i className={classNames('pi pi-cog', { 'p-mr-2': !isRTL, 'p-ml-2': isRTL })}></i>
                                            <span>Settings</span>
                                        </button>
                                    </li>
                                    <li className="layout-topbar-action-item">
                                        <button className="p-d-flex p-flex-row p-ai-center p-link">
                                            <i className={classNames('pi pi-file-o', { 'p-mr-2': !isRTL, 'p-ml-2': isRTL })} ></i>
                                            <span>Terms of Usage</span>
                                        </button>
                                    </li>
                                    <li className="layout-topbar-action-item ">
                                        <button className="p-d-flex p-flex-row p-ai-center p-link">
                                            <i className={classNames('pi pi-compass', { 'p-mr-2': !isRTL, 'p-ml-2': isRTL })}></i>
                                            <span>Support</span>
                                        </button>
                                    </li>
                                    <li className="layout-topbar-action-item">
                                        <button className="p-d-flex p-flex-row p-ai-center p-link">
                                            <i className={classNames('pi pi-power-off', { 'p-mr-2': !isRTL, 'p-ml-2': isRTL })}></i>
                                            <span>Logout</span>
                                        </button>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>
                        <li className="layout-topbar-item">
                            <button type="button" className="layout-topbar-action rounded-circle p-link" onClick={props.onRightMenuButtonClick}>
                                <i className="pi fs-large pi-arrow-left"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );

}

export default AppTopbar;
