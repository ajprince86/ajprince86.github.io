const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const Team = new Schema(
{
    name:{type:String,required:true},
    school:{type:String,required:true},
    logo:{type:String,required:true},
    national_champs:{type:Number,required:true},
    notable_players:{type:Array,required:true},
    top_25:{type:Number,required:true},
    conference_id:{type:Schema.Types.ObjectId,ref:`conference`},
    uniform_sponsor_id:{type:Schema.Types.ObjectId,ref:`sponsor`}
},
{timestamps:true}
)



module.exports = mongoose.model(`teams`,Team)