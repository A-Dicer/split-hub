const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RaceSchema = new Schema({
    race: {
        gameTitle: { type: String, required: "String is Required" },
        started: Boolean,
        racers: {
            name: { type: String, required: "String is Required" },
            posistion: { type: Number, unique: true, required: true },
            ready: Boolean
        },
        raceCreated: { type: Date, default: Date.now }
    },
});

// This creates our model from the above schema, using mongoose's model method
var Test = mongoose.model("Test", RaceSchema);

// Finally, we export the module, allowing server.js to hook into it with a require statement
module.exports = Test;
