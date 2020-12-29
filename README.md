# Node js REST API
## 1. 시작하기
```
npm init
```

<br>

## 2. 필요한 패키지 설치
```
npm i express body-parser nodemon uuid
```

<br>

## 3. REST API
메서드|설명
---|---
GET|데이터를 얻기 위한 메서드. ex) 사용자의 전체 정보를 얻는 역할, 특정 회원의 정보를 얻는 역할
POST|데이터를 추가하기 위한 메서드. ex) 사용자 정보를 추가한다. 글을 쓴다.
DELETE|데이터를 삭제하기 위한 메서드. ex) 사용자의 정보를 삭제한다.
PATCH|데이터를 수정하기 위한 메서드. ex) 사용자의 정보를 수정한다.

<br>

## 4. 폴더의 역할 설명

폴더|설명
---|---
controlls|동작하는 함수를 담은 폴더
routes|특정 메서드를 수행하는 폴더
