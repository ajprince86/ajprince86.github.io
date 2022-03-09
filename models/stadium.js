const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const Stadium = new Schema(
{
    name:{type:String,required:true},
    capacity:{type:Number,required:true},
    image:{type:String,required:true},
    team_id:{type:Schema.Types.ObjectId,ref:`team_id`},
    location:{type:String,required:true},
},
{timestamps:true}
)



module.exports = mongoose.model(`stadiums`,Stadium)