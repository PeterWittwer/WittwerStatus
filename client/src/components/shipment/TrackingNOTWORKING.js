import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
 import { getShipment } from '../../actions/ShipmentActions';
 import  { Link, NavLink }  from 'react-router-dom';

 class Tracking extends Component {

    componentDidMount() {
        this.props.getShipment(this.props.match.params.id)
    }

  render() {
   const { shipment } = this.props.shipment;
   
        
  
        
 
  
    return (
      
        <div className="col-md-12 col-sm-12 col-xs-12 widget-wrapper" style={{marginTop: '80px'}}>
  

<div className="nav shipment_nav">  
         <nav><center> <ul className="li-move">
                <NavLink activeClassName='is-active' to={`/shipment/${shipment._id}/details`}>  <li> <span><i className="fas fa-road"></i> DETAILS</span>   </li> </NavLink>
                <NavLink activeClassName='is-active' to={`/shipment/${shipment._id}/tracking`}>   <li className=""> <span> <i className="fas fa-globe-americas"></i> TRACKING</span> </li> </NavLink>
                <NavLink activeClassName='is-active' to={`${this.props.match.params.id}/cargo`}>  <li className=""> <span><i className="fas fa-briefcase"></i> CARGO</span>   </li> </NavLink>
                <NavLink activeClassName='is-active' to={`${this.props.match.params.id}/cargo`}>  <li className=""> <span><i className="fas fa-lock"></i> CUSTOMS</span>   </li> </NavLink>
                <NavLink activeClassName='is-active' to={`${this.props.match.params.id}/documents`}>  <li className="">  <span><i className="fas fa-folder-open"></i> DOCUMENTS</span>  </li>  </NavLink>
                <NavLink activeClassName='is-active' to={`${this.props.match.params.id}/documents`}>  <li className="">  <span><i className="fas fa-comments"></i> MESSAGES</span>  </li>  </NavLink>
        </ul> </center> </nav>  
    </div> 


        <div className="section-wrap-b floatDown">           
          <div className="widget-header">
              <h3>TRACKING</h3>
              </div> 
                  <table className="table table-hover status-table">
                      <thead>
                      <tr>
                          <th>Complete</th>
                          <th>Status</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Transport</th>
                          <th>Voyage No.</th>
                      </tr>
      
                     </thead>
                     <tbody>
                     
                     <div>
                        <tr key={shipment._id}>
                            <td><button type="button" className="btn btn-sm btn-default"><span className="icon glyphicon glyphicon-ok-sign status-icon-complete"></span> </button></td>
                            <td>{shipment.STATUS} </td>
                            <td>{shipment.CLIENT_REFERENCE}</td>
                            <td>11:22</td>
                            <td>Truck</td>
                            <td>{shipment.SHIPMENT_NO}</td>
                          </tr>
        </div>
       
                      </tbody>
                  </table>
              </div> 
              </div>
         
    );
  }
}


Tracking.propTypes = {
    getShipment: PropTypes.func.isRequired,
    shipment: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    shipment: state.shipment
  });
  
  export default connect(mapStateToProps, { getShipment })(Tracking);
  