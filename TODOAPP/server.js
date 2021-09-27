const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))
app.set('view engine', 'ejs')


// /list로 get요청 보여주기
app.get('/list', (요청, 응답) => {
    // 디비에 저장된 post라는 collection안의 특정 데이터들을 꺼내중셍용
    db.collection('post').find().toArray((에러, 결과) => {
        console.log(결과)
        응답.render('list.ejs', { posts : 결과 })
    })
    // (function(에러, 결과) {
    //     // 메타데이터 도 꽂아서 온다 find까지
    //     console.log(결과)
    // })
})

var db
MongoClient.connect('mongodb+srv://admin:admin1234@cluster0.geuvl.mongodb.net/PJT0?retryWrites=true&w=majority', function(에러, client){
    if (에러) return console.log(에러);
    //서버띄우는 코드 여기로 옮기기
    
    // todoapp이라는 db(폴더)에 연결좀요
    db = client.db('todoapp')
        
    app.listen('8080', function(){
        console.log('listening on 8080')
    });
        
        
})
app.post('/add', function(요청, 응답) {
    응답.send('전송완료')
    console.log('됨')
    db.collection('post').insertOne( { 제목 : 요청.body.title, 날짜 : 요청.body.date } , function(){
        console.log('저장완료')
    });
})


app.get('/write', function(요청, 응답) {
    응답.sendFile(__dirname + '/write.html')
    
})


// 어떤 사람이 /add 라는 경로로 post 요청을 하면,
// 데이터 2개(날짜, 제목)를 보내준다.


