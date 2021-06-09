import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom';

const Login = () => {

	const history = useHistory();

	const goDashboard = () => {
		history.push('/');
	}

	return (
		<div className="pages-body login-page p-d-flex p-flex-column">
			<div className="topbar p-p-3 p-d-flex p-jc-between p-flex-row p-ai-center">
				<div className="topbar-left p-ml-3 p-d-flex">
					<div className="logo">
						<img src="assets/layout/images/logo2x.png" alt="" />
					</div>
				</div>
				<div className="topbar-right p-mr-3 p-d-flex">
					<Button onClick={goDashboard} type="button" label="DASHBOARD"
						className="p-button-text p-button-plain topbar-button"></Button>
				</div>
			</div>

			<div className="p-as-center p-mt-auto p-mb-auto">
				<div className="pages-panel card p-d-flex p-flex-column">
					<div className="pages-header p-px-3 p-py-1">
						<h2>LOGIN</h2>
					</div>

					<h4>Welcome</h4>

					<div className="pages-detail p-mb-6 p-px-6">Please use the form to sign-in Ultima network</div>

					<div className="input-panel p-d-flex p-flex-column p-px-3">
						<div className="p-inputgroup">
							<span className="p-inputgroup-addon">
								<i className="pi pi-envelope"></i>
							</span>
							<span className="p-float-label">
								<InputText type="text" id="inputgroup1" />
								<label htmlFor="inputgroup1">Email</label>
							</span>
						</div>

						<div className="p-inputgroup p-mt-3 p-mb-6">
							<span className="p-inputgroup-addon">
								<i className="pi pi-lock"></i>
							</span>
							<span className="p-float-label">
								<InputText type="password" id="inputgroup2" />
								<label htmlFor="inputgroup2">Password</label>
							</span>
						</div>

					</div>

					<Button className="login-button p-mb-6 p-px-3" label="LOGIN"></Button>

				</div>
			</div>
		</div>
	)
}

export default Login;
