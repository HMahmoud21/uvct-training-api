const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate');
const diplomeSchema=new mongoose.Schema({
    titre:{type:String},
    isVisible:{type:Boolean ,default:true},
    date:{type:Date},
    formation:{type:mongoose.Schema.Types.ObjectId,ref:'formation'},
    candidat:{type:mongoose.Schema.Types.ObjectId,ref:'candidat'}
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
diplomeSchema.pre('find',findVisible(population));
diplomeSchema.pre('findOne',findVisible(population));
diplomeSchema.pre('count',findVisible());

diplomeSchema.plugin(deepPopulate,{})
const diplome=mongoose.Model('diplome',diplomeSchema,'diplome');
module.exports=diplome