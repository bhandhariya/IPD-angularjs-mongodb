var Product=require('../model/product_model');
var Query=require('../quries/product_query');
var mongoose=require('mongoose');

exports.create=function(req,res,next){
    var data=req.body;
    console.log(data)
    
    Query.generatedProductSequence(function(err,sequence){
        if(!err && sequence){
            var product=new Product({
                _id:new mongoose.Types.ObjectId,
                name:data.name,
                PID:sequence,
                des:data.description,
                quantity:data.qty,
                mrp:data.mrp,
                selling_price:data.sellingPrice,
                supplier:data.supplierName,
                discount:data.discount,
                company_name:data.companyName,
                min_qty:data.minqty
            })
            product.save(function(err,pro){
                if(!err && pro){
                    res.send('product Saved')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send(err)
        }
    })

    // var product=new Product({
    //     _id:new mongoose.Types.ObjectId,
    //     des:data.description,
    //     quantity:data.qty,
    //     mrp:data.mrp,
    //     selling_price:data.sellingPrice,
    //     supplier:data.supplierName,
    //     discount:data.discount,
    //     company_name:data.companyName,
    //     min_qty:data.minqty
    // })
    // product.save(function(err,pro){
    //     if(!err && pro){
    //         res.send('product Saved ')
    //     }else{
    //         res.send(err)
    //     }
    // })


}

exports.find=function(req,res,next){
    Product.find(function(err,pro){
        if(!err && pro){
            res.send(pro)
        }else{
            res.send(err)
        }
    })
}