'use strict'

const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/reddit'
/////directing to local db


mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(MONGODB_URL)
module.exports.disconnect = () => mongoose.disconnect()
