const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const Sponsor = new Schema(
{
    name:{type:String,required:true},
    logo:{type:String,required:true},
    revenue:{type:String,required:true},
    ceo:{type:String,required:true}
},
{timestamps:true}
)

module.exports = mongoose.model(`sponsor`,Sponsor);