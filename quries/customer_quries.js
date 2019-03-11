var PatientSequence=require('../model/patient_sequence_modal');
var pad=require('pad')


exports.generatedCustomerSequence = function(gccallback) {
    var patientSequenceObj = new PatientSequence();
    patientSequenceObj.save(function(err) {
        if (err) {
            gccallback(err, null);
        } else {
            PatientSequence.findById({ "_id": patientSequenceObj["_id"] }).exec(function(err, incDoc) {
                if (err) {
                    gccallback(err, null);
                } else {
                    var patientSequence = ("UHID").concat(pad(5, incDoc["patientSequence"], "0"));
                    var addmissionSequence=("ADD").concat(pad(5,incDoc["addmissionSequence"],"0"))
                    gccallback(null, patientSequence,addmissionSequence)
                }
            })
        }
    })
}