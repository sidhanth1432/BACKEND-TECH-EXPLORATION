
const {find_if_unique}= require("./profile.service");
const {reqSignin}  = require("./auth"); 
const router = require("express").Router();
const {dth_controller,register_controller,login_controller,add_money_controller,send_Money_Type_Mob_controller,latest_transaction_controller,send_Money_Type_Accnt_controller,
    dataCardRCHGTypePre_controller,dataCardRCHGTypePost_controller,broadband_controller,mobilePre_controller,adminLoadData_controller
    ,getLoan_controller,deleteUser_controller,getuserInfoById_controller,activateUser_controller
} = require("./profile.controller");


const path = require("path");


router.get("/api/getuserInfoById"

,reqSignin

,

getuserInfoById_controller);

router.put("/api/deleteUser",reqSignin

,deleteUser_controller);
router.put("/api/activateUser",reqSignin

,activateUser_controller);


router.get("/api/loadData",reqSignin

,adminLoadData_controller);


router.post("/api/getLoan",reqSignin

,getLoan_controller);

router.post("/api/mobilePre",reqSignin

,mobilePre_controller);

router.post("/api/broadband",reqSignin

,broadband_controller);

router.post("/api/dth",reqSignin

,dth_controller);

router.post("/api/dataCardRCHGTypePost",reqSignin

,dataCardRCHGTypePost_controller);
router.post("/api/dataCardRCHGTypePre",reqSignin

,dataCardRCHGTypePre_controller);
router.post("/api/reg",register_controller);
router.post("/api/login",login_controller);
router.post("/api/addmoney",reqSignin



,add_money_controller);
router.post("/api/sendMoneyTypeMob",reqSignin



,send_Money_Type_Mob_controller);

router.post("/api/sendMoneyTypeAccnt",reqSignin



,send_Money_Type_Accnt_controller);
 

router.get("/api/transactions",reqSignin



,latest_transaction_controller);  



module.exports = router;