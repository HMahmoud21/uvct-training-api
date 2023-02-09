const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate');
const formateurSchema=new mongoose.Schema({
    nom:{type:String},
    mail:{type:String},
    tel:{type:String},
    pwd:{type:String},
    siteWeb:{type:String},
    isVisible:{type:Boolean ,default:true},
    createdAt:{type:Date},
    description:{type:String},
})
const population=[]
const formateur=mongoose.Model('formateur',formateurSchema,'formateur');
module.exports=formateur