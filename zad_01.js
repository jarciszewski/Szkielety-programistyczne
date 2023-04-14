const express = require('express')
const app = express()

app.get('/', function(req, res){

    res.sendFile(__dirname + "/home.html");
});

// app.get('/home.html', (req, res) => {
//     console.log('Otrzymalem request GET ze strony /home.')
//     res.send(req.params)
//     }
// )

const server = app.listen(3000, () => {
        let host = server.address().address
        host = (host == '::')? 'localhost':host
        let port = server.address().port
        console.log("Serwer dziala na http://%s:%s", host, port)
    }
)

app.use((req, res) => {
    console.log('Obsługa bledu 404.')
    res.status(404)
    res.send('404 - Nie znaleziono')
    })