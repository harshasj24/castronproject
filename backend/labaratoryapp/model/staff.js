const { default: mongoose } = require('mongoose')
const momgoose = require('mongoose')
const Schema =mongoose.Schema

const StaffModel= new Schema({
    fName:{
        required:true,
        type:String
    },
    lName:{
        required:true,
        type:String
    },
    staffId:{
        required:true,
        type:String
    },
     email:{
        type:String
     },
     phone:{
        required:true,
        type:String
     },
     role:{
        type:String
     },
     password:{
        type:String
     },
     isActive:{
        type:Boolean
     },
     createdDate:{
        type:Date
     },
     createdBy:{
        type:String
     }

})

module.exports = mongoose.model('staffModel',StaffModel)