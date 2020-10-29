const  auth = require("./routes/auth");
// import user from "./routes/user";
const init = () => {
  const app = express.Router();
  auth.init(app);
  // user(app);
  return app;
};

module.exports = {
  init,
};
