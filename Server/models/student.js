const mongoose = require("mongoose");

const student = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dept: {
        type: String,
        required: true,
    },
    roll: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("student", student);
