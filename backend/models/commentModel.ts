import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    postType:{
        type: String,
        enum: ['Notice', 'Event'],
        required: true, 
    },postId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },text:{
        type:String,
    },author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},{timestamps: true});
const Comment = mongoose.model("Comment", commentSchema);
export default Comment;