const multer = require('multer');
// let d1 = require('../uploads/super_admin')
// console.log("dir======",'../'+__dirname);
const userUpload = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/uploads/user')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + `.${file.originalname.split('.').pop()}`)
    }
});
const adminUpload = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/uploads/admin')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + `.${file.originalname.split('.').pop()}`)
    }
});
const superAdminUpload = multer.diskStorage({
    destination: function (req, file, cb) {
      
        cb(null, '../Bumblee/uploads')
    },
    filename: function (req, file, cb) {
       
        
        cb(null, file.fieldname + '-' + Date.now() + `.${file.originalname.split('.').pop()}`)
    }
});
const borrowerUpload = multer.diskStorage({
    destination: function (req, file, cb) {
      
        cb(null, '../Bumblee/uploads/borrowerImages')
    },
    filename: function (req, file, cb) {
       
        
        cb(null, file.fieldname + '-' + Date.now() + `.${file.originalname.split('.').pop()}`)
    }
});

const admin = multer({ storage: adminUpload });
const user = multer({ storage: userUpload });
const superAdmin = multer({ storage: superAdminUpload });
const borrower = multer({ storage: borrowerUpload });

module.exports = {
    admin: admin,
    superAdmin:superAdmin,
    user: user,
    borrower:borrower

};
