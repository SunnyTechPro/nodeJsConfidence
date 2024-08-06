const express = require('express');
const path = require('path');
const app = express();
const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: 'index.html',
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
};

const staticFilesFolder = 'D:\nodeJs\my-node-project';

app.use(express.static(staticFilesFolder, options));
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
