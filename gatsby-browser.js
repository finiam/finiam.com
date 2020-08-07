require("normalize.css");
require("./src/stylesheets/reset.css");
require("./src/stylesheets/globals.css");
const onClientEntry = require("./config/onClientEntry");

exports.onClientEntry = onClientEntry;
