import React, { Component } from 'react'
import PropTypes from 'prop-types';
import  { Link, NavLink }  from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
 import { getShipment } from '../../actions/ShipmentActions';
//import { Link } from 'react-router-dom';

 class Detail extends Component {

    componentDidMount() {
        this.props.getShipment(this.props.match.params.id)
    }

    render() {
   const { shipment, loading } = this.props.shipment;
    let postContent;


  


    return (
      
        <div className="col-md-12 col-sm-12 col-xs-12 widget-wrapper" style={{marginTop: '80px'}}>


        <div className="nav shipment_nav">  
                <nav><center> <ul className="li-move">
                       <NavLink activeClassName='is-active'  to={`${this.props.match.params.id}/details`}>  <li> <span><i className="fas fa-road"></i> DETAILS</span>   </li> </NavLink>
                       <NavLink activeClassName='is-active' to={`/shipment/${shipment._id}/tracking`}>   <li className=""> <span> <i className="fas fa-globe-americas"></i> TRACKING</span> </li> </NavLink>
                       <NavLink activeClassName='is-active' to={`${this.props.match.params.id}/cargo`}>  <li className=""> <span><i className="fas fa-briefcase"></i> CARGO</span>   </li> </NavLink>
                       <NavLink activeClassName='is-active' to={`${this.props.match.params.id}/cargo`}>  <li className=""> <span><i className="fas fa-lock"></i> CUSTOMS</span>   </li> </NavLink>
                       <NavLink activeClassName='is-active' to={`${this.props.match.params.id}/documents`}>  <li className="">  <span><i className="fas fa-folder-open"></i> DOCUMENTS</span>  </li>  </NavLink>
                       <NavLink activeClassName='is-active' to={`${this.props.match.params.id}/documents`}>  <li className="">  <span><i className="fas fa-comments"></i> MESSAGES</span>  </li>  </NavLink>
               </ul> </center> </nav>  
           </div> 
        
       
       
       
                   <div className="section-wrap-b floatDown">    
                     <div className="widget-header">
                          <h3>MORE DETAILS</h3>
                     </div>
                 
                     
                     <Link to={`/shipment/${shipment._id}/tracking` }><button className="btn"> Go to Details {shipment._id} </button></Link>
       
       
                      <table className="table custom-table">
         <tr>
           <th><span className="icon glyphicon glyphicon glyphicon-globe"></span>PLACE OF RECEIPT:</th>
           <td>{shipment.SHIPMENT_NO}</td>
           <th>ETA DATE:</th>
           <td></td>
         </tr>
         <tr>
           <th><span className="icon glyphicon glyphicon glyphicon-paste"></span>PLACE OF LOADING:</th>
           <td>{shipment.CLIENT_REFERENCE}</td> 
           <th>ETA DATE:</th>
           <td>03.15.2017</td>
         </tr>
         <tr>
           <th><span className="icon glyphicon glyphicon-screenshot"></span>PORT OF DISCHARGE:</th>
           <td>OSTROW</td>
           <th>ETA DATE:</th>
           <td>03.15.2017</td>
         </tr>
         <tr>
           <th><span className="icon glyphicon glyphicon-resize-full"></span>DESTINATION:</th>
           <td>BRIMERHAVEN</td>
           <th>ETA DATE:</th>
           <td>03.15.2017</td>
         </tr>
                        
           <tr>  
           <th><span className="icon glyphicon glyphicon glyphicon-magnet"></span>FINAL DELIVERY:</th>
           <td>EAST HELENA, MT, US</td>
           <th>ETA DATE:</th>
           <td>03.15.2017</td>
         </tr>
                        
       </table> 
                      
                   </div> 
             </div>
         
    );
  }
}


Detail.propTypes = {
    getShipment: PropTypes.func.isRequired,
    shipment: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    shipment: state.shipment
  });
  
  export default connect(mapStateToProps, { getShipment })(Detail);
  