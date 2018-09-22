
import React from "react";
import { connect } from 'react-redux';
import { getShipment } from '../../actions/ShipmentActions';
import PropTypes from 'prop-types';
 
class Tracking extends React.Component  {
        componentDidMount() {
            this.props.getShipment(this.props.match.params.id)

        }

	render () { 
          const { shipment } = this.props.shipment;

        return ( 
      
            <div>

    <div id="wrapper">
    <div id="page-content-wrapper">
            <div className="col-md-12 col-sm-12 col-xs-12 widget-wrapper">
            <div className="section-wrap-b floatDown">    
            
            <div className="widget-header flex_space_between">
                <div> <p className="spacer">TRACKING</p> </div>
            </div>
 
    <table className="table table-striped table-hover">
					<thead>
					<tr>
                        <th>  PWId </th>
                        <th>  E </th>
                        <th>  STATUS </th>
                        <th>  MODE </th>
                        <th>  SHIPPER </th>
					</tr>
					</thead>

					<tbody>

                    {shipment.TRACKING.map(({ STATUS, ATA_PRE_PICKUP, ETA_PRE_DELIVER, COMPLETE, DETAILS }) => (
                            <tr>
                                <td>
                                { COMPLETE }
                                </td>
                                <td>
                                { STATUS }
                                </td>
                                <td>
                                { ATA_PRE_PICKUP }
                                </td>
                                <td>
                                { ETA_PRE_DELIVER }
                                </td>
                                <td>
                                { DETAILS }
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


Tracking.propTypes = {
    getShipment: PropTypes.func.isRequired,
    shipment: PropTypes.object.isRequired,

  };

const mapStateToProps = (state) => {
    return {
        shipment: state.shipment,

    };
};


export default connect(mapStateToProps,{ getShipment })(Tracking);