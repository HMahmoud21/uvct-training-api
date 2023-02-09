const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate');
const couponSchema=new mongoose.Schema({
    Pourcentage:{type:Int16Array},
    code:{type:Int16Array},
    nbRemise:{type:Int16Array},
    isVisible:{type:Boolean ,default:true},
    dateDeb:{type:Date},
    dateFin:{type:Date},
    formation:{type:mongoose.Schema.Types.ObjectId,ref:'formation'},
})
const population=
    [{
        path:formation,
        match:{isVisible: true}
    }]
  

couponSchema.pre('find',findVisible(population));
couponSchema.pre('findOne',findVisible(population));
couponSchema.pre('count',findVisible());

couponSchema.plugin(deepPopulate,{})




const coupon=mongoose.Model('coupon',couponSchema,'coupon');
module.exports=coupon