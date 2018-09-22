const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// Create Schema
const Tran_Shipment_Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  ID: {
    type: Number,
    
  },
  SHIPMENT_NO: {
    type: Number,
    required: true
    
  },


  TRACKING: [
    {
      COMPLETE: {
        type: String,
      },
      STATUS: {
        type: String,
      },
      ETA_PRE_DELIVER: {
        type: Date,
      },
      ATA_PRE_DELIVER: {
        type: Date,
      },
      DETAILS: {
        type: String
      }
    }
  ],

  ORIGINATION_ID: {
    type: Number,
    
  },
  SHIPMENT_TYPE_ID: {
    type: Number,
    
  },
  RESPONSIBLE_ID: {
    type: Number,
    
  },
  
  BILLINGMETHOD_ID: {
    type: Number,
    
  },
  CLIENT_ID: {
    type: Number,
    
  },
  CLIENT_REFERENCE: {
    type: String,  
    
  },
  FORWARDER_ID: {
    type: Number,
    
  },
  SHIPPER_ID: {
    type: Number,
    
  },
  SHIPPER_REFERENCE: {
    type: String,
    
  },
  NOTIFY_PARTY_ID: {
    type: Number,
    
  },
  REQUESTED_PICKUP_DATE: {
    type: Date,
    
  },
  PRECARRIAGE_CARRIER_ID: {
    type: Number,
    
  },
  PRECARRIAGE_CARRIER: {
    type: String,
    
  },
  PRECARRIAGE_CONTACT: {
    type: String,
    
  },
  PRECARRIAGE_PHONE: {
    type: String,
    
  },
  PRECARRIAGE_UNIT_NO: {
    type: String,
    
  },
  PRECARRIAGE_REFERENCE: {
    type: String,
    
  },
  ETA_PRE_PICKUP: {
    type: Date,
    
  },
  ATA_PRE_PICKUP: {
    type: Date,
    
  },
  
  CONSIGNEE_ID: {
    type: Number,
    
  },
  CONSIGNEE_REFERENCE: {
    type: String,
    
  },
  REQUESTED_DELIVERY_DATE: {
    type: Date,
    
  },
  PLACE_OF_ORIGIN: {
    type: String,
    
  },
  PLACE_OF_RECEIPT: {
    type: String,
    
  },
  LOAD_PORT_ID: {
    type: Number,
    
  },
  LOAD_PORT: {
    type: String,
    
  },
  DISCHARGE_PORT_ID: {
    type: Number,
    
  },
  DISCHARGE_PORT: {
    type: String,
    
  },
  PLACE_OF_DELIVERY: {
    type: String,
    
  },
  FINAL_DESTINATION: {
    type: String,
    
  },
  PRIMARY_CARRIER_ID: {
    type: Number,
    
  },
  PRIMARY_CARRIER_EQUIPMENT: {
    type: String,
    
  },
  PRIMARY_CARRIER_VOYAGE_FLIGHT: {
    type: String,
    
  },
  PRIMARY_CARRIER_BOOKING_NO: {
    type: String,
    
  },
  PRIMARY_CARRIER_POSITION_DATE: {
    type: Date,
    
  },
  PRIMARY_CARRIER_HAZARDOUS_CUTOFF: {
    type: String,
    
  },
  PRIMARY_CARRIER_PIER_TERMINAL: {
    type: String,
    
  },
  PRIMARY_CARRIER_ETD_ORIG: {
    type: Date,
    
  },
  PRIMARY_CARRIER_ATD_ORIG: {
    type: Date,
    
  },
  PRIMARY_CARRIER_ETA_DEST: {
    type: Date,
    
  },
  PRIMARY_CARRIER_ATA_DEST: {
    type: Date,
    
  },
  ON_BOARD_DATE: {
    type: Date,
    
  },
  CUSTOMS_CLEARANCE_DATE: {
    type: Date,
    
  },
  NVOCC_BOOKING_NO: {
    type: String,
    
  },
  MASTER_BL_NO: {
    type: String,
    
  },
  AES_XTN: {
    type: String,
    
  },
  LETTER_OF_CREDIT_NO: {
    type: String,
    
  },
  BANK_ADVICE_NO: {
    type: String,
    
  },
  ONCARRIAGE_CARRIER_ID: {
    type: Number,
    
  },
  ONCARRIAGE_CARRIER: {
    type: String,
    
  },
  ONCARRIAGE_CONTACT: {
    type: String,
    
  },
  ONCARRIAGE_PHONE: {
    type: String,
    
  },
  ONCARRIAGE_UNIT_NO: {
    type: String,
    
  },
  ONCARRIAGE_REFERENCE: {
    type: String,
    
  },
  ETA_ON_PICKUP: {
    type: Date,
    
  },
  ATA_ON_PICKUP: {
    type: Date,
    
  },
  ETA_ON_DELIVER: {
    type: Date,
    
  },
  ATA_ON_DELIVER: {
    type: Date,
    
  },
  EXPORT_REFERENCES: {
    type: String,
    
  },
  ROUTING_INSTRUCTIONS: {
    type: String,
    
  },
  SHIPMENT_NOTE_COUNT: {
    type: Number,
    
  },
  INCOTERMS_ID: {
    type: Number,
    
  },
  PAYOR_ID: {
    type: Number,
    
  },
  INVOICE_DATE: {
    type: Date,
    
  },
  INVOICE_TOTAL: {
    type: Currency, 
    
  },
  EXPENSE_TOTAL: {
    type: Currency,
    
  },
  RECEIPT_TOTAL: {
    type: Currency,
    
  },
  ISPAID: {
    type: Number,
    
  },
  QUOTE_TOTAL: {
    type: Currency,
    
  },
  BIDCOUNT: {
    type: Number,
    
  },
  ENTERED_DATE: {
    type: Date,
    
  },
  ENTERED_BY: {
    type: String,
    max: 50,
    
  },
  UPDATED_DATE: {
    type: Date,
    
  },
  UPDATED_BY: {
    type: String,
    
  },
  CLIENT_ID: {
    type: String,
    
  },
  ACTUAL_NEED_DATE: {
    type: Date,
    
  },
  ACTIVE: {
    type: Number,
    
  },
  SHIPMENT_STATUS: {
    type: Number,
    
  },
  DOC_BODY_TEMPLATE: {
    type: String,
    max: 3000,
    
  },
  MARKS: {
    type: String,
    max: 300,
    
  },
  DOC_CARRIER_ID: {
    type: String,
    
  },
  DOC_CARRIER: {
    type: String,
    max: 50,
    
  },
  DOC_CARRIER_REFERENCE: {
    type: String,
    max: 20,
    
  },
  DOC_SENT_DATE: {
    type: Date,
    
  },
  CLEARANCE_PORT: {
    type: String,
    max: 20,
    
  },
  DOC_RECIPIENT: {
    type: String,
    max: 20,
    
  },
  FREIGHT_LOCATION: {
    type: String,
    
  },
  IMPORT_DOC_RCPT_DATE: {
    type: Date,
    
  },
  HBL_HAWB_NO: {
    type: String,
    
  },
  ROWGUID: {
    type: String,
    
  },
  ORIGINAL_DOC_RCPT_DATE: {
    type: String,
    
  },
  POD_DATE: {
    type: Date,
    
  },
  POD_DATE_EST: {
    type: Date,
    
  },
  SHBL_SHAWB_NO: {
    type: String,
    
  },
  POD_SIGNATORY: {
    type: String,
    
  },
  SHIPMENT_NO_TEXT: {
    type: String,
    
  },
  SEARCH_TEXT: {
    type: String,
    
  },
  CUST_NOTE_COUNT: {
    type: Number,
    
  },
  NOTE_COUNT: {
    type: Number,
    
  },
  CLIENT_ID: {
    type: String,
    
  },
  ENTRY_FILED_DATE: {
    type: Date,
    
  },
  CONSOLIDATION_NO: {
    type: String,
    
  },
  BOOKING_DATE: {
    type: Date,
    
  },
  DEST_COUNTRY_ID: {
    type: Number,
    
  },
  ORIG_COUNTRY_ID: {
    type: Number,
    
  },
  PRECARRIAGE_PICKUP_ID: {
    type: Number,
    
  },
  CUSTOMS_BROKER_ID: {
    type: Number,
    
  },
  IT_NO: {
    type: String,
    
  },
  date: {
    type: Date,
    default: Date.now
  }


});

module.exports = Tran_shipment = mongoose.model('shipment', Tran_Shipment_Schema);
