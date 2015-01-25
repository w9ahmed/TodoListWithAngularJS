var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(
    serveStatic("../ProAngularJs")
).listen(5000);