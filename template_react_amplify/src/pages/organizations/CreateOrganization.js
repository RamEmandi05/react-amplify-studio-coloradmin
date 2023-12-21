import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from '../../components/panel/panel.jsx';
import Highlight from 'react-highlight';

import { AddOrganization } from '../../ui-components';


function CreateOrganization() {
	const [code1, setCode1] = useState();
	const [code2, setCode2] = useState();
	const [code3, setCode3] = useState();
	const [code4, setCode4] = useState();
	const [code5, setCode5] = useState();
	const [code6, setCode6] = useState();
	const [code7, setCode7] = useState();
	const [code8, setCode8] = useState();
	const [code9, setCode9] = useState();

	function handleOnChange() {

	}

	useEffect(() => {
		fetch('/assets/data/table-elements/code-1.json').then(function (response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/table-elements/code-2.json').then(function (response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/table-elements/code-3.json').then(function (response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/table-elements/code-4.json').then(function (response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/table-elements/code-5.json').then(function (response) { return response.text(); }).then((html) => { setCode5(html); });
		fetch('/assets/data/table-elements/code-6.json').then(function (response) { return response.text(); }).then((html) => { setCode6(html); });
		fetch('/assets/data/table-elements/code-7.json').then(function (response) { return response.text(); }).then((html) => { setCode7(html); });
		fetch('/assets/data/table-elements/code-8.json').then(function (response) { return response.text(); }).then((html) => { setCode8(html); });
		fetch('/assets/data/table-elements/code-9.json').then(function (response) { return response.text(); }).then((html) => { setCode9(html); });
	});

	return (
		<div>
			<ol className="breadcrumb float-xl-end">
				<li className="breadcrumb-item"><Link to="/table/basic">Home</Link></li>
				<li className="breadcrumb-item"><Link to="/table/basic">Organizations</Link></li>
				<li className="breadcrumb-item active">Table Elements</li>
			</ol>
			<h1 className="page-header">Create Organization <small>header small text goes here...</small></h1>

			<div className="row">
				<div className="col-xl-12">

					<Panel>
						<PanelHeader>Create Organization</PanelHeader>
						<PanelBody>
							<div className="row">
								<div className="col-xl-6">
									<div className="card border-0 mb-3 overflow-hidden ">
										<div className="card-body">
											<div className="row">
												<AddOrganization></AddOrganization>
											</div>
										</div>
									</div>
								</div>
							</div>
						</PanelBody>
						 
					</Panel>

				</div>

			</div>
		</div>
	)
}

export default CreateOrganization;