const mongoose=require('mongoose');
const customerCommunicationSchema= new mongoose.Schema({
    userId:{
        type: Number,
        required: true
    },
    timestamp:{
        type: String,
    },
    id:{
        type: String,
    },
    type:{
        type: String,
        required: true
    },
    domain:{
        type: String,
    },
    direction:{
        type: String,
    },
    from_num:{
        type: String,
    },
    text:{
        type: String,
    },
    fromName:{
        type: String,
        required: true
    },
    department:{
        type: String,
    },
    toName:{
        type: String,
        required: true
    },
    chatGPTSummary:{
        type: String,
    },
    toDepartment:{
        type: String,
    },
    fromDepartment:{
        type: String
    },
})
module.exports= mongoose.model("customerCommunication",customerCommunicationSchema)