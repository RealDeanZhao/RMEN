import mongoose, {SCHEMA} from 'mongoose';

var matchSchema = new Schema({
  league: String,
  teams: [{name: String}],
  startAt: {type: Date, defaut: Date.now},
  createAt: {type: Date, default: Date.now},
  modifyAt: {type: Date, default: Date.now}
});

export default Match = mongoose.model('Match', matchSchema);
