const Conference = require(`../models/conference`);
const Team = require(`../models/team`);
const Stadium = require(`../models/stadium`);
const Sponsor = require(`../models/sponsor`);

async function getAllConferences(req,res){
    try {
        const conferences = await Conference.find();
        return res.status(200).json({conferences})
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
async function getAllTeams(req,res){
    try {
        const teams = await Team.find();
        return res.status(200).json({teams})
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getAllStadiums(req,res){
    try {
        const stadiums = await Stadium.find();
        return res.status(200).json({stadiums})
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getAllSponsors(req,res){
    try {
        const sponsors = await Sponsor.find();
        return res.status(200).json({sponsors})
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function createTeam(req, res) {
  try {
    const team = await new Team(req.body);
    await team.save();
    return res.status(201).json({
      team,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createSponsor(req, res) {
  try {
    const sponsor = await new Sponsor(req.body);
    await team.save();
    return res.status(201).json({
      sponsor,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
async function createStadium(req, res) {
  try {
    const stadium = await new Stadium(req.body);
    await team.save();
    return res.status(201).json({
      stadium,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createConference(req, res) {
  try {
    const conference = await new Conference(req.body);
    await conference.save();
    return res.status(201).json({
      conference,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateConference(req,res){
    try {
    const{id} = req.params;
    await Conference.findByIdAndUpdate(id,req.body,{new:true},(err,conference)=>{
if(error){
    res.status(500).send(err);
}
if(!team){
    res.status(500).send(`Conference not found!`);
}
    })
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
    return res.status(200).json(conference);
}
async function updateSponsor(req,res){
    try {
    const{id} = req.params;
    await Sponsor.findByIdAndUpdate(id,req.body,{new:true},(err,sponsor)=>{
if(error){
    res.status(500).send(err);
}
if(!team){
    res.status(500).send(`Sponsor not found!`);
}
    })
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
    return res.status(200).json(conference);
}

async function updateTeam(req,res){
    try {
    const{id} = req.params;
    await Team.findByIdAndUpdate(id,req.body,{new:true},(err,team)=>{
if(error){
    res.status(500).send(err);
}
if(!team){
    res.status(500).send(`Team not found!`);
}
    })
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
    return res.status(200).json(conference);
}

async function deleteTeam(req,res){
    try {
        const {id} = req.params;
        const deleted = await Team.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).send(`Team deleted`);
        }
        throw new Error(`Team not found`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteSponsor(req,res){
    try {
        const {id} = req.params;
        const deleted = await Sponsor.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).send(`Sponsor deleted`);
        }
        throw new Error(`Sponsor not found`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
async function deleteConference(req,res){
    try {
        const {id} = req.params;
        const deleted = await Conference.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).send(`Conference deleted`);
        }
        throw new Error(`Conference not found`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}





 module.exports = {getAllConferences,getAllTeams,getAllStadiums,getAllSponsors,createTeam,createSponsor,createStadium,createConference,updateConference,updateTeam,updateSponsor,deleteTeam,deleteSponsor,deleteConference};
