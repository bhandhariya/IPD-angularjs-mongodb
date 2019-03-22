var mongoose=require('mongoose');

var moment=require('moment');
var Schema=mongoose.Schema;
var ProductSchema=new mongoose.Schema({
    _id:{type:Schema.Types.ObjectId,required:true},
    PID:String,
    name:{type:Schema.Types.String},
    des:{type:Schema.Types.String},
    quantity:{type:Schema.Types.Number},
    mrp:{type:Schema.Types.Number},
    selling_price:{type:Schema.Types.Number},
    supplier:String,
    discount:{type:Schema.Types.Number},
    company_name:{type:Schema.Types.String},
    min_qty:{type:Schema.Types.Number}


    
},{
    toObject:{virtuals:true},
    toJSON:{virtuals:true}
});







module.exports=mongoose.model('Product',ProductSchema);