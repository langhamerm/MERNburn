if (process.env.NODE_ENV === "production") {
    module.exports = require('./prod');
}
else {
    module.exports = require('./dev');
}



/* PRODUCTION DB
pw: TZx0iruavxlYhX1J
mongodb+srv://msl:TZx0iruavxlYhX1J@cluster0-2jjk4.mongodb.net/test?retryWrites=true&w=majority
*/