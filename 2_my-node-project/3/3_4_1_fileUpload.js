const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

/*
 * @description: refactoring
 *    - 기존 코드는 디렉토리가 존재함을 가정하여 코드를 썻지만 실제 코드는 그렇게 이뤄지지 않았다.
 *    - 디렉토리 존재하지 않을 경우 원하는 디렉토리 생성후 파일 저장(업로드)
 */
const uploadDir = 'D:/nodeJs/my-node-project/3/uploads/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Storage for Uploads Files
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});

// file validation
const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only Image files are allowed!!'), false);
    }
    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});


// Set Up the Express Application
app.use(express.static('public'));

// Serve the HTML form for file uploads
app.get('/get', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Create an Upload Endpoint
app.post('/upload-multiple', upload.array('file', 10), (req, res) => {
    try {

        res.send('File uploaded successfully');
    } catch (error) {
        res.status(400).send('Error uploading file');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}`);
})

