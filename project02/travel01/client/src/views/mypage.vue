<template>
  <div>

    <div class="container mt-5">

      <div class="row">
        <!-- Left Category Menu -->
        <div class="col-md-3">
          <div class="list-group">
            <a class="list-group-item" @click="changeCategori('userinfo')">유저 정보</a>
            <a class="list-group-item" @click="changeCategori('userBoader')">게시글 목록</a>
            <a class="list-group-item" @click="changeCategori('userQna')">문의하기</a>
            <a v-if="user.userNo == '1001'" class="list-group-item" @click="adminPage">관리자</a>
          </div>
        </div>

        <div class="col-md-9">
          <h2>마이페이지</h2>
          <div v-if="changeCate === 'userinfo'" class="card" @click="changeCategori('userinfo')">
            <div class="card-body">
              <h2>유저 정보</h2>
              <label for="nameInput">이름</label>
              <input v-model="user.name" type="text" id="nameInput" class="form-control mb-2" disabled />

              <label for="emailInput">아이디</label>
              <input v-model="user.id" type="text" id="emailInput" class="form-control mb-2" disabled />

              <label for="usernameInput">비밀번호</label>
              <input v-model="user.password" type="password" id="usernameInput" class="form-control mb-2"
                :disabled="!editBtn" />

              <label for="emailInput">이메일</label>
              <input v-model="user.email" type="text" id="emailInput" class="form-control mb-2" :disabled="!editBtn" />

              <label for="phoneInput">전화번호</label>
              <input v-model="user.phone" type="text" id="phoneInput" class="form-control mb-2" :disabled="!editBtn" />

              <label for="joinInput">가입일</label>
              <input v-model="user.joinDay" type="text" id="joinInput" class="form-control mb-2" disabled />
            </div>
            <div class="divBtn">
              <b-button variant="outline-primary" @click="editBtnClick" id="editBtncg">{{ editBtn ? '저장' : '수정' }}</b-button>
            </div>
          </div>

          <div v-if="changeCate === 'userBoader'" class="card" @click="changeCategori('userBoader')">
            <div class="card-body">
              
              <!-- 게시글 목록 렌더링 -->
              <div v-for="post in boardPosts" :key="post.postId" class="post-item">
                <dib>
                  {{ post.title }}
                  {{ post.boardDate }}
                </dib>
              </div>
            </div>
            <div class="divBtn">
              <b-button variant="outline-primary" @click="editBtnClick" id="editBtncg">{{ editBtn ? '저장' : '수정' }}</b-button>
            </div>
          </div>
          
          <div v-if="changeCate === 'userQna'" class="card" @click="showDetails('userQna')">
      <div class="card-body">
        <div v-if="!qnaEditBtn">
          <div v-if="!selectedQna">
            <div v-for="qna in qnaListData" :key="qna.qnaId" class="post-item" @click="selectQna(qna)">
              <div>
                {{ qna.sqTitle }}
                {{ qna.sqDate }}
              </div>
            </div>
          </div>

          <div v-if="selectedQna" class="qnatext">
            <label for="emailInput">아이디</label>
            <input v-model="user.id" type="text" id="qnaInput" class="form-control mb-2" disabled />
            <label for="qnaTitle">제목</label>
            <input v-model="selectedQna.sqTitle" type="text" id="qnaTitle" class="form-control mb-2" placeholder="제목을 입력해주세요." disabled>
            <label for="qnaContent">내용</label>
            <textarea v-model="selectedQna.sqContent" placeholder="여기에 문의사항을 입력해주세요." class="form-control mb-2" id="qnaContent" disabled></textarea>
            <label for="qnaAnswer">답변</label>
            <textarea v-model="selectedQna.sqAnswer" placeholder="운영자 답변을 기다려주세요." class="form-control mb-2" id="qnaAnswer" disabled></textarea>
            <div class="divBtn d-flex justify-content-between">
            <b-button variant="outline-primary" @click="qnaEditBtnCancel" id="editBtncg" class="ml-2">취소</b-button>
          </div>
          </div>
        </div>


              <div class="qnatext" v-if="qnaEditBtn">
                <label for="emailInput">아이디</label>
              <input v-model="user.id" type="text" id="qnaInput" class="form-control mb-2" disabled />
              <label for="qnaTitle">제목</label>
              <input v-model="singleQnaData.sqTitle" type="text" id="qnaTitle" class="form-control mb-2" placeholder="제목을 입력해주세요.">
              <label for="qnaContent">내용</label>
              <textarea v-model="singleQnaData.sqContent" placeholder="여기에 문의사항을 입력해주세요." class="form-control mb-2" id="qnaContent"></textarea>
              </div>
            </div>
            <div class="divBtn">
              <b-button v-if="!selectedQna" variant="outline-primary" @click="qnaEditBtnClick" id="editBtncg" class="ml-2">{{ qnaEditBtn ? '작성' : '글쓰기'
              }}</b-button>
              <b-button v-if="qnaEditBtn" variant="outline-primary" @click="qnaEditBtnCancel" id="editBtncg" class="ml-2">취소</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: [],
      login: {
        id: '',
        password: '',
        img: '',
      },
      singleQnaData:{
        sqTitle: '',
        sqContent: '',
      },

      qnaListData: [],
      boardPosts: [],
      editBtn: false,
      qnaEditBtn: false,
      changeCate: 'userinfo',
      selectedQna: null,
      sqAnswer: '',
    };
  },

  methods: {
    adminPage(){
      this.$router.push('admin');
    },
  
    showDetails(category) {
      this.changeCate = category;
    },
    selectQna(qna) {
      this.selectedQna = qna;
    },
    changeCategori(category) {
      this.changeCate = category;
    },
    editBtnClick() {
      if (this.editBtn) {
        this.updateUser();
      } else {
        this.editBtn = !this.editBtn;
      }
    },
    qnaEditBtnClick() {
      if (this.qnaEditBtn) {
        this.singleQna();
      } else {
        this.qnaEditBtn = !this.qnaEditBtn;
      }
    },
    qnaEditBtnCancel() {
      this.singleQnaData.sqTitle = '';
      this.singleQnaData.sqContent = '';
      this.qnaEditBtn = false;
      this.selectedQna = null;
    },
    getName() {
      axios.get('http://localhost:5005/mypage', { withCredentials: true })
        .then(res => {
          console.log(res.data);
          this.user = res.data;
        });
    },
    updateUser() {
      axios.put('http://localhost:5005/mypage/edituser', { user: this.user })
        .then((res) => {
          if (res.data.success) {
            alert('정보 변경이 완료되었습니다.');
          } else {
            alert('정보 변경이 실패되었습니다.');
          }
        });
      this.editBtn = !this.editBtn;
    },

    singleQna() {
      axios.post('http://localhost:5005/singleqna', { qna: this.singleQnaData }, { withCredentials: true })
      .then((res) => {
        if(res.data.success){
          alert("문의를 성공적으로 보냈습니다.")
          this.singleQnaData.sqTitle = '';
          this.singleQnaData.sqContent = '';
          this.qnaEditBtn = false;
          location.reload();
        }
      })
    },

    getBoardPosts() {
      // 게시글 목록을 가져오는 API 호출
      axios.get('http://localhost:5005/boardposts', { withCredentials: true })
        .then(res => {
          console.log(res.data);
          this.boardPosts = res.data;
          console.log(this.boardPosts);
        })
        .catch(error => {
          console.error('Error fetching board posts:', error);
        });
    },

    getQnaList() {
      axios.get('http://localhost:5005/getqnalist', { withCredentials: true })
      .then(res => {
        console.log('반갑다',res.data);
        this.qnaListData = res.data;
      })
    }



  },
  mounted() {
    this.getName();
    this.getBoardPosts();
    this.getQnaList();
  }
};

</script>

<style scoped>
.container {
  margin-top: 5rem;
}

.list-group-item {
  cursor: pointer;
}

.card {
  height: 600px;
  width: 600px;
  margin: auto;
  margin-bottom: 70px;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 10px; /* 둥근 테두리 추가 */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
}

.card-body {
  margin-top: 30px;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group-label {
  width: 100px;
  display: inline-block;
  font-weight: bold; /* 굵은 글씨체 추가 */
}

.input-group-input {
  width: 400px;
  padding: 8px; /* 내용과의 간격 조절 */
  border: 1px solid #ccc; /* 입력창 테두리 추가 */
  border-radius: 5px; /* 둥근 테두리 추가 */
}

.divBtn {
  padding-bottom: 30px;
  width: 100px;
  margin-left: 40%;
}

.udBtn {
  color: azure;
}

.qnatext {
  margin-bottom: 1rem;
}

.post-item {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  border-radius: 5px; /* 둥근 테두리 추가 */
  background-color: #f8f9fa; /* 배경색 추가 */
}

.post-item:hover {
  background-color: rgba(53, 117, 255, 0.562);
}
</style>