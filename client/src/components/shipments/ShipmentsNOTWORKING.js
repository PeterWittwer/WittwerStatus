import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import ShipmentFeed from './ShipmentFeed';
import Spinner from '../common/Spinner';
import { getShipments } from '../../actions/ShipmentActions';

class Shipments extends Component {
  componentDidMount() {
    this.props.getShipments();
  }

  render() {
    const { shipments, loading } = this.props.shipment;
    let shipmentContent;

    if (shipments === null || loading) {
      shipmentContent = <Spinner />;
    } else {
      shipmentContent = <ShipmentFeed shipments={shipments} />;
    }

    return (
        <div> 

        <div className="container_header">
        <p className="spacer">SHIPMENTS</p>
        <button className="btn btn-default btn-sm" >Add Shipment</button>
    </div>


  <div className="border_style filter_container"> 
        <div> 
                <div className="col-xs-1"> 
                        <p> <span className="glyphicon glyphicon-filter"></span>Filter </p>
                </div>
                
                <div className="col-xs-3">	
                    <label>Shipments</label>
                    <button className="Button" type="button" >Create New</button>
                    <button className="Button" type="button">Advanced Search</button>
                    <button className="Button" type="button">Reset</button>
                </div>
        </div>

        <div>
            <div className="col-xs-3">
                    <form className="form-inline" id="frmShp">
                            <label>Id/FileNo: </label>
                            <input className="form-control" id="txtShp" /> 
                            <button className="Button" type="submit">Find</button>
                    </form>
            </div>

            <div className="col-xs-3">
                    <form className="form-inline" id="frmRef">
                            <label>Reference:</label>	
                            <input className="form-control"  id="txtShp" /> 
                            <button className="Button" type= "button" onclick="javascript:RefFnd();">Find</button>
                    </form>		
            </div>

            <div className="clearfix"></div>
            
        </div>
    </div>



<table className="table table-striped table-hover">
            <thead>
            <tr>
                <th>  PWId </th>
                <th>  E </th>
                <th>  STATUS </th>
                <th>  MODE </th>
                <th>  SHIPPER </th>
                <th>  CONSIGNEE </th>
                <th>  DEST </th>
                <th>  PORT </th>
                <th>  ETA PORT </th>
                <th>  DEST CITY </th>
                <th>  REFERENCE	 </th>
            </tr>
            </thead>

            <tbody>
              {shipmentContent}

              </tbody>
    </table>
    </div>

    );
  }
}

Shipments.propTypes = {
    getShipments: PropTypes.func.isRequired,
    shipment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  shipment: state.shipment
});

export default connect(mapStateToProps, { getShipments })(Shipments);
