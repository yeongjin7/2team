1. 원본 소스 클론(복사) 하기 : (최초 1회만 진행)
git clone https://github.com/yeongjin7/2team.git
2. 내 고유한 저장소 만들기 : (최초 1회만 진행)
git checkout -b (본인이 원하는 저장소 이름 )
클론(복사) 받은 디렉토리에서 작업 진행해 주세요.


-> 작업 진행 이후 매번 해줘야 할 내용
1. 원본 소스 내려받기(남이 수정한 내역 최신화, 본인이 작업한 내용 남아있습니다.) :
git pull origin main
2. 본인이 작업한 내용 local 저장소에 올리기 :
git add .
git commit -m "(커밋 내용)"
3. 본인 이름의 저장소에 push 하기.
git push origin (위에서 본인이 만든 저장소 이름)
4. git-hub 홈페이지에서 Pull requests 하기 ( '(위에서 본인이 만든 저장소 이름)' > 'main' )
