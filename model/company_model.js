var mongoose=require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
var moment=require('moment');
var Schema=mongoose.Schema;


var CompanySchema=new mongoose.Schema({
        _id:{type:Schema.Types.ObjectId},
        name:{type:Schema.Types.String},
        address:{type:Schema.Types.String},
        phone:{type:Schema.Types.Number},
        email:{type:Schema.Types.String},
        supplier:{String}
},{
    toObject:{virtuals:true},
    toJSON:{virtuals:true}
});




module.exports=mongoose.model('Company',CompanySchema);