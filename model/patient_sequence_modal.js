var mongoose=require('mongoose');
var db=require('../db');
var Patient=require('mongoose-auto-increment');
var autoIncrement=require('mongoose-auto-increment');
autoIncrement.initialize(db.db);

var PatientSequenceSchema=new mongoose.Schema({
    patientSequence:Number
})

PatientSequenceSchema.plugin(autoIncrement.plugin,{
    model: 'PatientSequence',
    field: 'patientSequence',
    startAt: 0,
    incrementBy: 1
});

module.exports=mongoose.model('PatientSequence',PatientSequenceSchema);