import React, { useContext } from 'react';
import classNames from 'classnames';
import { Button } from 'primereact/button';
import { RTLContext } from './App';

const AppFooter = (props) => {

    const isRTL = useContext(RTLContext);

    return <div className="layout-footer p-d-flex p-ai-center p-p-4 p-shadow-2">
        <img id="footer-logo" src={`assets/layout/images/footer-${props.colorMode === 'light' ? 'ultima' : 'ultima-dark'}.svg`} alt="ultima-footer-logo" />
        <Button type="button" icon="pi pi-github fs-large" className={classNames('p-button-rounded p-button-text p-button-plain', { 'p-ml-auto p-mr-2': !isRTL, 'p-ml-2 p-mr-auto': isRTL })}></Button>
        <Button type="button" icon="pi pi-facebook fs-large" className={classNames('p-button-rounded p-button-text p-button-plain', { 'p-mr-2': !isRTL, 'p-ml-2': isRTL })}></Button>
        <Button type="button" icon="pi pi-twitter fs-large" className={classNames('p-button-rounded p-button-text p-button-plain', { 'p-mr-2': !isRTL, 'p-ml-2': isRTL })}></Button>
    </div>

}

export default AppFooter;