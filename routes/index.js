var express = require('express');
var router = express.Router();
var Patient=require('../model/patient_model');
var PatientSequence=require('../model/patient_sequence_modal');
var PatientQuery=require('../quries/customer_quries')
var mongoose=require('mongoose')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('ok it is working')
});

router.post('/create', function(req, res, next) {
  var data=req.body;
  PatientQuery.generatedCustomerSequence(function(err,sequence,addmis){
    if(err){
      res.send('seqnce not generated')
    }else{
      var patient=new Patient({
        _id:new mongoose.Types.ObjectId,
            first_name:data.first_name,
            primary_contact_number:data.primary_contact_number,
            last_name:data.last_name,
            secondary_contact_number:data.secondary_contact_number,
            gender:data.gender,
            email:data.email,
            date_of_birth:data.date_of_birth,
            adhar_number:data.adhar_number,
            present_address:data.present_address,
            permanent_address:data.permanent_address,
            marrital_status:data.marrital_status,
            parent_name:data.parent_name,
            education:data.education,
            occupation:data.occupation,
            identification_mark:data.identification_mark,
            income:data.income,
            town:data.town,
            religion:data.religion,
            country:data.country,
            family_type:data.family_type,
            nationality:data.nationality,
            locality:data.locality,
            info_source:data.info_source,
            hospital_id:data.hospital_id,
            UHID:sequence,
            Addmission_no:addmis
      });
      patient.save(function(err,pat){
        if(err){
          res.send(err)
        }else{
          res.send(pat)
        }
      })
    }
  })
});


module.exports = router;
