import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from '../../components/panel/panel.jsx';
import Highlight from 'react-highlight';
import { generateClient } from 'aws-amplify/api';
 
import {listOrganizations} from '../../graphql/queries.js';
 
const client = generateClient();


function ListOrganizations() {

	// const [code1, setCode1] = useState();
	// const [code2, setCode2] = useState();
	// const [code3, setCode3] = useState();
	// const [code4, setCode4] = useState();
	// const [code5, setCode5] = useState();
	// const [code6, setCode6] = useState();
	// const [code7, setCode7] = useState();
	// const [code8, setCode8] = useState();
	// const [code9, setCode9] = useState();
    const [deviceRelated, setTodos] = useState();
	let data = [];
	const [todo, setTodo] = useState(data);
	const [isData, setData] = useState(false);
	const [isFetching, setFetching] = useState(false);
  
	useEffect(() => {
	  // called after the first render
	  async function fetchData() {
		console.log(
		  " ----------- cause the re-render ----------- 2 ",
		  "setFetching = true"
		);
		setFetching(true); // causing re-render - 2
		const response = await fetch(
		  "https://jsonplaceholder.typicode.com/todos"
		);
		console.log("response = ", response);
		let data = await response.json();
		console.log(" ----------- cause the re-render ----------- 3 ", "setTodo");
		setTodo(data); //updt state
		// console.log(
		//   " ----------- cause the re-render ----------- 4 ",
		//   "setFetching = false"
		// );
		// setFetching(false);
		// console.log(" ----------- cause the re-render ----------- 5 ", "setData");
		setData(true);
		try {
			const todoData = await client.graphql({
			  query: listOrganizations,
			});
			const deviceRelated = todoData.data.listOrganizations.items;
		    setTodos(deviceRelated);
			console.log(deviceRelated,'Ram');
			
		  } catch (err) {
			console.log("error fetching todos");
		  }
		console.log("Data = ", data);
	  }
	  fetchData();
	}, []); 
	
	function handleOnChange() {
	
	}
	
	// useEffect(() => {
	
    //     // fetchTodos();

	// }    
    // );

 

    async function fetchTodos() {
        try {
          const todoData = await client.graphql({
            query: listOrganizations,
          });
          const deviceRelated = todoData.data.listOrganizations.items;
        //   setTodos(deviceRelated);
          console.log(deviceRelated,'Ram');
          
        } catch (err) {
          console.log("error fetching todos");
        }
      }
    
	
	return (
		<div>
			<ol className="breadcrumb float-xl-end">
				<li className="breadcrumb-item"><Link to="/table/basic">Home</Link></li>
				<li className="breadcrumb-item"><Link to="/table/basic">List Organizations</Link></li>
				{/* <li className="breadcrumb-item active">Table Elements</li> */}
			</ol>
			<h1 className="page-header">List Organizations <small>header small text goes here...</small></h1>
			
			<div className="row">
				<div className="col-xl-12">
 
					<Panel>
						<PanelHeader>List Organizations</PanelHeader>
						<PanelBody>
							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th>#</th>
											<th nowrap="true">Assigned Devices</th>
											<th nowrap="true">Total Devices</th>
											<th nowrap="true">users</th>
											<th nowrap="true">Authcode</th>
											<th nowrap="true">cell</th>
											<th nowrap="true">email</th>
											<th nowrap="true">Billing Address address</th>
											<th nowrap="true">billingAddresspostalCode</th>
											<th nowrap="true">billingAddressstate</th>	
											<th nowrap="true">BillingAddresscountry</th>

										</tr>
									</thead>
									<tbody>
										{deviceRelated && deviceRelated.map((devrelated,index)=>(
											<tr>
											<td>{index+1}</td>
											<td>{devrelated.assignedDevices}</td>
											<td>{devrelated.totalDevices}</td>
											<td>{devrelated.users}</td>
											<td>{devrelated.authcode}</td>
											<td>{devrelated.cell}</td>
											<td>{devrelated.email}</td>
											<td>{devrelated.billingAddressaddress}</td>
											<td>{devrelated.billingAddresspostalCode}</td>
											<td>{devrelated.billingAddressstate}</td>
											<td>{devrelated.billingAddresscountry}</td>
											 
											 
										</tr>
										))}
										
										 
									</tbody>
								</table>
							</div>
						</PanelBody>
						<div className="hljs-wrapper">
							{/* <Highlight className='html'>{code4}</Highlight> */}
						</div>
					</Panel>
				 
				</div>
				 
			</div>

			<div className="row">
				<div className="col-xl-12">
 
					<Panel>
						<PanelHeader>Third Party Data</PanelHeader>
						<PanelBody>
							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th>#</th>
											<th nowrap="true">UserId</th>
											<th nowrap="true">Title</th>
											<th nowrap="true">Completed</th>  
										</tr>
									</thead>
									<tbody>
										{todo && todo.map((eachobj,index)=>(
											<tr>
											<td>{eachobj.id}</td>
											<td>{eachobj.userId}</td>
											<td>{eachobj.title}</td>
											<td>{eachobj.completed}</td> 
											  
										</tr>
										))}
										
										 
									</tbody>
								</table>
							</div>
						</PanelBody>
						<div className="hljs-wrapper">
							{/* <Highlight className='html'>{code4}</Highlight> */}
						</div>
					</Panel>
				 
				</div>
				 
			</div>
		</div>
	)
}

export default ListOrganizations;