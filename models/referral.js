import mongoose from 'mongoose'
const { Schema } = mongoose;


const referralSchema = new Schema({
    email_manager:{
        type:String,
        required:true,
       
    },
    email_engineer:{
        type:String,
        required:true,
       
    },
    id_engineer:{
        type:String,
        required:true,
       
    },
    id_manager:{
        type:String,
        required:true,
        
    },
   
    createDate: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Referral', referralSchema);