import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom';

const Error = () => {

	const history = useHistory();

	const goDashboard = () => {
		history.push('/');
	}

	return (
		<div className="pages-body error-page p-d-flex p-flex-column">
			<div className="topbar p-p-3 p-d-flex p-jc-between p-flex-row p-ai-center">
				<div className="topbar-left p-ml-3 p-d-flex">
					<div className="logo">
						<img src="assets/layout/images/logo2x.png" alt="" />
					</div>
				</div>
				<div className="topbar-right p-mr-3 p-d-flex">
					<Button type="button" onClick={goDashboard} label="DASHBOARD"
						className="p-button-text p-button-plain topbar-button"></Button>
				</div>
			</div>

			<div className="p-as-center p-mt-auto p-mb-auto">
				<div className="pages-panel card p-d-flex p-flex-column">
					<div className="pages-header p-px-3 p-py-1">
						<h2>ERROR</h2>
					</div>
					<div className="card p-mt-3 p-px-6">
						<img src="assets/layout/images/pages/error.png" alt="" />
					</div>
					<div className="pages-detail p-pb-6">Requested resource is not available.</div>
					<Button onClick={goDashboard} type="button" label="GO BACK TO DASHBOARD" className="p-button-text"></Button>
				</div>
			</div>
		</div>
	)

}

export default Error;
