var mongoose=require('mongoose');
var db=require('../db');
var autoIncrement=require('mongoose-auto-increment');
autoIncrement.initialize(db.db);


var ProductSequenceSchema=new mongoose.Schema({
    productSequence:Number
})

ProductSequenceSchema.plugin(autoIncrement.plugin,{
    model: 'ProductSequence',
    field: 'productSequence',
    startAt: 0,
    incrementBy: 1
});



module.exports=mongoose.model('ProductSequence',ProductSequenceSchema);