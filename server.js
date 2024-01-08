const app = require('./app');
const config = require("./config/config");

const port = config.PORT || 3000

// Listening To Application Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})