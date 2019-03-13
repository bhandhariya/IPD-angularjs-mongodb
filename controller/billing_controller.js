var Billing=require('../model/billing_modal');
var Patient=require('../model/patient_model');


// exports.bill=function(req,res,next){
//     var data=req.body;
//     Billing.create({
//         patient_id:data.pat,
//         hospital_id:data.hos,
//         service_id:data.service_ids
        
//     },function(err,result){
//         if(!err && result){
//             res.send(result)
//         }else{
//             res.send(err)
//         }
//     })


// }

exports.billforpat=function(req,res,next){
    var data=req.body;

    Patient.findById(data.pat_id,function(err,p){
        if(p){
            Billing.create({
                patient_id:p._id,
                hospital_id:p.hospital_id,
                service_id:p.services,
                total:data.total
            },function(err,result){
                if(!err && result){
                    res.send('Billing Added Successfully')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send(err)
        }
    })

}


exports.dayEndBilling=function(req,res,next){
    var data=req.body;
    Billing.find({
        billing_date:data.billing_date
    }).populate('hospital').populate('srervice').populate('patient').exec(function(err,result){
        if(!err && result){
            // console.log(result)
            res.send(result);
            
        }else{
            res.send('error in finding day end data report please check after some time ')
        }
    })
}

exports.getAllbilling=function(req,res,next){
    var data=req.body;
    console.log(data)
    Billing.find({patient_id:data.id}).populate('srervice').exec(function(err,bill){
        if(bill){
            res.send(bill)
        }
    })
}

exports.billingbetweentwodays=function(req,res,next){
    var data=req.body;
    console.log(data);
    Billing.find({
        billing_date:{
            $gte:data.startDate,
            $lte:data.endDate
        }
    }).populate('hospital').populate('srervice').populate('patient').exec(function(err,result){
        if(!err && result){
            console.log(result)
            res.send(result);
            
        }else{
            res.send('error in finding day end data report please check after some time ')
            console.log(err)
        }
    })

}

exports.searchbyBillId=function(req,res,next){
    var data=req.body;
    Billing.findOne({BID:data.id}).populate('patient').exec(function(err,bill){
        if(!err && bill){
            res.send(bill)
        }else{
            res.send(err)
        }
    })
}




exports.getAllBillingTillToday=function(req,res,next){
    Billing.find().populate('patient').exec(function(err,bill){
        res.send(bill)
    })
}

exports.searchbyBillName=function(req,res,next){
    var data=req.body;
    // Billing.find().populate({
    //     path:"patient",
    //     match:{
    //         first_name:data.name
    //     }
    // }).exec(function(err,pat){
    //     res.send(pat)
    // })
    Patient.find({first_name:data.name}).populate('billlllll').exec((err,pat)=>{
        res.send(pat)
    })

}