import React, { Component } from 'react'

export default class ShipmentHeader extends Component {
  render() { 
    return (
        <div className="shipment-headers-wrapper">

        <div className="shipment-left-header">
            <div className="header-group">
            <div><span>Reference</span> #: 210307</div>
            </div>
        
            <div className="header-group">
            <div><span>Shipper ID #:</span> 879879</div>
            <div><span>Transport Mode:</span> Domestic</div>
             <div><span>Inco Terms:</span> <button data-toggle="modal" data-target="#inco-terms" className="btn btn-info btn-xs">EXW</button>
             </div>
            </div>
        
        </div>
        
          <div className="shipment-right-header">
            <ul>
                <li className="label-span"><span>Status:</span> <span className="label status-custrl" data-toggle="popover" data-placement="left" title="Status" data-content="SHIPMENT RELEASED FROM CUSTOMS.">custrl</span></li>
                <li className="isf-filed-notice"><span>Status:</span> <button type="button" className="btn btn-XS btn-success" data-toggle="popover" data-placement="left" title="Status" data-content="On hold by other government agency.">ISF Filed</button></li>
                <li><span>Final Dest:</span> Chicago, IL</li>
                <li><span>Final ETA:</span> 6/21/2017</li>
                <li><span>Console #:</span> 382917</li>
            </ul>
          </div>
        </div>
    )
  }
}
