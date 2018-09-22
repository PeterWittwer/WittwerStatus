
import React from "react";
import { connect } from 'react-redux';
import  { Link }  from 'react-router-dom';
import { getShipments } from '../../actions/ShipmentActions';
import PropTypes from 'prop-types';
import { SideNavigation } from '../../components/MainNav';
 
class Shipments extends React.Component  {


        componentDidMount() {
        this.props.getShipments();

        }
 

	render () { 

        // if (this.props.hasErrored) {
        //     return <p>Sorry! There was an error loading the items</p>;
        // }

        // if (this.props.isLoading) {
        //     return <p>Loading…</p>;
        // }

  
        const { shipments } = this.props.shipment;

        return ( 
      
            <div>



<div id="wrapper">
                
                <div id="sidebar-wrapper" className="">
                <SideNavigation/>
                </div>
                        
                <div id="page-content-wrapper">
                        
                <div className="col-sm-12 toggle-row">
                <button href="#menu-toggle" className="glyphicon glyphicon glyphicon-menu-hamburger" id="menu-toggle">
                <i className="fas fa-bars"></i>


                </button>
                </div>
                
                <div className="brand-box">
                </div>
            
               

            <div className="col-md-12 col-sm-12 col-xs-12 widget-wrapper">
            <div className="section-wrap-b floatDown">    
             


            <div className="widget-header flex_space_between">
                <div> <p className="spacer">SHIPMENTS</p> </div>
                <div> <button className="btn btn-default btn-sm">Filter</button> </div>
            </div>
 

        

<table className="table table-striped table-hover">
					<thead>
					<tr>
                        <th> PWId </th>
                        <th> E </th>
                        <th> STATUS </th>
                        <th> MODE </th>
                        <th> SHIPPER </th>
                        <th> CONSIGNEE </th>
                        <th> DEST </th>
                        <th> PORT </th>
                        <th> ETA PORT </th>
                        <th> DEST CITY </th>
                        <th> REFERENCE	 </th>
					</tr>
					</thead>

					<tbody>


                    {shipments.map(({ _id, SHIPMENT_NO, STATUS, CLIENT_REFERENCE, ORIGINATION_ID, SHIPPER_REFFERENCE }) => (

                            <tr key={_id}>
                                <td>
                                <Link to={`/shipment/${_id}/details` }> <button   className="btn btn-sm btn-default">{_id}</button> </Link>
                                </td>
                            
                                <td>
                                { SHIPMENT_NO }
                                </td>
                                <td>
                                { STATUS }
                                </td>
                                <td>
                                { CLIENT_REFERENCE }
                                </td>
                                <td>
                                { ORIGINATION_ID }
                                </td>
                                <td>
                                { SHIPPER_REFFERENCE }
                                </td>
                                <td>
                                { ORIGINATION_ID }
                                </td>
                                <td>
                                { ORIGINATION_ID }
                                </td>
                                <td>
                                { ORIGINATION_ID }
                                </td>
                                <td>
                                { ORIGINATION_ID }
                                </td>
                                <td>
                                <button
                                        className="Button"
                                    >
                                        &times;
                                    </button>
                                </td>
                            </tr>
                        ))}
                        

					</tbody>
			</table>

                        </div>
                        </div>

            </div>{/*END page-content-wrapper*/} 
        </div>{/*END WRAPPER */} 




            </div>
            
        );
  }
}




Shipments.propTypes = {
    getShipments: PropTypes.func.isRequired,
    shipment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

  };

const mapStateToProps = (state) => {
    return {
        shipment: state.shipment,
        auth: state.auth

        // items: state.items,
        // hasErrored: state.itemsHasErrored,
        // isLoading: state.itemsIsLoading
    };
};


export default connect(mapStateToProps,{ getShipments })(Shipments);