import mongoose from 'mongoose'
const { Schema } = mongoose;


const interviewSchema = new Schema({
    interviewer_id:[{
        type: String,
    }],
    engineer_id:{
        type:String,
        required:true,
       
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Interview', interviewSchema);