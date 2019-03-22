var ProductSequence=require('../model/product_sequence_model');
var pad=require('pad')


exports.generatedProductSequence = function(gccallback) {
    var productSequenceObj = new ProductSequence();
    productSequenceObj.save(function(err){
        if(err){
            gccallback(err,null)
        }else{
            ProductSequence.findById({"_id":productSequenceObj["_id"]}).exec(function(err,inDOC){
                if(err){
                    gccallback(err,null)
                }else{
                    var ps=("MEDICINE").concat(pad(5,inDOC["productSequence"],"0"))
                    gccallback(null,ps)
                }
            })
        }
    })
}