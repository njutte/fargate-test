const http = require('http');

let app = http.Server();

app.on('request', (req, res) => {
    res.write('hello world');
    res.end();
})
app.listen(3000, () => {
    console.log('ready');
})