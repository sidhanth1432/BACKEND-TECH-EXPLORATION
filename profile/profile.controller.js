const {activateUser,getuserInfoById,deleteUser,Loan,loadData,mobilePre,broadband,dth,register,login, addMoney,send_Money_Type_Mob,latest_transaction,send_Money_Type_Accnt,dataCardRCHGTypePre,dataCardRCHGTypePost
   } = require("./profile.service");

    
const jwt=require('jsonwebtoken');


 
    const date = require('date-and-time');


module.exports = {
    activateUser_controller:async(req, res) => {
        try {  
  
            var data = req.body;
         
        
           
          
             
    
            const result = await activateUser(data);
    
    
    
            if(!result['isError']){
                result['success']='server: User Activation Successful ';
                result['isError']=0;
           
    
    
    
    
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    getuserInfoById_controller:async(req, res) => {
        try {  console.log(req);
            var data = req.query;
         
    
        
           
          
             
    
            const result = await getuserInfoById(data);
    
    console.log(result);
    
            if(!result['isError']){

                result['isError']=0;
           
    
    
    
    
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    deleteUser_controller:async(req, res) => {
        try {  
  
            var data = req.body;
         
        
           
          
             
    
            const result = await deleteUser(data);
    
    
    
            if(!result['isError']){
                result['success']='server: Deletion Successful ';
                result['isError']=0;
           
    
    
    
    
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    getLoan_controller:async(req, res) => {
        try {  
  
            var data = req.body;
            data["usr_id"]=req.auth["usr_pkid"];
            data["usr_phno"]=req.auth["usr_phno"];
            console.log(data);  
        
           
          
             
    
            const result = await Loan(data);
    
    
    
            if(!result['isError']){
                result['success']='server: Loan Application Successful ';
                result['isError']=0;
           
    
    
    
    
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    adminLoadData_controller:async(req, res) => {
        try {  
  
        
     
        //    if(req.auth.usr_fullname.match("/^sid$/") ){
            const result = await loadData();

            console.log(result);
            return res.status(200).json(result);
        //    }else{

        //     return res.status(400).json({error:"Unauthorized!",'isError':1});
        //    }
          
        
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    mobilePre_controller:async(req, res) => {
        try {  
  
            var data = req.body;
            data["usr_id"]=req.auth["usr_pkid"];
            data["usr_phno"]=req.auth["usr_phno"];
            console.log(data);  
        
           
          
             
    
            const result = await mobilePre(data);
    
    
    
            if(!result['isError']){
                result['success']='server: RS '+data['amt']+' Mobile Prepaid Recharge Successful ';
                result['isError']=0;
           
    
    
    
    
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    broadband_controller:async(req, res) => {
        try {  
  
            var data = req.body;
            data["usr_id"]=req.auth["usr_pkid"];
            data["usr_phno"]=req.auth["usr_phno"];
            console.log(data);  
        
           
          
             
    
            const result = await broadband(data);
    
    
    
            if(!result['isError']){
                result['success']='server: RS '+data['amt']+' Broadband Recharge Successful ';
                result['isError']=0;
           
    
    
    
    
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },

    dth_controller:async(req, res) => {
        try {  
  
            var data = req.body;
            data["usr_id"]=req.auth["usr_pkid"];
            data["usr_phno"]=req.auth["usr_phno"];
            console.log(data);  
        
           
          
             
    
            const result = await dth(data);
    
    
    
            if(!result['isError']){
                result['success']='server: RS '+data['amt']+' Data Card Recharge Successful ';
                result['isError']=0;
           
    
    
    
    
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    dataCardRCHGTypePost_controller:async(req, res) => {
        try {  
  
            var data = req.body;
            data["usr_id"]=req.auth["usr_pkid"];
            data["usr_phno"]=req.auth["usr_phno"];
            console.log(data);  
        
           
          
             
    
            const result = await dataCardRCHGTypePost(data);
    
    
    
            if(!result['isError']){
                result['success']='server: RS '+data['amt']+' Data Card Recharge Successful ';
                result['isError']=0;
           
    
    
    
    
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    dataCardRCHGTypePre_controller:async(req, res) => {
        try {  
  
            var data = req.body;
            data["usr_id"]=req.auth["usr_pkid"];
            data["usr_phno"]=req.auth["usr_phno"];
            console.log(data);  
        
           
          
             
    
            const result = await dataCardRCHGTypePre(data);
    
    
    
            if(!result['isError']){
                result['success']='server: RS '+data['amt']+' Data Card Recharge Successful ';
                result['isError']=0;
           
    
    
    
    
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    send_Money_Type_Accnt_controller:async(req, res) => {
        try {  
  
            var data = req.body;
            data["usr_id"]=req.auth["usr_pkid"];
            data["usr_phno"]=req.auth["usr_phno"];
            console.log(data);  
        
           
          
             
    
            const result = await send_Money_Type_Accnt(data);
    
    
    
            if(!result['isError']){
                result['success']='server: RS '+data['amt']+' sent to Accnt Number '+data['accnt_no'] +' of '+data['bank'];
                result['isError']=0;
           
    
    
    
    
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    latest_transaction_controller:async(req, res) => {
        try {  
  
            var data = req.body;
            data["usr_id"]=req.auth["usr_pkid"];
            data["usr_phno"]=req.auth["usr_phno"];
            console.log(data);  
        
           
          
             
    
            const result = await latest_transaction(data);

         
            
            var tempTransactions=result.transactions;
            
            tempTransactions.map((ele,i)=>{
               if(!result[ele['tr_transaction']] || result[ele['tr_transaction']]['tr_date_time']<ele['tr_date_time']){
               
                result[ele['tr_transaction']]=ele;

               }
               

return ele;

            })


    
   
    
    
    
    
    
    
    return res.status(200).json(result);

        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    send_Money_Type_Mob_controller:async(req, res) => {
        try {  
  
            var data = req.body;
            data["usr_id"]=req.auth["usr_pkid"];
            data["usr_phno"]=req.auth["usr_phno"];
            console.log(data);  
        
           
          
             
    
            const result = await send_Money_Type_Mob(data);
    
    
    
            if(!result['isError']){
                result['success']='server: RS '+data['send_mon']+' sent to '+data['sendto_ph_num'];
                result['isError']=0;
           
    
    
    
    
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    add_money_controller:async(req, res) => {
        try {  
  
            var data = req.body;
            data["usr_id"]=req.auth["usr_pkid"];
            data["usr_phno"]=req.auth["usr_phno"];
            console.log(data);  
        
           
          
             
    
            const result = await addMoney(data);
    
    
    
            if(!result['isError']){
                result['success']='server: RS '+data['add_mon']+' added to your wallet';
                result['isError']=0;
           
    
    
    
    
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    login_controller:async(req, res) => {
        try {
            console.log(req.body);    
  
            var data = req.body;
        
           
          
             
    
            const result = await login(data);
            console.log(result);
    
    
            if(!result['isError']){
                result['success']='server: User Log in Successful';
                result['isError']=0;
           
    
    
    const token=jwt.sign(result['user'][0],
    process.env.JWT_SECRET,
    {expiresIn:'15m'}
    
    );
    
    result['token']=token;

    console.log(result);
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    },
    register_controller:async(req, res) => {
        try {
            console.log(req.body);    
  
            var data = req.body;
        
           
          
             
    
            const result = await register(data);
            console.log(result);
    
    
            if(!result['isError']){
                result['success']='server: User Registration Successful';
                result['isError']=0;
           
    
    
    const token=jwt.sign(result['user'][0],
    process.env.JWT_SECRET,
    {expiresIn:'15m'}
    
    );
    
    result['token']=token;

    console.log(result);
    
    
    return res.status(200).json(result);
            }else{
               
                result['isError']=1;
                
             return res.status(400).json(result);
            }
    
        }catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    }
};
