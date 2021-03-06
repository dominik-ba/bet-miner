const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  teamA: String,
  teamB: String,
  scheduledAt: Date,
  result: {
    score: {
      teamA: Number,
      teamB: Number
    }
  },
  link: String
});

const Game = mongoose.model('Game', GameSchema);

module.exports = {
  Game,
  GameSchema
};
