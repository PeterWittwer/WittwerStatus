const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post model
const Tran_shipment = require('../../models/Tran_shipments');


// @route GET api/posts
// @route Get all posts
// @route Private
router.get('/', (req, res) => {
    Tran_shipment.find()
    .sort( { date: -1} )
    .then(shipments => res.json(shipments))
    .catch(err => res.status(404).json( {nopostfound: 'No posts found'} ));
});


// @route GET api/shipment/:id
// @route Get Shipment by id
// @route Private
router.get('/:id', (req, res) => {
    Tran_shipment.findById(req.params.id)
    .then(shipment => res.json(shipment))
    .catch(err => res.status(404).json( {nopostfound: 'No Shipment found with that id'} ));
});

// @route GET api/shipment/tracking/:id
// @route Get Shipment by id
// @route Private
router.get(':id/:item', (req, res) => {
    Tran_shipment.findById(req.params.id)
    .then(shipment => res.json(shipment))
    .catch(err => res.status(404).json( {nopostfound: 'No Shipment tracking found with that id'} ));
});



// @route POST api/posts
// @route Create post
// @route private

router.post('/', (req, res) => {
    const newShipment = new Tran_shipment({
        ID: req.body.ID, 
        OWNER_ID: req.body.OWNER_ID,
        SHIPMENT_NO: req.body.SHIPMENT_NO,
        ORIGINATION_ID: req.body.ORIGINATION_ID,
        SHIPMENT_TYPE_ID: req.body.SHIPMENT_TYPE_ID,
        RESPONSIBLE_ID: req.body.RESPONSIBLE_ID,
        
        
        
        BILLINGMETHOD_ID: req.body.BILLINGMETHOD_ID,
        CLIENT_ID: req.body.CLIENT_ID,
        CLIENT_REFERENCE: req.body.CLIENT_REFERENCE,
        FORWARDER_ID: req.body.FORWARDER_ID,
        SHIPPER_ID: req.body.SHIPPER_ID,
        SHIPPER_REFERENCE: req.body.SHIPPER_REFERENCE,
        NOTIFY_PARTY_ID: req.body.NOTIFY_PARTY_ID,
        REQUESTED_PICKUP_DATE: req.body.REQUESTED_PICKUP_DATE,
        PRECARRIAGE_CARRIER_ID: req.body.PRECARRIAGE_CARRIER_ID,
        PRECARRIAGE_CARRIER: req.body.PRECARRIAGE_CARRIER,
        PRECARRIAGE_CONTACT: req.body.PRECARRIAGE_CONTACT,
        PRECARRIAGE_PHONE: req.body.PRECARRIAGE_PHONE,
        PRECARRIAGE_UNIT_NO: req.body.PRECARRIAGE_UNIT_NO,
        PRECARRIAGE_REFERENCE: req.body.PRECARRIAGE_REFERENCE,
        ETA_PRE_PICKUP: req.body.ETA_PRE_PICKUP,

        ATA_PRE_DELIVER: req.body.ATA_PRE_DELIVER,
        CONSIGNEE_ID: req.body.CONSIGNEE_ID,
        CONSIGNEE_REFERENCE: req.body.CONSIGNEE_REFERENCE,
        REQUESTED_DELIVERY_DATE: req.body.REQUESTED_DELIVERY_DATE,
        PLACE_OF_ORIGIN: req.body.PLACE_OF_ORIGIN,
        PLACE_OF_RECEIPT: req.body.PLACE_OF_RECEIPT,
        LOAD_PORT_ID: req.body.LOAD_PORT_ID,
        LOAD_PORT: req.body.LOAD_PORT,
        DISCHARGE_PORT_ID: req.body.DISCHARGE_PORT_ID,
        DISCHARGE_PORT: req.body.DISCHARGE_PORT,
        PLACE_OF_DELIVERY: req.body.PLACE_OF_DELIVERY,
        FINAL_DESTINATION: req.body.FINAL_DESTINATION,
        PRIMARY_CARRIER_ID: req.body.PRIMARY_CARRIER_ID,
        PRIMARY_CARRIER_EQUIPMENT: req.body.PRIMARY_CARRIER_EQUIPMENT,
        PRIMARY_CARRIER_VOYAGE_FLIGHT: req.body.PRIMARY_CARRIER_VOYAGE_FLIGHT,
        PRIMARY_CARRIER_BOOKING_NO: req.body.PRIMARY_CARRIER_BOOKING_NO,
        PRIMARY_CARRIER_POSITION_DATE: req.body.PRIMARY_CARRIER_POSITION_DATE,
        PRIMARY_CARRIER_HAZARDOUS_CUTOFF: req.body.PRIMARY_CARRIER_HAZARDOUS_CUTOFF,
        PRIMARY_CARRIER_PIER_TERMINAL: req.body.PRIMARY_CARRIER_PIER_TERMINAL,
        PRIMARY_CARRIER_ETD_ORIG: req.body.PRIMARY_CARRIER_ETD_ORIG,
        PRIMARY_CARRIER_ATD_ORIG: req.body.PRIMARY_CARRIER_ATD_ORIG,
        PRIMARY_CARRIER_ATD_ORIG: req.body.PRIMARY_CARRIER_ATD_ORIG,
        PRIMARY_CARRIER_ATA_DEST: req.body.PRIMARY_CARRIER_ATA_DEST,
        ON_BOARD_DATE: req.body.ON_BOARD_DATE,
        CUSTOMS_CLEARANCE_DATE: req.body.CUSTOMS_CLEARANCE_DATE,
        NVOCC_BOOKING_NO: req.body.NVOCC_BOOKING_NO,
        MASTER_BL_NO: req.body.MASTER_BL_NO,
        AES_XTN: req.body.AES_XTN,
        LETTER_OF_CREDIT_NO: req.body.LETTER_OF_CREDIT_NO,
        BANK_ADVICE_NO: req.body.BANK_ADVICE_NO,
        ONCARRIAGE_CARRIER_ID: req.body.ONCARRIAGE_CARRIER_ID,
        ONCARRIAGE_CARRIER: req.body.ONCARRIAGE_CARRIER,
        ONCARRIAGE_CONTACT: req.body.ONCARRIAGE_CONTACT,
        ONCARRIAGE_PHONE: req.body.ONCARRIAGE_PHONE,
        ONCARRIAGE_UNIT_NO: req.body.ONCARRIAGE_UNIT_NO,
        ONCARRIAGE_REFERENCE: req.body.ONCARRIAGE_REFERENCE,
        ETA_ON_PICKUP: req.body.ETA_ON_PICKUP,
        ATA_ON_PICKUP: req.body.ATA_ON_PICKUP,
        ETA_ON_DELIVER: req.body.ETA_ON_DELIVER,
        ATA_ON_DELIVER: req.body.ATA_ON_DELIVER,
        EXPORT_REFERENCES: req.body.EXPORT_REFERENCES,
        ROUTING_INSTRUCTIONS: req.body.ROUTING_INSTRUCTIONS,
        SHIPMENT_NOTE_COUNT: req.body.SHIPMENT_NOTE_COUNT,
        INCOTERMS_ID: req.body.INCOTERMS_ID,
        PAYOR_ID: req.body.PAYOR_ID,
        INVOICE_DATE: req.body.INVOICE_DATE,
        INVOICE_TOTAL: req.body.INVOICE_TOTAL,
        EXPENSE_TOTAL: req.body.EXPENSE_TOTAL,
        RECEIPT_TOTAL: req.body.RECEIPT_TOTAL,
        ISPAID: req.body.ISPAID,
        QUOTE_TOTAL: req.body.QUOTE_TOTAL,
        BIDCOUNT: req.body.BIDCOUNT,
        ENTERED_DATE: req.body.ENTERED_DATE,
        ENTERED_BY: req.body.ENTERED_BY,
        UPDATED_DATE: req.body.UPDATED_DATE,
        UPDATED_BY: req.body.UPDATED_BY,
        ACTUAL_NEED_DATE: req.body.ACTUAL_NEED_DATE,
        ACTIVE: req.body.ACTIVE,
        SHIPMENT_STATUS: req.body.SHIPMENT_STATUS,
        DOC_BODY_TEMPLATE: req.body.DOC_BODY_TEMPLATE,
        MARKS: req.body.MARKS,
        DOC_CARRIER_ID: req.body.DOC_CARRIER_ID,
        DOC_CARRIER: req.body.DOC_CARRIER,
        DOC_CARRIER_REFERENCE: req.body.DOC_CARRIER_REFERENCE,
        DOC_SENT_DATE: req.body.DOC_SENT_DATE,
        DOC_RECIPIENT: req.body.DOC_RECIPIENT,
        CLEARANCE_PORT: req.body.CLEARANCE_PORT,
        FREIGHT_LOCATION: req.body.FREIGHT_LOCATION,
        IMPORT_DOC_RCPT_DATE: req.body.IMPORT_DOC_RCPT_DATE,
        HBL_HAWB_NO: req.body.HBL_HAWB_NO,
        ROWGUID: req.body.ROWGUID,
        ORIGINAL_DOC_RCPT_DATE: req.body.ORIGINAL_DOC_RCPT_DATE,
        POD_DATE: req.body.POD_DATE,
        POD_DATE_EST: req.body.POD_DATE_EST,
        SHBL_SHAWB_NO: req.body.SHBL_SHAWB_NO,
        POD_SIGNATORY: req.body.POD_SIGNATORY,
        SHIPMENT_NO_TEXT: req.body.SHIPMENT_NO_TEXT,
        SEARCH_TEXT: req.body.SEARCH_TEXT,
        CUST_NOTE_COUNT: req.body.CUST_NOTE_COUNT,
        NOTE_COUNT: req.body.NOTE_COUNT,
        ENTRY_FILED_DATE: req.body.ENTRY_FILED_DATE,
        CONSOLIDATION_NO: req.body.CONSOLIDATION_NO,
        BOOKING_DATE: req.body.BOOKING_DATE,
        DEST_COUNTRY_ID: req.body.DEST_COUNTRY_ID,
        ORIG_COUNTRY_ID: req.body.ORIG_COUNTRY_ID,
        PRECARRIAGE_PICKUP_ID: req.body.PRECARRIAGE_PICKUP_ID,
        ONCARRIAGE_DELIVER_ID: req.body.ONCARRIAGE_DELIVER_ID,
        CUSTOMS_BROKER_ID: req.body.CUSTOMS_BROKER_ID,
        IT_NO: req.body.IT_NO,
       
    });
  

    const newTrack = {
        STATUS: req.body.STATUS,
        ATA_PRE_PICKUP: req.body.ATA_PRE_PICKUP,
        ETA_PRE_DELIVER: req.body.ETA_PRE_DELIVER,
        COMPLETE: req.body.COMPLETE,
        DETAILS: req.body.DETAILS,
      };

      // Add to edu array
      newShipment.TRACKING.unshift(newTrack);


    newShipment.save().then(shipment => res.json(shipment));
  });
  






//   router.post('/:id', (req, res) => {
  
//         Tran_shipment.findOne({ shipment: req.shipment.id }).then(shipment => {
//         const newEdu = {
//             STATUS: req.body.TRACKING.STATUS,
//             ATA_PRE_PICKUP: req.body.TRACKING.ATA_PRE_PICKUP,
//             ETA_PRE_DELIVER: req.body.TRACKING.ETA_PRE_DELIVER,
//             COMPLETE: req.body.TRACKING.COMPLETE,
//             DETAILS: req.body.TRACKING.DETAILS,
//         };
  
//         shipment.education.unshift(newEdu);
  
//         shipment.save().then(shipment => res.json(shipment));
//       });
//     }
//   );
  



module.exports = router