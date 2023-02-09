const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate');
const candidat = require('./candidat.schema');
const commentaireSchema=new mongoose.Schema({
    description:{type:String},
    formation:{type:mongoose.Schema.Types.ObjectId,ref:'formation'},
    candidat:{type:mongoose.Schema.Types.ObjectId,ref:'candidat'},
    isVisible:{type:Boolean ,default:true},
    createdAt:{type:Date},
   
})
const population=[
    {
        path:formation,
        match:{isVisible: true}
    },
    {
        path:candidat,
        match:{isVisible:true}
    }
    
]
commentaireSchema.pre('find',findVisible(population));
commentaireSchema.pre('findOne',findVisible(population));
commentaireSchema.pre('count',findVisible());

commentaireSchema.plugin(deepPopulate,{})
const commentaire=mongoose.Model('commentaire',commentaireSchema,'commentaire');
module.exports=commentaire