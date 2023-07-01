const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Interview = require("../models/interview");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");


exports.createInterview = catchAsyncErrors(async (req, res, next) => {
  

    const { interviewer_id,engineer_id } = req.body;
  
    const interview = await Interview.create({
        interviewer_id,engineer_id 
      
    });
  
    res.status(200).send(interview);
    
  });