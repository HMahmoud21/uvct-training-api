const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate');
const candidatSchema=new mongoose.Schema({
    nom:{type:String},
    mail:{type:String},
    tel:{type:String},
    pwd:{type:String},
    point:{type:Int16Array},
    isVisible:{type:Boolean ,default:true},
    createdAt:{type:Date},
})
const population=[]
const candidat=mongoose.Model('candidat',candidatSchema,'candidat');
module.exports=candidat