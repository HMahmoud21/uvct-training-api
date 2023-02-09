const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate');
const formationSchema=new mongoose.Schema({
    nom:{type:String},
    prix:{type:Float32Array},
    description:{type:String},
    niveau:{type:Int16Array},
    isVisible:{type:Boolean ,default:true},
    date:{type:Date},
})
const population=[]
const formation=mongoose.Model('formation',formationSchema,'formation');
module.exports=formation