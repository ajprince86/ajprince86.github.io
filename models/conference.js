const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const Conference = new Schema(
{
    name:{type:String,required:true},
    year_created:{type:Number,required:true},
    logo:{type:String,required:true},
    headquarters:{type:String,required:true},
    num_members:{type:Number,required:true},
    expansion:{type:Boolean,required:true}
},
{timestamps:true}
)

module.exports = mongoose.model(`conferences`,Conference)