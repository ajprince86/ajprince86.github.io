const db = require(`../db`);
const Sponsor = require(`../models/sponsor`);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
   const sponsors = [
{
    name: "Jumpman",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg",
    revenue:"4.7 million",
    ceo:"Larry Miller"
},
      {
      name:"Nike",
      logo:"https://i.pinimg.com/600x315/1c/11/4e/1c114e79fb72cfa2e6b73e72ce50278a.jpg",
      revenue:"37.4 million",
      ceo:"John Danahoe"
      },

{
      name:"Adidas",
      logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png",
      revenue:"24.6 million",
      ceo:"Kasper Rorsted"
}
   ];
   
   await Sponsor.insertMany(sponsors);
   console.log(`Created sponsors`);
  
}

const run = async()=>{
    await main();
    db.close();
}

run();