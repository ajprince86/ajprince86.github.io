const { Router } = require(`express`);
const controllers = require(`../controllers`);
const middleware = require(`../middleware/funFacts.js`);
const router = Router();


 router.get(`/`, (req, res) => {
  res.send(`Welcome to my College Football Database!!`);
 });

router.post(`/teams`,controllers.createTeam);
router.post(`/sponsors`, controllers.createSponsor);
router.post(`/conference`, controllers.createConference);
router.post(`/stadiums`, controllers.createStadium);
router.get(`/conferences`,controllers.getAllConferences);
router.get(`/teams`,controllers.getAllTeams);
router.get(`/stadiums`,controllers.getAllStadiums);
router.get(`/sponsors`,controllers.getAllSponsors);
router.put(`/conference/:id`,controllers.updateConference);
router.put(`/team/:id`,controllers.updateTeam);
router.put(`/sponsor/:id`,controllers.updateSponsor);
router.delete(`/conference/:id`,controllers.deleteConference);
router.delete(`/team/:id`,controllers.deleteTeam);
router.delete(`/sponsor/:id`,controllers.deleteSponsor);
 module.exports = router;
