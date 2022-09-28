const pool = require("../config/database");

module.exports = {
    activateUser:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`UPDATE userdetails SET usr_status=1 WHERE usr_pkid=?`,[data['delete_user']]);
          
                await connection.commit();
                return ({isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        
    }},
    getuserInfoById:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`SELECT loan_pkid, loan_amt, loan_pincode, loan_tenure, loan_user_id, loan_approved, loan_date_time FROM gr_loan WHERE loan_user_id=?`,[data['id']]);
 
            
            const fetchResult1 = await connection.query(`SELECT usr_fullname, usr_phno, usr_address, usr_kyc, usr_kycid, usr_status FROM userdetails WHERE usr_pkid=?`,[data['id']]);
 
                await connection.commit();
                return ({loan:fetchResult[0],users:fetchResult1[0],isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        
    }},

    deleteUser:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`UPDATE userdetails SET usr_status=0 WHERE usr_pkid=?`,[data['delete_user']]);
          
                await connection.commit();
                return ({isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        
    }},

    Loan:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`INSERT INTO gr_loan( loan_amt, loan_pincode, loan_tenure, loan_user_id, loan_approved) VALUES (?,?,?,?,0)`,[data['amt'],data['pincode'],data['tenure'],data['usr_id']]);
          
                await connection.commit();
                return ({isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        
    }},
    loadData:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`SELECT usr_pkid, usr_fullname, usr_phno, usr_kyc, usr_kycid,usr_status FROM userdetails`);
            const fetchResult1 = await connection.query(`SELECT tr_transaction, tr_phone, tr_toaccno, tr_operator, tr_amount, tr_status,tr_date_time FROM transactions`);
          
                await connection.commit();
                return ({Users:fetchResult[0],Transactions:fetchResult1[0],isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        
    }},
    mobilePre:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`INSERT INTO transactions(tr_transaction, tr_phone, tr_fromaccno, tr_frmdesc, tr_toaccno, tr_toddesc, tr_operator, tr_operator_img, tr_amount, tr_status, tr_userid, tr_compid) VALUES ('Mobile Prepaid Recharge',?,?,NULL,?,NULL,?,?,?,'Sent',?,NULL)`,[data['usr_phno'],data['usr_phno'],data['ph_num'],data['operator'],data['operator_img'],data['amt'],data['usr_id']]);
          
                await connection.commit();
                return ({isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        
    }},
    broadband:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`INSERT INTO transactions(tr_transaction, tr_phone, tr_fromaccno, tr_frmdesc, tr_toaccno, tr_toddesc, tr_operator, tr_operator_img, tr_amount, tr_status, tr_userid, tr_compid) VALUES ('broadband',?,?,NULL,?,NULL,?,NULL,?,'Sent',?,NULL)`,[data['usr_phno'],data['usr_phno'],data['accnt_num'],data['operator'],data['amt'],data['usr_id']]);
          
                await connection.commit();
                return ({isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        
    }},
    dth:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`INSERT INTO transactions(tr_transaction, tr_phone, tr_fromaccno, tr_frmdesc, tr_toaccno, tr_toddesc, tr_operator, tr_operator_img, tr_amount, tr_status, tr_userid, tr_compid) VALUES ('dth',?,?,NULL,?,NULL,?,?,?,'Sent',?,NULL)`,[data['usr_phno'],data['usr_phno'],data['cust_id'],data['operator'],data['operator_img'],data['amt'],data['usr_id']]);
          
                await connection.commit();
                return ({isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        
    }},
    dataCardRCHGTypePost:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`INSERT INTO transactions( tr_transaction, tr_phone, tr_fromaccno, tr_frmdesc, tr_toaccno, tr_toddesc, tr_operator, tr_operator_img, tr_amount, tr_status, tr_userid, tr_compid) VALUES ('Data Card Recharge PostPaid',?,NULL,NULL,?,NULL,?,?,?,'Sent',?,NULL)`,[data['usr_phno'],data['d_card_num'],data['operator'],data['operator_img'],data['amt'],data['usr_id']]);
          
                await connection.commit();
                return ({isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        }
    },
    dataCardRCHGTypePre:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`INSERT INTO transactions( tr_transaction, tr_phone, tr_fromaccno, tr_frmdesc, tr_toaccno, tr_toddesc, tr_operator, tr_operator_img, tr_amount, tr_status, tr_userid, tr_compid) VALUES ('Data Card Recharge PrePaid',?,NULL,NULL,?,NULL,?,?,?,'Sent',?,NULL)`,[data['usr_phno'],data['d_card_num'],data['operator'],data['operator_img'],data['amt'],data['usr_id']]);
          
                await connection.commit();
                return ({isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        }
    },
    send_Money_Type_Accnt:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`INSERT INTO transactions( tr_transaction, tr_phone, tr_fromaccno, tr_frmdesc, tr_toaccno, tr_toddesc, tr_operator, tr_operator_img, tr_amount, tr_status,tr_userid) VALUES ('Send Money Type Accnt',?,?,NULL,?,NULL,?,NULL,?,'SENT',?)`,[data['usr_phno'],data['usr_phno'],data['accnt_no'],data['bank'],data['amt'],data['usr_id']]);
          
                await connection.commit();
                return ({isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        }
    },
    latest_transaction:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`SELECT tr_pkid, tr_transaction, tr_phone, tr_fromaccno, tr_frmdesc, tr_toaccno, tr_toddesc, tr_operator, tr_operator_img, tr_amount, tr_status, tr_userid, tr_compid, tr_date_time FROM transactions WHERE tr_userid=? ORDER BY tr_date_time DESC LIMIT 10`,[data['usr_id']]);
            const fetchResult1 = await connection.query(`SELECT SUM(tr_amount) AS walletAmt FROM transactions WHERE tr_userid=? AND tr_operator="Grentor Wallet"`,[data['usr_id']]);
            const fetchResult2 = await connection.query(`SELECT loan_amt, loan_pincode, loan_tenure, loan_approved,loan_date_time FROM gr_loan WHERE loan_user_id=? ORDER BY loan_date_time DESC LIMIT 1`,[data['usr_id']]);
          
                await connection.commit();
                return ({loan:fetchResult2[0][0],transactions:fetchResult[0],isError:0,walletAmt:fetchResult1[0][0]}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        }
    },
    send_Money_Type_Mob:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`INSERT INTO transactions( tr_transaction, tr_phone, tr_fromaccno, tr_frmdesc, tr_toaccno, tr_toddesc, tr_operator, tr_operator_img, tr_amount, tr_status, tr_userid, tr_compid) VALUES ('send money type mob',?,?,NULL,?,?,NULL,NULL,?,'Sent',?,NULL)`,[data['usr_phno'],data['usr_phno'],data['sendto_ph_num'],data['desc'],data['send_mon'],data['usr_id']]);
          
                await connection.commit();
                return ({isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        }
    },
    addMoney:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`INSERT INTO transactions(tr_transaction, tr_phone, tr_fromaccno, tr_frmdesc, tr_toaccno, tr_toddesc, tr_operator, tr_operator_img, tr_amount, tr_status, tr_userid, tr_compid) VALUES ('add money',?,?,NULL,NULL,NULL,'Grentor Wallet','grentor.png',?,'sent',?,NULL)`,[data['usr_phno'],data['usr_phno'],data['add_mon'],data['usr_id']]);
          
                await connection.commit();
                return ({isError:0}); 
    

            
            
            
         
   

        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        }
    },
    login:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult = await connection.query(`SELECT usr_pkid, usr_fullname,usr_phno FROM userdetails WHERE usr_phno=? AND usr_pin=? `,[data['ph_number'],data['mpin']]);
          
            if(fetchResult[0].length>0){
                await connection.commit();
                return ({user:fetchResult[0],isError:0}); 
    
}else{

    await connection.commit();
    return ({error:"Server: Invalid Phone number OR mPIN",isError:1});
}
            
            
            
       
   
    
        
        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        }
    },
    register:async(data) => {
        
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const fetchResult1 = await connection.query(`SELECT usr_phno FROM userdetails WHERE usr_phno=?`,[data['ph_number']]);
if(fetchResult1[0].length>0){
    
    return ({error:"You can only register Once!",isError:1});
}
            
            
            const InsertResult = await connection.query(`INSERT INTO userdetails( usr_fullname, usr_loginname, usr_password, usr_phno, usr_pin, usr_address, usr_kyc, usr_kycid, usr_status, usr_compid) VALUES (?,NULL,NULL,?,?,?,?,?,'Active',NULL)`,[data['name'],data['ph_number'],data['mpin'],data['address'],data['unique_id_type'],data['unique_id']]);
            const fetchResult = await connection.query(`SELECT usr_pkid, usr_fullname,usr_phno FROM userdetails WHERE usr_phno=?`,[data['ph_number']]);
            
            await connection.commit();
   
    
           
            return ({user:fetchResult[0],isError:0});
        } catch (error) {
            return ({error:error.message,isError:1});
        } finally {
            connection.release();
        }
    }
};