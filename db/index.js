const mongoose = require(`mongoose`);
const dotenv = require(`dotenv`);
dotenv.config();
// let MONGODB_URI =
//   process.env.PROD_MONGODB ||
//   process.env.MONGODB_URI ||
//   `mongodb://127.0.0.1:27017/footballDatabase`;

mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`Successfully connected to MongoDB`);
  })
  .catch((e) => {
    console.error(`Connection Error`, e.message);
  });

const db = mongoose.connection;
module.exports = db;
