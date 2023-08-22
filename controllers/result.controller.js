const customerCommunication=require('../models/customerCommunication');
const getAllCommunications= async (req,res)=>{
    try
    {
        const result=await customerCommunication.find();
        res.status(200).send(result)
    }
    catch(e)
    {
        console.log(e.message);
    }
}
module.exports={
    getAllCommunications
}