const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate');
const formation = require('./formation.schema');
const categorieSchema=new mongoose.Schema({
    non:{type:String},
    sousCategorie:{type:String},
    formation:{type:mongoose.Schema.Types.ObjectId,ref:'formation'},
    isVisible:{type:Boolean ,default:true},
    createdAt:{type:Date},
   
})
const population=[{
    path:formation,
    match:{isVisible: true}
}]

commentaireSchema.pre('find',findVisible(population));
commentaireSchema.pre('findOne',findVisible(population));
commentaireSchema.pre('count',findVisible());

commentaireSchema.plugin(deepPopulate,{})


const categorie=mongoose.Model('categorie',categorieSchema,'categorie');
module.exports=categorie