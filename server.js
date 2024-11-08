const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// 静态文件服务
app.use(express.static(__dirname));

// 默认路由指向 login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// 其他路由
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 