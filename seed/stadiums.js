const db = require(`../db`);
const Stadium = require(`../models/stadium`);
const Team = require(`../models/team`);

db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async ()=>{
const florida = await Team.find({school:"University of Florida "});
const alabama = await Team.find({ school:"University of Alabama"});
const southern_cal = await Team.find({ school:"University of Southern California"});
const florida_state = await Team.find({ school:"University of Florida State"});
const clemson = await Team.find({ school:"Clemson University"});
const georgia = await Team.find({ school:"University of Georgia"});
const oregon = await Team.find({ school:"University of Oregon"});
const miami = await Team.find({ school:"University of Miami"});
const stanford = await Team.find({ school:"University of Stanford"});

const stadiums = [
       {
           name:"Ben Hill Griffin",
           capacity:88548,
           image:"https://upload.wikimedia.org/wikipedia/commons/7/7f/BenHillGriffinStadium.png",
           team_id:florida[0]._id,
           location:"Gainesville, Florida",
       },
       {
           name:"Bryant-Denny",
           capacity:101821,
           image:"https://upload.wikimedia.org/wikipedia/commons/3/34/BDS_West_2010-11-26.jpg",
           team_id:alabama[0]._id,
           location:"Tuscaloosa, Alabama ",
       },
        {
           name:"Los Angeles Memorial Coliseum",
           capacity:78467,
           image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2008-0913-USCOSU-Pan01.JPG/800px-2008-0913-USCOSU-Pan01.JPG",
           team_id:southern_cal[0]._id,
           location:"Los Angeles, California",
       },
        {
           name:"Doak Campbell",
           capacity:79560,
           image:"https://images.rivals.com/image/upload/f_auto,q_auto,t_large/bx4qsavv0kdxhz6huq6h",
           team_id:florida_state[0]._id,
           location:"Tallahassee, Florida ",
       },
        {
           name:"Memorial",
           capacity:81500,
           image:"https://upload.wikimedia.org/wikipedia/commons/b/b9/MemorialStadiumSept2006.jpg",
           team_id:clemson[0]._id,
           location:"Clemson, South Carolina",
       },
        {
           name:"Sanford Stadium",
           capacity:92746,
           image:"https://georgiadogs.com/images/2019/7/17/19fb_sanford_01.jpg",
           team_id:georgia[0]._id,
           location:"Athens, Georgia",
       },
        {
           name:"Autzen",
           capacity:54000,
           image:"https://s1.ticketm.net/dam/a/0c9/32d31633-ee59-461f-b5e9-7b8a13f900c9_448851_TABLET_LANDSCAPE_LARGE_16_9.jpg",
           team_id:oregon[0]._id,
           location:"Eugene, Oregon",
       },
        {
           name:"Hard Rock",
           capacity:65326,
           image:"https://miamihurricanes.com/imgproxy/WiDj7G_qnymqD4PmXhzwv_zOzldXxMAc1aue6cOUF5I/fit/2500/2500/ce/0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2h1cnJpY2FuZXNwb3J0cy1jb20vMjAyMC8wNC84MGZjMTNlOC0xMTExMTdfdW12c25kX3BtMzExLmpwZw.jpg",
           team_id:miami[0]._id,
           location:"Miami Gardens, Florida",
       },
        {
           name:"Stanford",
           capacity:50000,
           image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/2008-1115-006-USC-Stanford-PAN.jpg/988px-2008-1115-006-USC-Stanford-PAN.jpg",
           team_id:stanford[0]._id,
           location:"Stanford, California",
       }
   ]
   await Stadium.insertMany(stadiums);
   console.log(`Created new stadiums`);
}

const run = async()=>{
   await main();
    db.close()
}

run();