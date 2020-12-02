const Controller = require('../controllers/index');
const Authorization = require('../../polices/index');
const Upload = require('../../services/FileUploadService');
const express = require('express');
const router = express.Router();

/*
ADMIN API'S
*/
router.post('/register', Controller.superAdminController.register);
router.post('/login', Controller.superAdminController.login);
router.post('/logout', Authorization.isSuperAdminAuth, Controller.superAdminController.logout);
router.post('/getProfile', Authorization.isSuperAdminAuth, Controller.superAdminController.getProfile);
router.post('/updateSuperAdminProfile', Authorization.isSuperAdminAuth, Controller.superAdminController.updateSuperAdminProfile);
router.post('/changePassword', Authorization.isSuperAdminAuth, Controller.superAdminController.changePassword);
router.post('/forgotPassword', Controller.superAdminController.forgotPassword);
router.post('/forgotChangePassword', Controller.superAdminController.forgotChangePassword);
router.post('/uploadFile', Authorization.isSuperAdminAuth, Upload.superAdmin.single('image'), Controller.superAdminController.uploadFile);
router.post('/addCredentials', Authorization.isSuperAdminAuth, Controller.superAdminController.addCredentials)
router.post('/addAppSetting', Authorization.isSuperAdminAuth, Controller.superAdminController.addAppSetting)
router.post('/activeCredentials', Authorization.isSuperAdminAuth, Controller.superAdminController.activeCredentials)
router.post('/superAdminAllBorrower', Authorization.isSuperAdminAuth, Controller.superAdminController.superAminAllBorrower);
router.post('/getApprovedLoan', Authorization.isSuperAdminAuth, Upload.admin.single('image'), Controller.superAdminController.getApprovedLoad);
router.post('/getPendingLoan', Authorization.isSuperAdminAuth, Upload.admin.single('image'), Controller.superAdminController.getPendingLoan);
/*
NOTIFICATION API'S
*/
router.get('/getAllNotification', Authorization.isSuperAdminAuth, Controller.superAdminController.getAllNotification);
router.post('/clearNotification', Authorization.isSuperAdminAuth, Controller.superAdminController.clearNotification);
router.post('/clearAllNotification', Authorization.isSuperAdminAuth, Controller.superAdminController.clearAllNotification);

/* 

ADMIN API'S
*/
router.post('/addAdmin', Authorization.isSuperAdminAuth, Upload.admin.single('image'), Controller.superAdminController.addAdmin);
router.post('/loginAdmin', Controller.superAdminController.loginAdmin);
router.post('/updateAdminProfile', Authorization.isSuperAdminAuth, Upload.admin.single('image'), Controller.superAdminController.updateAdminProfile)
router.post('/deleteBlockUnBlockDeactivateAdminProfile', Authorization.isSuperAdminAuth, Controller.superAdminController.deleteBlockUnBlockDeactivateAdminProfile);
router.post('/getAdminProfile', Authorization.isSuperAdminAuth, Controller.superAdminController.getAdminProfile);
router.post('/getAllAdminProfile', Authorization.isSuperAdminAuth, Controller.superAdminController.getAllAdminProfile);
router.post('/addAdminCredentials', Authorization.isSuperAdminAuth, Controller.superAdminController.addAdminCredentials)
router.post('/addAdminAppSetting', Authorization.isSuperAdminAuth, Controller.superAdminController.addAdminAppSetting)
router.post('/updateLoanBySuperAdmin', Authorization.isSuperAdminAuth, Upload.admin.single('image'), Controller.superAdminController.updateLoan);
router.post('/deleteAdmin', Authorization.isSuperAdminAuth, Upload.admin.single('image'), Controller.superAdminController.deleteAdmin);



/**
 *  BROWWER 
 */

// router.post('/addBorrower', Authorization.isAdminAuthorization, Upload.superAdmin.single('image'), Controller.superAdminController.addBorrower);
router.post('/addBorrower', Authorization.isAdminAuthorization, Upload.borrower.fields([{ name: 'adharCard', maxCount: 1 },
                                                                                        {name:"panCard",maxCount:1},
                                                                                        {name:"affaidavit",maxCount:1},
                                                                                        {name:"electricBill",maxCount:1},
                                                                                        {name:"check",maxCount:1}

                                                                                    ]), Controller.superAdminController.addBorrower);
router.post('/updateBorrower', Authorization.isAdminAuthorization, Upload.borrower.fields([{ name: 'adharCard', maxCount: 1 },
{name:"panCard",maxCount:1}  ]), Controller.superAdminController.updateBorrowerProfile);
router.post('/adminAllBorrower', Authorization.isAdminAuthorization, Controller.superAdminController.adminAllBorrower);
router.post('/deleteBorrower', Authorization.isAdminAuthorization, Upload.admin.single('image'), Controller.superAdminController.updateBorrowerProfile);


/**
 * ADD LOAD
 */
router.post('/addLoan', Authorization.isAdminAuthorization, Upload.superAdmin.single('image'), Controller.superAdminController.loan);
router.post('/updateLoanByAdmin', Authorization.isAdminAuthorization, Upload.admin.single('image'), Controller.superAdminController.updateLoan);
router.post('/getBorowwerLoan', Authorization.isAdminAuthorization, Upload.admin.single('image'), Controller.superAdminController.getBorrowerLoan);
router.post('/deleteLoan', Authorization.isAdminAuthorization, Controller.superAdminController.deleteLoan);

/****
 * ADD EXPANCES
 */

router.post('/addExpanses', Authorization.isAdminAuthorization, Upload.superAdmin.single('image'), Controller.superAdminController.addExpenses);



module.exports = router;