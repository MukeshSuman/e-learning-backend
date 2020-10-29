const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');


async function init ({ expressApp }) {
  const mongoConnection = await mongooseLoader();
  console.log('MongoDB Initialized');
  await expressLoader({ app: expressApp });
  console.log('Express Initialized');

  // ... more loaders can be here 

  // ... Initialize agenda
  // ... or Redis, or whatever you want
} 


module.exports = {
  init,
};

