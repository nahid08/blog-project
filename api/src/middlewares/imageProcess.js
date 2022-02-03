const multer = require('multer');

const upload = multer({dest: 'uploads/'});

const imageProcess = upload.single('file')

module.exports = {
    imageProcess,
}