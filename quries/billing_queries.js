var BillingSequence=require('../model/billing_sequence_model');
var pad=require('pad')
var Hospital=require('../model/hospital_model');

exports.generatedBillingSequence = function(gccallback) {
    var billingSequenceObj = new BillingSequence();
    billingSequenceObj.save(function(err) {
        if (err) {
            gccallback(err, null);
        } else {
            BillingSequence.findById({ "_id": billingSequenceObj["_id"] }).exec(function(err, incDoc) {
                if (err) {
                    gccallback(err, null);
                } else {
                    Hospital.findById("5c861ec82df421f8c5fc308d").exec(function(err,hos){
                        if(hos){
                            var billSequence = (hos.prefix).concat(pad(5, incDoc["billingSequence"], "0"));
                            gccallback(null, billSequence)
                        }
                    })

                    
                }
            })
        }
    })
}