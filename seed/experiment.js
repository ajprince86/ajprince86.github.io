const db = require(`../db`);
const Conference = require(`../models/conference`)
const Team = require(`../models/team`);

db.on(`error`, console.error.bind(console, `MongoDB connection error`));


const main = async () => {
const sec = await Conference.find({ name:`South Eastern Conference`});
const acc = await Conference.find({ name:`Atlantic Coast Conference`});
const pac = await Conference.find({ name:`Pacific Conference`,});
    const gator = await new Team({
        name:"Gators",
        school:"University of Florida ",
        logo:"https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png",
        nationalChamps:3,
        notablePlayers:['Emmit Smith','Chris Collinsworth','Tim Tebow'],
        top25:false,
        conference_id:sec[0]._id
    });
    gator.save();
    const crimsonTide = await new Team({
        name:"Crimson Tide",
        school:"University of Alabama",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Alabama_Crimson_Tide_logo.svg/1200px-Alabama_Crimson_Tide_logo.svg.png",
        nationalChamps:15,
        notablePlayers:["Joe Namath","Travis Henry","Derrick Thomas"],
        top25:true,
        conference_id:sec[0]._id
    });
    crimsonTide.save();
    const trojan = await new Team({
        name:"Trojans",
        school:"University of Soutern California",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/USC_Trojans_logo.svg/1200px-USC_Trojans_logo.svg.png",
        nationalChamps:11,
        notablePlayers:["Marcus Allen","Carson Palmer","Keyshawn Johnson"],
        top25:false,
        conference_id:pac[0]._id
    });
    trojan.save();
    const seminole = await new Team({
        name:"Seminoles",
        school:"University of Florida State",
        logo:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Florida_State_Seminoles_logo.svg/1200px-Florida_State_Seminoles_logo.svg.png",
        nationalChamps:3,
        notablePlayers:["Deion Sanders","Ron Simmons","Charlie Ward"],
        top25:false,
        conference_id:acc[0]._id
    });
    seminole.save();
    const tiger = await new Team({
        name:"Tigers",
        school:"Clemson University",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Clemson_Tigers_logo.svg/1200px-Clemson_Tigers_logo.svg.png",
        nationalChamps:3,
        notablePlayers:["DeAndre Watkins","Trevor Lawrence","Sammy Watkins"],
        top25:true,
        conference_id:acc[0]._id
    });
    tiger.save();
    const bulldog = await new Team({
        name:"Bulldogs",
        school:"University of Georgia",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Georgia_Athletics_logo.svg/1200px-Georgia_Athletics_logo.svg.png",
        nationalChamps:3,
        notablePlayers:["Mo Lewis","Terrell Davis","Fran Tarkenton"],
        top25:true,
        conference_id:sec[0]._id
    });
    bulldog.save();
    const ducks = await new Team({
        name:"Ducks",
        school:"University of Oregon",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Oregon_Ducks_logo.svg/1200px-Oregon_Ducks_logo.svg.png",
        nationalChamps:0,
        notablePlayers:["Dan Fouts","Ahmad Rashad","Haloti Ngata"],
        top25:true,
        conference_id:pac[0]._id
    })
ducks.save();
const hurricane = await new Team({
    name:"Hurricanes",
    school:"University of Miami",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Miami_Hurricanes_logo.svg/1200px-Miami_Hurricanes_logo.svg.png",
    nationalChamps:5,
    notablePlayers:["Vinny Testaverde","Ed Reed","Dwayne Johnson"],
    top25:false,
    conference_id:acc[0]._id
});
hurricane.save();
const cardinal = await new Team({
    name:"Cardinal",
    school:"University of Stanford",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png",
    nationalChamps:2,
    notablePlayers:["John Elway","Richard Sherman","John Lynch"],
    top25:false,
    conference_id:pac[0]._id
});
cardinal.save();
}

const run = async () => {
   await main();
    db.close();
}

run();


const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const sponsor = new Schema(
{
    name:{type:String,required:true},
    revenue:{type:String,required:true},
    stadium:{type:String,required:true},
    newYearsBowl:{type:Boolean,required:true}
    conferenceAffiliation:{type:Array,required:true}
},
{timestamps:true}
)

module.exports = mongoose.model(`bowls`,Bowl);

// async function getPlantById(req,res){
//     try {
//         const{id} = req.params;
//         const plant = await Plant.findById(id);
//         if(plant){
//             return res.status(200).json(plant);
//         }
//         return res.status(404).send(`Plant with the specified ID does not exist`);

//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }