var express = require('express')
const res = require('express/lib/response')
var fs = require('fs')
var app = express()



app.get('/', (request, response)=> {

    response.send('')


})

app.get('/makefile', (request, response) => {

    fs.open('jenk.txt', 'w',()=> {
        return response.end()


    })

    
});





var server = app.listen(8000, () => {

    var address = server.address()
    console.log(address)
})




