////////////////////////////////////////////
// 서버를 띄우기 위한 기본 셋팅(express 라이브러리)
////////////////////////////////////////////
const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});
/*
.listen이라는 함수는 컴퓨터에 서버를 열 수 있다는 것
listion(서버띄울 포트번호, 띄운 후 실행할 코드)
*/ 

////////////////////////////////////////////
// 요청을 처리하는 기계 제작
////////////////////////////////////////////
app.get('/pet', function(req, resp){
    resp.send('펫용품 쇼핑할 수 있는 페이지 입니다.');
});

app.get('/beauty', function(req, resp){
    resp.send('뷰티용품 쇼핑할 수 있는 페이지 입니다.');
});
/*
누군가가 URL에 ~/pet으로 방문을 하면
pet 관련된 안내문을 띄워주자
*/