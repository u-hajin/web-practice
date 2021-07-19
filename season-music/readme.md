## html, css를 공부하면서 만드는 web
- 특정 기간에 즐겨들었던 노래들, 여러 가지 좋아하는 것들을 정리해봤습니다. 순차적으로 공부하면서 만들어가기 때문에 엉성한 부분이 많습니다.

## index.html
- 메인 페이지입니다. 왼쪽에는 이동할 수 있는 카테고리, 본문에는 좋아하는 가수들의 사진들을 나열했습니다. 사진을 클릭하면 해당 인물의 인스타그램으로 이동합니다.

## 2020,2019,....html
- 해당 년도에 즐겨들었던 노래를 정리해봤습니다. 접기 및 펼치기(hr tag) 기능을 사용했으나 화살표 모양이나 여러 가지가 마음에 들지 않아 더 공부한 후 수정할 계획입니다.

## 나머지 html 파일들
- 좋아하는 드라마, 영화에 나오는 노래들과 좋아하는 라이브 공연들을 정리해봤습니다. 접기 및 펼치기(hr tag) 기능을 사용한 부분이 있기 때문에 추후 수정할 계획입니다.

### v1.0.0
- 카테고리와 본문이 분리되지 않아 보기 불편하고 지저분한 상태입니다. 2020, 2018, 2018, Glee의 카테고리만이 존재하는 상태입니다. 2020, Glee 카테고리 속 본문만 추가된 상태입니다.

### v2.0.0 (8/12)
- box model, grid, media query를 공부한 후 전 버전을 아예 뒤엎은 상태입니다. web이 830px보다 작아질 경우 카테고리는 위로 본문은 아래로 가게 해 작은 화면에서도 볼 수 있게 한 상태입니다. 카테고리와 본문이 선으로 분리된 상태입니다. 전보다 보기 편해졌습니다. 카테고리와 본문 및 여러 텍스트들의 배치가 어느 정도 완성된 상태입니다. 2020 카테고리 속 본문이 조금 추가된 상태입니다.

### v2.1.0 (8/14)
- Sing Street, Begin Again, Chicago, Live Performance 카테고리가 업데이트 되었고 해당 카테고리들의 본문도 업데이트 했습니다. 2020 카테고리 속 본문도 조금 추가된 상태입니다.
- mainpage.css, subpage.css 추가를 통해 코드 중복을 없앴습니다. 2017, 2015 카테고리가 새로 생성되었고 여러 카테고리 속 복문이 추가된 상태입니다. (8/16)
- A Star Is Born 카테고리가 추가됐습니다.  여러 카테고리 속 본문을 많이 업데이트했습니다. (8/17)

### v2.2.0 (8/23)
- web-font를 이용해 페이지 내 font를 변경했습니다. 카테고리의 배경색을 추가했습니다. 가상 클래스를 이용해 카테고리 목록에 롤오버(hover) 했을 때 색이 변경되도록 했습니다.
- 본문 속 font를 변경했습니다. 현재 접속 중인 페이지를 알려주기 위해 접속해있는 페이지의 해당 카테고리 글자의 색만 다르게 보이게 했습니다.(e.g. 2020 페이지에 접속하면 카테고리 내 2020만 다른 색으로 표시) (8/25)

### 참고
- 컴퓨터에서 chrome을 이용해 html 파일을 열었을 때 유튜브 영상이 재생되지 않습니다. 아직 해결 방법을 찾지 못했습니다. github에서 제공하는 호스팅을 통해 만들어진 url에 접속하면 정상으로 작동합니다.
- https://usuyn.github.io/web-practice/season-music/index.html