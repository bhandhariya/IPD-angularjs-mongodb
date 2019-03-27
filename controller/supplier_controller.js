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
        day_visit:data.day_visit,
        company_supplied:data.company_supplied
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

exports.findByID=function(req,res,next){
    Supplier.findById(req.body.id).exec(function(err,supp){
        if(!err && supp){
            res.send(supp)
        }else{
            res.send(err)
        }
    })
}