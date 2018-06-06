const mongoose = require('mongoose');
mongoose.connect(process.env.DB_ADDRESS || "mongodb://locahost:27017/myQuickStackTemplate"); 
module.exports = mongoose