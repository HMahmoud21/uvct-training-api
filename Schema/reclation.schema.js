const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate');
const reclamationSchema=new mongoose.Schema({
    type:{type:String},
    description:{type:String},
    isVisible:{type:Boolean ,default:true},
    createdAt:{type:Date},
    formateur:{type:mongoose.Schema.Types.ObjectId,ref:'formateur'},
    candidat:{type:mongoose.Schema.Types.ObjectId,ref:'candidat'},
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
reclamationSchema.pre('find',findVisible(population));
reclamationSchema.pre('findOne',findVisible(population));
reclamationSchema.pre('count',findVisible());

reclamationSchema.plugin(deepPopulate,{})
const reclamation=mongoose.Model('reclamation',reclamationSchema,'reclamation');
module.exports=reclamation