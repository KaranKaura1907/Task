const resultController= require('../controllers/result.controller');
module.exports=function (app){
   app.get('/api/v1/masterData',resultController.getAllCommunications);
}