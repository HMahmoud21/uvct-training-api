const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate');
const adminSchema=new mongoose.Schema({
    nom:{type:String},
    mail:{type:String},
    tel:{type:String},
    pwd:{type:String},
 
    isVisible:{type:Boolean ,default:true},
    createdAt:{type:Date},
})
const population=[]
const admin=mongoose.Model('admin',adminSchema,'admin');
module.exports=admin