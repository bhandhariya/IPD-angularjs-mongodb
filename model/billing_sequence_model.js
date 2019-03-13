"use strict"

var mongoose=require('mongoose');
var db=require('../db');
var autoIncrement=require('mongoose-auto-increment');
autoIncrement.initialize(db.db);

var Hospital=require('./hospital_model');
var _=require('lodash');

var BillingSequenceSchema=new mongoose.Schema({
    billingSequence:Number
})



BillingSequenceSchema.plugin(autoIncrement.plugin,{
    model: 'BillingSequence',
    field: 'billingSequence',
    startAt: 0,
    incrementBy: 1
});




module.exports=mongoose.model('BillingSequence',BillingSequenceSchema);