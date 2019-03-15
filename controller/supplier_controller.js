var Supplier=require('../model/supplier_model');
var mongoose=require('mongoose');


exports.createSupplier=function(req,res,next){
    var data=req.body;
    var supplier=new Supplier({
        _id:new mongoose.Types.ObjectId,
        name:data.name,
        address:data.address,
        email:data.email,
        phone:data.phone,
        note:data.note,
        day_visit:data.day,
        company_supplied:data.company[0]
    })   
    supplier.save(function(err,supp){
        if(!err && supp){
            res.send('Supplier has been Created Successfully')
        }else{
            res.send('Some Error in Creating Supplier')
        }
    })
}

exports.findAllSuppliers=function(req,res,next){
    Supplier.find(function(err,supp){
        if(!err,supp){
            res.send(supp)
        }else{
            res.send(err)
        }
    })
}