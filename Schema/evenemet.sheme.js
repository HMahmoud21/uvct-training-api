const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate');
const evenementSchema=new mongoose.Schema({
    nom:{type:String},
    prix:{type:Float32Array},
    description:{type:String},
    nbTicket:{type:Int16Array},
    isVisible:{type:Boolean ,default:true},
    dateDeb:{type:Date},
    dateFin:{type:Date},
})
const population=[]
const evenement=mongoose.Model('evenement',evenementSchema,'evenement');
module.exports=evenement