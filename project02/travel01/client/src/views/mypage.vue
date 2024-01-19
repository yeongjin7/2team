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

          <div v-if="changeCate === 'userQna'" class="card" @click="changeCategori('userQna')">
            <div class="card-body">
              <div class="qnatext" v-if="qnaEditBtn">
                <label for="emailInput">아이디</label>
              <input v-model="user.id" type="text" id="qnaInput" class="form-control mb-2" disabled />
              <label for="qnaTitle">제목</label>
              <input v-model="singleQnaData.sqTitle" type="text" id="qnaTitle" class="form-control mb-2" placeholder="제목을 입력해주세요.">
              <label for="qnaContent">내용</label>
              <textarea v-model="singleQnaData.sqContent" placeholder="여기에 문의사항을 입력해주세요." class="form-control mb-2" id="qnaContent"></textarea>
              <textarea placeholder="운영자 답변을 기다려주세요." class="form-control mb-2" id="qnaAnswer" disabled></textarea>
              </div>
            </div>
            <div class="divBtn d-flex justify-content-between">
              <b-button variant="outline-primary" @click="qnaEditBtnClick" id="editBtncg" class="ml-2">{{ qnaEditBtn ? '작성' : '글쓰기'
              }}</b-button>
              <b-button v-if="qnaEditBtn" variant="outline-primary" @click="qnaEditBtnCancel" id="editBtncg" class="ml-2">취소</b-button>
            </div>
          </div>
          <input type="text" v-model="login.id" placeholder="임시 로그인 아이디" />
          <input type="text" v-model="login.password" placeholder="임시 로그인 비번" />
          <b-button @click="loginBtn">임시 로그인</b-button>
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
      singleQnaData: {
        sqTitle: '',
        sqContent: '',
        sqAnswer: '',
      },
      boardPosts: [],
      editBtn: false,
      qnaEditBtn: false,
      changeCate: 'userinfo',
    };
  },

  methods: {
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
        }
      })
    },



    loginBtn() {
      axios.post('http://localhost:5005/logintest', { login: this.login }, { withCredentials: true })
        .then((res) => {
          if (res.data.success) {
            console.log(res.data)
            alert("로그인 성공임");
            this.$router.push("/");
          } else {
            alert("로그인 실패임")
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



  },
  mounted() {
    this.getName();
    this.getBoardPosts();
  }
};

</script>

<style scoped>
h3 {
  margin-left: 300px;
  margin-bottom: 20px;
}

.card {
  height: 600px;
  width: 600px;
  align-items: center;
  margin: auto;
  margin-bottom: 70px;
  border: 2px solid rgb(0, 0, 0);
}

.card-body {
  margin-top: 30px;
}

input {
  width: 400px;
}

.divBtn {
  padding-bottom: 30px;
}

.udBtn {
  color: azure;
}

textarea {
  height: 150px;
}

.post-item {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
