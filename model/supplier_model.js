var mongoose=require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
var moment=require('moment');
var Schema=mongoose.Schema;


var SupplierSchema=new mongoose.Schema({
        _id:{type:Schema.Types.ObjectId},
        name:{type:Schema.Types.String},
        address:{type:Schema.Types.String},
        phone:{type:Schema.Types.Number},
        email:{type:Schema.Types.String},
        note:{type:Schema.Types.String},
        day_visit:{type:Schema.Types.String},
        company_supplied:[{type:Schema.Types.String}]
},{
    toObject:{virtuals:true},
    toJSON:{virtuals:true}
});




module.exports=mongoose.model('Supplier',SupplierSchema);