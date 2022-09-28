const {check} =require('express-validator');

exports.userLoginValidator=[
    check('password')
    .isLength({min:6})
    .withMessage('password length atleast 8 character')
    .not()
    .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
    .withMessage('Password must contain atleast 1 capital,small,special character')]