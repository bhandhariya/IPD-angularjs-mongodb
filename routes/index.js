var express = require('express');
var router = express.Router();
var Patient=require('../model/patient_model');
var PatientSequence=require('../model/patient_sequence_modal');
var PatientQuery=require('../quries/customer_quries')
var mongoose=require('mongoose');
var Hospital=require('../model/hospital_model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('ok it is working')
});

router.post('/create', function(req, res, next) {
  var data=req.body;
  PatientQuery.generatedCustomerSequence(function(err,sequence,addmis){
    if(err){
      res.send(err)
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
            hospital_id : "5c861ec82df421f8c5fc308d",
            UHID:sequence,
            Addmission_no:addmis
      });
      patient.save(function(err,pat){
        if(err){
          res.send(err)
        }else{
          if(pat){
            Hospital.findByIdAndUpdate(pat.hospital_id,{
              $push:{patient_id:pat._id}
          }).exec(function(err,result){
            if(result && !err){
              res.send(result)
            }else{
              res.send(err)
            }
          })
          }
        }
      })
    }
  })
});


module.exports = router;
