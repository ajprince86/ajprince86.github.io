const db = require(`../db`);
const Conference = require(`../models/conference`);
const Sponsor = require(`../models/sponsor`);
const Team = require(`../models/team`);

db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {
const nike = await Sponsor.find({name:`Nike`});
const jumpman = await Sponsor.find({name:`Jumpman`});
const adidas = await Sponsor.find({name:`Adidas`});
const sec = await Conference.find({ name:`South Eastern Conference`});
const acc = await Conference.find({ name:`Atlantic Coast Conference`});
const pac = await Conference.find({ name:`Pacific Conference`,});
const teams = 
    [
       {
        name:"Gators",
        school:"University of Florida ",
        logo:"https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png",
        national_champs:3,
        notable_players:['Emmit Smith','Chris Collinsworth','Tim Tebow'],
        top_25:false,
        conference_id:sec[0]._id,
        uniform_sponsor_id:jumpman[0]._id
    },
    
    {
        name:"Crimson Tide",
        school:"University of Alabama",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Alabama_Crimson_Tide_logo.svg/1200px-Alabama_Crimson_Tide_logo.svg.png",
        national_champs:15,
        notable_players:["Joe Namath","Travis Henry","Derrick Thomas"],
        top_25:true,
        conference_id:sec[0]._id,
        uniform_sponsor_id:nike[0]._id
    },
        {
        name:"Trojans",
        school:"University of Southern California",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/USC_Trojans_logo.svg/1200px-USC_Trojans_logo.svg.png",
        national_champs:11,
        notable_players:["Marcus Allen","Carson Palmer","Keyshawn Johnson"],
        top_25:false,
        conference_id:pac[0]._id,
        
    },
     {
        name:"Seminoles",
        school:"University of Florida State",
        logo:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Florida_State_Seminoles_logo.svg/1200px-Florida_State_Seminoles_logo.svg.png",
        national_champs:3,
        notable_players:["Deion Sanders","Ron Simmons","Charlie Ward"],
        top_25:false,
        conference_id:acc[0]._id,
        uniform_sponsor_id:nike[0]._id
    },
 {
        name:"Tigers",
        school:"Clemson University",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Clemson_Tigers_logo.svg/1200px-Clemson_Tigers_logo.svg.png",
        national_champs:3,
        notable_players:["DeAndre Watkins","Trevor Lawrence","Sammy Watkins"],
        top_25:true,
        conference_id:acc[0]._id,
         uniform_sponsor_id:nike[0]._id
    },
{
        name:"Bulldogs",
        school:"University of Georgia",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Georgia_Athletics_logo.svg/1200px-Georgia_Athletics_logo.svg.png",
        national_champs:3,
        notable_players:["Mo Lewis","Terrell Davis","Fran Tarkenton"],
        top_25:true,
        conference_id:sec[0]._id,
         uniform_sponsor_id:nike[0]._id
    },
 {
        name:"Ducks",
        school:"University of Oregon",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Oregon_Ducks_logo.svg/1200px-Oregon_Ducks_logo.svg.png",
        national_champs:0,
        notable_players:["Dan Fouts","Ahmad Rashad","Haloti Ngata"],
        top_25:true,
        conference_id:pac[0]._id,
         uniform_sponsor_id:nike[0]._id
    },
{
    name:"Hurricanes",
    school:"University of Miami",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Miami_Hurricanes_logo.svg/1200px-Miami_Hurricanes_logo.svg.png",
    national_champs:5,
    notable_players:["Vinny Testaverde","Ed Reed","Dwayne Johnson"],
    top_25:false,
    conference_id:acc[0]._id,
    uniform_sponsor_id:adidas[0]._id
},
{
    name:"Cardinal",
    school:"University of Stanford",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png",
    national_champs:2,
    notable_players:["John Elway","Richard Sherman","John Lynch"],
    top_25:false,
    conference_id:pac[0]._id,
    uniform_sponsor_id:nike[0]._id
},
    ]
    await Team.insertMany(teams);
    console.log(`Created new teams`);
};
   
const run = async () => {
   await main();
    db.close();
}

run();