const mongoose = require('mongoose') 
module.exports = async () => {
  const connection = await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  return connection.connection.db;
}