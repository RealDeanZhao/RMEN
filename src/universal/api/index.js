import mongoose, {Schema} from 'mongoose';
import _ from 'lodash';

mongoose.connect(process.env.MONGO_URI + '/rmen');
