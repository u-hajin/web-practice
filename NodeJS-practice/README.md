# Start study Node.js 2021.10.31

### Practice of NodeJS_1 - 2021.10.31
- Node.js가 탄생하게 된 배경에 대해 배웠습니다.

***

### Practice of NodeJS_2 - 2021.11.03
- Node.js의 목적에 대해 배웠습니다.  
- Node.js를 사용하면 얻게 되는 장점에 대해 배웠습니다.

***

### Practice of NodeJS_3 - 2021.11.04
- Node.js를 설치했습니다.  
- cmd 창에서 NodeJS_3 파일에 있는 코드를 실행해봤습니다.  

![image](https://user-images.githubusercontent.com/68963707/140388878-5d656830-e7ce-4b75-b05a-1d789134eda7.png)

![image](https://user-images.githubusercontent.com/68963707/140388930-713563c8-8a18-4290-b657-3c41f6a98602.png)

***

### Practice of NodeJS_4 - 2021.11.07
- Node.js로 만든 웹 애플리케이션을 위해 필요한 것들을 배웠습니다.

***

### Practice of NodeJS_5 - 2021.11.08
- Node.js로 웹서버를 구동시켰습니다.
- readFileSync, response.end의 역할을 간략하게 배웠습니다.
- console.log(__dirname + url)로 디렉토리 경로와 사용자가 접근할 때 전달된 파일을 cmd 창에 출력했습니다.

![image](https://user-images.githubusercontent.com/68963707/140765716-2dd12f42-13fe-4527-a0e6-9fdfbb9497eb.png)

![image](https://user-images.githubusercontent.com/68963707/140765922-5feb9ac0-b7d7-4bbb-9446-9efc0c15d45d.png)

***

### Practice of NodeJS_8 - 2021.11.09
- Template Literals에 대해 배웠습니다.
- backtick( ` )을 사용했습니다.
- 기존의 복잡한 방법 대신 ${ }를 사용해 문자열 보간을 수행했습니다.

![image](https://user-images.githubusercontent.com/68963707/140967928-79b56aa3-e578-4b59-bfb0-6bd83c595a55.png)

***

### Practice of NodeJS_9 - 2021.11.10
- URL의 구조, 구성 요소에 대해 배웠습니다.

***

### Practice of NodeJS_10 - 2021.11.11
- Query String에 대해 배웠습니다.
- require('url')을 통해 url 모듈을 사용했습니다.
- URL로부터 원하는 값을 추출하기 위해 parse를 사용했습니다.
- URL을 통해서 입력된 값을 사용했습니다.

```javascript
console.log(queryData);
```

![image](https://user-images.githubusercontent.com/68963707/141344065-988c190e-efe3-4445-8835-ab25a13b87fd.png)

```javascript
console.log(queryData.id);
```

![image](https://user-images.githubusercontent.com/68963707/141344464-b4707ecf-ffb8-4130-9410-83626d30c45c.png)

```javascript
response.end(queryData.id);
```

![image](https://user-images.githubusercontent.com/68963707/141344268-554d53ed-b103-40f9-a2ce-6a96bfcd3c6f.png)

![image](https://user-images.githubusercontent.com/68963707/141344375-0f8647ee-c3c0-41f9-8bc5-74ee054aa2b5.png)

***

### Practice of NodeJS_11 - 2021.11.12
- Query String에 따라서 웹페이지를 동적으로 생성하는 방법을 배웠습니다.
- 본문을 제외한 제목 부분이 동적으로 바뀌게 했습니다.

|||||
|----|----|----|----|
|![image](https://user-images.githubusercontent.com/68963707/141654530-8bd994a2-a915-4520-afbc-b66a92383553.png)|![image](https://user-images.githubusercontent.com/68963707/141654543-b3f80535-826f-4869-aa9e-d4c5026e274f.png)|![image](https://user-images.githubusercontent.com/68963707/141654553-98df48e7-9663-494d-ab7f-22da6976f2a6.png)|![image](https://user-images.githubusercontent.com/68963707/141654709-5842ed33-ee9f-45f5-a2f5-c46d884abcbe.png)|

***

### Practice of NodeJS_12 - 2021.11.14
- Node.js에서 readFile을 사용해 파일을 읽는 방법에 대해 배웠습니다.
- sample.txt 파일의 텍스트를 읽었습니다.

![image](https://user-images.githubusercontent.com/68963707/141803021-06aa0ff6-e3dc-4221-931f-90d821c0d325.png)

***

### Practice of NodeJS_13 - 2021.11.16
- data 폴더를 만들고 각각의 본문을 담은 파일을 생성했습니다.
- Query String에 따라 해당되는 파일을 읽고 본문이 변경되게 했습니다.

|||||
|----|----|----|----|
|![image](https://user-images.githubusercontent.com/68963707/142013699-5c60a800-2b14-43bc-9acf-d4674caf633f.png)|![image](https://user-images.githubusercontent.com/68963707/142013832-3c41039d-3d67-42f1-8f1b-579aba053cc5.png)|![image](https://user-images.githubusercontent.com/68963707/142013888-8df10d01-e34e-48d0-a494-813fbec4c821.png)|![image](https://user-images.githubusercontent.com/68963707/142013942-b6bb412b-fabf-4a9f-afcb-b7dc009caa39.png)|

***


### Practice of NodeJS_18 - 2021.11.17
- NodeJS_18을 실행할 때 input을 주고, 조건문을 사용해 주어진 input에 따라 다른 값을 출력하는 방법을 배웠습니다.

![image](https://user-images.githubusercontent.com/68963707/142443620-27167967-8950-4d1d-ad38-2999fefdd83f.png)

- '1'이 입력되면 C1 출력, 이외의 값은 C2 출력
<img src="https://user-images.githubusercontent.com/68963707/142443708-6c9118c2-78f4-40a8-9cfa-a029be92982e.png" width="500" height="auto">
