import mongoose from 'mongoose';
const schema = mongoose.Schema({
           tuit: String,
           likes: Number,
           liked: Boolean,
           unlikes: Number,
           image: String,
           handle: String,
           userName: String,
           time: String,
           retuits: Number,
           replies: Number,
           title: String,
       }, {collection: 'tuits'});
export default schema;