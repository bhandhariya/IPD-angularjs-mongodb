var mongoose=require('mongoose');
var db=require('../db');
var autoIncrement=require('mongoose-auto-increment');
autoIncrement.initialize(db.db);

var Hospital=require('./hospital_model');
var _=require('lodash');

var BillingSequenceSchema=new mongoose.Schema({
    billingSequence:Number
})
var arr=[]

function give(){
    Hospital.findById("5c861ec82df421f8c5fc308d").exec((function(err,hos){
        if(err){
            console.log(err)
        }else{
           console.log(hos.suffix)
           arr.push(hos.suffix)
           console.log(arr[0])
        }
    }))
}

// BillingSequenceSchema.pre('save',function(){
//     give();
// })


BillingSequenceSchema.plugin(autoIncrement.plugin,{
    model: 'BillingSequence',
    field: 'billingSequence',
    startAt:arr[0],
    incrementBy: 1
});




module.exports=mongoose.model('BillingSequence',BillingSequenceSchema);