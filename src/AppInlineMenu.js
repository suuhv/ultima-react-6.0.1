import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { useContext } from 'react';
import { RTLContext } from './App';
import { Tooltip } from 'primereact/tooltip';

const AppInlineMenu = (props) => {

    const isRTL = useContext(RTLContext);
    const menuKey = props.menuKey || 'inline-menu';

    const inlineMenuClassName = classNames('layout-inline-menu', {
        'layout-inline-menu-active': props.inlineMenuActive[props.menuKey]
    }, props.className);

    const isSlim = () => {
        return props.menuMode === 'slim';
    }

    return (
        <div className={inlineMenuClassName} style={props.style}>
            {isSlim() && <Tooltip target=".avatarTooltip" />}

            <button data-pr-tooltip="Amy Elsner" className={classNames('avatarTooltip layout-inline-menu-action p-link p-d-flex p-dir-row p-ai-center', { 'p-p-3 p-p-lg-1 p-py-3': props.horizontal, 'p-p-3': !props.horizontal })} onClick={(e) => props.onInlineMenuClick(e, menuKey)}>
                <img src="assets/demo/images/avatar/amyelsner.png" alt="avatar" style={{ width: '32px', height: '32px' }} />
                <span className={classNames('p-d-flex p-flex-column', { 'p-ml-2': !isRTL, 'p-mr-2': isRTL })}>
                    <span className="p-text-bold">Amy Elsner</span>
                    <small>Webmaster</small>
                </span>
                <i className={classNames('layout-inline-menu-icon pi pi-angle-down', { 'p-ml-auto': !isRTL, 'p-mr-auto': isRTL })}></i>
            </button>

            <CSSTransition classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={props.inlineMenuActive[menuKey]} unmountOnExit>
                <>
                    <ul className="layout-inline-menu-action-panel">
                        <li className="layout-inline-menu-action-item tooltip" data-pr-tooltip="Settings">
                            <button className="p-d-flex p-flex-row p-ai-center p-link" >
                                <i className="pi pi-cog pi-fw"></i>
                                <span>Settings</span>
                            </button>
                        </li>
                        <li className="layout-inline-menu-action-item tooltip" data-pr-tooltip="Terms of Usage" >
                            <button className="p-d-flex p-flex-row p-ai-center p-link" >
                                <i className="pi pi-file-o pi-fw"></i>
                                <span>Terms of Usage</span>
                            </button>
                        </li>
                        <li className="layout-inline-menu-action-item tooltip" data-pr-tooltip="Support">
                            <button className="p-d-flex p-flex-row p-ai-center p-link" >
                                <i className="pi pi-compass pi-fw"></i>
                                <span>Support</span>
                            </button>
                        </li>
                        <li className="layout-inline-menu-action-item tooltip" data-pr-tooltip="Logout" >
                            <button className="p-d-flex p-flex-row p-ai-center p-link">
                                <i className="pi pi-power-off pi-fw"></i>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                    {isSlim() && <Tooltip target=".tooltip" />}
                </>
            </CSSTransition>

        </div>
    );
}

export default AppInlineMenu;
