const db = require(`../db`);
const Conference = require(`../models/conference`);
db.on(`error`, console.error.bind(console, `MongoDB connection error`));


const main = async () => {
    const conferences = [
        {
            name:`South Eastern Conference`,
            year_created: 1932,
            logo:`https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Southeastern_Conference_logo.svg/1200px-Southeastern_Conference_logo.svg.png`,
            headquarters:`Birmingham, Alabama`,
            num_members:14,
            expansion:true
        },
        {
            name:`Atlantic Coast Conference`,
            year_created:1953,
            logo:`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Atlantic_Coast_Conference_logo.svg/2560px-Atlantic_Coast_Conference_logo.svg.png`,
            headquarters:`Greensboro, North Carolina`,
            num_members:14,
            expansion:false
        },
        {
            name:`Pacific Conference`,
            year_created:1915,
            logo:`https://yt3.ggpht.com/ytc/AKedOLTxjcr0EXsX3kCcmJ-Da2KcOYAnWRQlq0uZQSHWdTQ=s900-c-k-c0x00ffffff-no-rj`,
            headquarters:`San Francisco, Califonia`,
            num_members:12,
            expansion:false
        }
    ]
    await Conference.insertMany(conferences);
    console.log(`Created new conferences`);
}

const run = async () => {
   await main();
    db.close();
}

run();