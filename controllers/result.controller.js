const customerCommunication=require('../models/customerCommunication');
const callRecord=require('../models/callRecord')
const getAllCommunications= async (req,res)=>{
    try
    {
        const result1=await customerCommunication.find();
        result1.sort((a,b)=>(a.timestamp-b.timestamp));
        const result2=await callRecord.find();
        if(result1.type === "chat")
           result2.callType="chat";
        else if(result1.type === "outbound_call")
           result2.callType="outbound_call";
        else if(result1.type === "missed_call")
           result2.callType="missed_call";
        else if(result1.type === "vm")
           result2.callType="vm"
        res.status(200).send([...result1,...result2])
    }
    catch(e)
    {
        console.log(e.message);
    }
}
module.exports={
    getAllCommunications
}