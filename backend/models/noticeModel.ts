import mongoose from "mongoose";
const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category:{
        type:String,
        enum:["sports","culturals","academics"],
        required:true,
    },
    postBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{timestamps: true});
const notice= mongoose.model("Notice", noticeSchema);
export default notice;