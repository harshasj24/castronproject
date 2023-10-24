const app = require("./app");
const port = 4300;

const logger = require("./config/logger");

app.listen(port, () => {
  console.log(`server is lisiting on ${port}`);
  logger.info("info", `server is lisiting on ${port}`);
});
