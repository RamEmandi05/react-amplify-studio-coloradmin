import React from 'react';

function DropdownProfile({ hsignout, hloggedInUser }) {
	return (
		<div className="navbar-item navbar-user dropdown">
			<a href="#/" className="navbar-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
				<img src="/assets/img/user/user-13.jpg" alt="" /> 
				<span>
					<span className="d-none d-md-inline">Hi {hloggedInUser.signInDetails.loginId}</span>
					<b className="caret"></b>
				</span>
			</a>
			<div className="dropdown-menu dropdown-menu-end me-1">
				<a href="#/" className="dropdown-item">Edit Profile</a>
				<a href="#/" className="dropdown-item d-flex align-items-center">
					Inbox
					<span className="badge bg-danger rounded-pill ms-auto pb-4px">2</span> 
				</a>
				<a href="#/" className="dropdown-item">Calendar</a>
				<a href="#/" className="dropdown-item">Settings</a>
				<div className="dropdown-divider"></div>
				<a  className="dropdown-item" onClick={hsignout}>Log Out</a>
				 
			</div>
		</div>
	);
};

export default DropdownProfile;
