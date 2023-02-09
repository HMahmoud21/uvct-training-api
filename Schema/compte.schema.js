const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate');
const compteSchema=new mongoose.Schema({
    devise:{type:String},
    type:{type:String},
    pays:{type:String},
    formateur:{type:mongoose.Schema.Types.ObjectId,ref:'formateur'},
    candidat:{type:mongoose.Schema.Types.ObjectId,ref:'candidat'},
    numCarte:{type:String},
    numCopmte:{type:String},
    isVisible:{type:Boolean ,default:true},
 
})

    const population=[
        {
            path:formateur,
            match:{isVisible: true}
        },
        {
            path:candidat,
            match:{isVisible:true}
        }
        
    ]
    compteSchema.pre('find',findVisible(population));
    compteSchema.pre('findOne',findVisible(population));
    compteSchema.pre('count',findVisible());
    
    compteSchema.plugin(deepPopulate,{})

const compte=mongoose.Model('compte',compteSchema,'compte');
module.exports=compte