import React, { Component } from 'react'

class AdminDocker extends Component {

  render () {
    return (
      <div className="Admin_docker card-panel">
        <h2>Applications Docker</h2>
        {
          [1, 2, 3, 4].map((docker, i) => {
            return <Docker key={ i }/>
          })
        }
      </div>
    )
  }
}

const Docker = () => (
  <div className="" style={{ border: '1px solid #E5E5E5', padding: '20px 40px', marginBottom: 10 }}>
    <h3>Docker Application</h3>
    <div className="card" style={{ width: "calc(50% - 20px)", display: "inline-block", marginRight: 20 }}>
      <div className="title">
        <h5>Orders</h5>
        <a className="close" href="#">
          <i className="mdi-content-clear"></i>
        </a>
        <a className="minimize" href="#">
          <i className="mdi-navigation-expand-less"></i>
        </a>
      </div>
      <div className="content orders-card">
        <h4>3,729</h4>
        <div className="row">
          <div className="col s6">
            <small>Total Orders</small>
          </div>
          <div className="col s6 right-align">
            77% <i className="fa fa-level-down red-text"></i>
          </div>
        </div>
        <div className="progress small">
          <div className="determinate" style={{width: "77%"}}></div>
        </div>

        <h4>$7,180</h4>
        <div className="row">
          <div className="col s6">
            <small>Total Income</small>
          </div>
          <div className="col s6 right-align">
            43% <i className="fa fa-level-up green-text"></i>
          </div>
        </div>
        <div className="progress small">
          <div className="determinate" style={{width: "43%"}}></div>
        </div>

        <h4>27</h4>
        <div className="row">
          <div className="col s6">
            <small>Total Refunds</small>
          </div>
          <div className="col s6 right-align">
            7%
          </div>
        </div>
        <div className="progress small">
          <div className="determinate" style={{width: "7%"}}></div>
        </div>
      </div>
    </div>
    <div className="" style={{ width: "50%", display: "inline-block", marginTop: 0, verticalAlign: 'top' }}>
      <div className="col l12 m12 s12" style={{ marginBottom: 20 }}>
        <a className="card-panel stats-card red lighten-2 red-text text-lighten-5">
          <i className="fa fa-comments-o"></i>
          <span className="count">145</span>
          <div className="name">Feedbacks</div>
        </a>
      </div>
      <div className="col l12 m12 s12" style={{ marginBottom: 20 }}>
        <a className="card-panel stats-card amber lighten-2 amber-text text-lighten-5">
          <i className="fa fa-cloud-upload"></i>
          <span className="count">58</span>
          <div className="name">Uploads</div>
        </a>
      </div>
      <div className="col l12 m12 s12" style={{ marginBottom: 20 }}>
        <div className="card-panel stats-card green lighten-2 green-text text-lighten-5">
          <i className="fa fa-spinner"></i>
          <span className="count">37%</span>
          <div className="name">Server Load</div>
        </div>
      </div>
    </div>
  </div>
)

export default AdminDocker
