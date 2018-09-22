import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShipmentItem from './ShipmentItem';
import { Link } from 'react-router-dom';

class ShipmentFeed extends Component {
  render() {
    const { shipments } = this.shipments;

    return shipments.map(shipment => (

        <tr key={_id}>
        <td>
        <Link to={`/shipment/${shipment._id}` }> <button   className="btn btn-sm btn-default">{_id}</button> </Link>
        </td>
        <td>
        { shipment.SHIPMENT_NO }
        </td>
        <td>
        { shipment.STATUS }
        </td>
        <td>
        { shipment.CLIENT_REFERENCE }
        </td>
        <td>
        { shipment.ORIGINATION_ID }
        </td>
        <td>
        { shipment.SHIPPER_REFFERENCE }
        </td>
        <td>
        { shipment.STATUS }
        </td>
        <td>
        { shipment.CLIENT_REFERENCE }
        </td>
        <td>
        { shipment.SHIPPER_REFERENCE }
        </td>
        <td>
        { shipment.STATUS }
        </td>
        <td>
        <button className="Button">
                &times;
        </button>
        </td>
    </tr>
    ));
  }
}

ShipmentFeed.propTypes = {
  shipments: PropTypes.array.isRequired
};

export default ShipmentFeed;
