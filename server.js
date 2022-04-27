const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var port = 3001;

app.get('/', function(req,res){
    res.send('Youtube Videosu');
});

io.on('connection', function(socket){
    console.log('baglandi');

    socket.on('send-data', (data) => {
        socket.broadcast.emit('push_data', {url: data.url})
    })
})

http.listen(port, function(){
    console.log(`server is running: http://localhost:${port}`);
})