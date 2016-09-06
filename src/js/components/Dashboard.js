import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { admin: false }
    }

    render() {
    	if (this.state.admin) {
    		return (
    			<div className="adminNav">
	    			<div className="container-fluid">
	    				<div className="row">
	    						<div className="col m2 l2">
								<ul id="slide-out" className ="side-nav">
									<li className ="sideTitle center">
										<i className="fa fa-user"></i>
												<span>ADMIN</span>
									</li>
									<li>
										<div className="divider"></div>
									</li>
									<li>
										<a className="waves-effect waves-light" href="/#/utilisateurs"><i className="fa fa-users"></i> Gestion des utilisateurs</a>
								    </li>
								    <li>
								    	<a className="waves-effect waves-light" href="/#/docker"><i className="fa fa-docker"></i> Données Docker</a>
								    </li>
									<li>
										<a className="waves-effect waves-light" href="/#/analytics"><i className="fa fa-line-chart"></i> Analytics</a>
								    </li>
								    <li>
										<a className="waves-effect waves-light" href="/#/administration"><i className="fa fa-cog"></i> Administration du site</a>
								    </li>
								</ul>
								</div>
		    				<div className=" col m10 l10 children">{ this.props.children }</div>
						</div>
					</div>
				</div>

    		)
    	}

        return (
    			<div className="serviceNav">
	    			<div className="container-fluid">
	    				<div className="row">
	    						<div className="col m2 l2">
								<ul id="slide-out" className ="side-nav">
									<li className ="sideTitle center">
										<i className="fa fa-user"></i>
												<span>SERVICES</span>
									</li>
									<li>
										<div className="divider"></div>
									</li>
								    <li>
								    	<a className="waves-effect waves-light" href="/#/profil"><i className="fa fa-user"></i> Profil</a>
								    </li>
									<li>
										<a className="waves-effect waves-light" href="/#/abonnements"><i className="fa fa-check-square"></i> Gestion des abonnements</a>
								    </li>
								    <li>
										<a className="waves-effect waves-light" href="/#/applications"><i className="fa fa-list-alt"></i> Gestion des applications</a>
								    </li>
									<li>
										<a className="waves-effect waves-light" href="/#/FAQ"><i className="fa fa-question-circle"></i> FAQ</a>
								    </li>
								</ul>
								</div>
		    				<div className=" col m10 l10 children">{ this.props.children }</div>
						</div>
					</div>
				</div>        )
    }
}

export default Dashboard
