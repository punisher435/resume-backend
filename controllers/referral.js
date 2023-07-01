const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Referral = require("../models/referral");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");


exports.createReferral = catchAsyncErrors(async (req, res, next) => {
  

    const { id_manager,id_engineer,email_manager,email_engineer } = req.body;
  
    const referral = await Referral.create({
        id_manager,id_engineer,email_manager,email_engineer
      
    });
  
    res.status(200).send(referral);
    
  });