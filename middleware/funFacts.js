const funFacts = (req,res,next) =>{
const facts = [` Before every home game, flowers are placed at the graves of every former Uga (the English Bulldog mascot of Georgia).`, `Field goals in college football were originally worth five points. This was decreased to four points in 1904 and three points in 1909.`,`In the beginning, the balls used for college football were round.`,`College football developed out of the game of rugby.`,`Following a number of deaths, President Theodore Roosevelt threatened to ban college football in 1906.`,` Quarterbacks from Alabama won the first three Super Bowls. They also have more Super Bowl wins than quarterbacks from any other school (Kenny Stabler 1, Joe Namath 1 and Bart Starr 2).`,`Throughout the 1960s, the University of Florida kept a real-life alligator named Albert on the sidelines.`,`The Miami Hurricanes hold a record of 82 consecutive weeks where a former Hurricane scored a touchdown in an NFL game.`,` In 1905, 18 men were killed in college football games, and 159 were permanently injured.`,`The annual Florida-Georgia game is considered by many to be the world’s largest tailgate party. The game takes place on Saturday, but many fans begin arriving on Wednesday and don’t leave until Sunday.`];    
const random = Math.floor(Math.random() * 10);
console.log(facts[random]);
next();
}

module.exports = funFacts;