const  app  = require("./server");
const { config }  = require("./config");

console.log(baseConfig.app);

if (!config.app.port) {
  throw new Error("App config is invalid");
}

// connect().then(() => {
  app.listen(config.app.port, () => {
    console.log(`Server listening on ${baseConfig.app.port}`);
  });
// });
