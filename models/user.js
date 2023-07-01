import mongoose from 'mongoose'
const { Schema } = mongoose;


const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    first_name: {
        type: String,
        required:true,
    },
    last_name: {
        type: String,
        required:true,
    },
    resume:
    {
        type: String,
    },
    resumeid:
    {
        type: String,
    },
    skillset:[{
        type: String,
    }],
    manager:{
        type:Boolean,
        default:false,
    },
    joinDate: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('User', userSchema);