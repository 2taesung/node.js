const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))


MongoClient.connect('mongodb+srv://admin:admin1234@cluster0.geuvl.mongodb.net/PJT0?retryWrites=true&w=majority', function(에러, client){
    if (에러) return console.log(에러);
    //서버띄우는 코드 여기로 옮기기
    app.listen('8080', function(){
            console.log('listening on 8080')
        });
    })

// app.listen(8080, function(){
//     console.log('listening on 8080') 
// })

app.get('/pet', function(요청, 응답) {
    응답.send('펫 쇼핑할 수 있는 페이지입니다')
    
})
app.get('/beauty', function(요청, 응답) {
    응답.send('뷰티 할 수 있는 페이지입니다')
    
})
app.get('/', function(요청, 응답) {
    응답.sendFile(__dirname + '/index.html')
    
})
app.get('/write', function(요청, 응답) {
    응답.sendFile(__dirname + '/write.html')
    
})

app.post('/add', (요청, 응답) => {
    응답.send('전송완료')
    console.log(요청.body.title)
    console.log(요청.body.date)
    console.log(요청.body)
    //db에 저장해주세요
})