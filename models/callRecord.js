const mongoose=require('mongoose');
const callRecordSchema= new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        ref:"customerCommunication"
    },
    name:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    startTime:{
        type: String,
        required: true
    },
    callType:{
        type: String,
        default: "chat",
        required: true
    },

})
module.exports= mongoose.model("callRecord",callRecordSchema)