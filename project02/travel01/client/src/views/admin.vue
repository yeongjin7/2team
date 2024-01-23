<template>
  <div>

    <div class="container mt-5">

      <div class="row">
        <!-- Left Category Menu -->
        <div class="col-md-3">
          <div class="list-group">
            <a class="list-group-item" @click="changeCategori('userinfo')">유저 관리</a>
            <a class="list-group-item" @click="changeCategori('userBoader')">게시글 관리</a>
            <a class="list-group-item" @click="changeCategori('userQna')">답변하기</a>
          </div>
        </div>



        <div class="col-md-9">
          <h2>관리자 페이지</h2>
          <div v-if="changeCate === 'userinfo'" class="card" @click="changeCategori('userinfo')">
            <div class="card-body">
              <div v-for="users in user" :key="users.usersId">
                <template v-if="users.id !== '탈퇴'">
                  <div class="post-item" id="userInfo">
                    {{ users.userNo }}
                    {{ users.name }}
                    {{ users.id }}
                    {{ users.phone }}
                    <span class="delete-icon" @click="deleteUser(users.userNo)">삭제</span>
                  </div>
                </template>
              </div>
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
              <b-button variant="outline-primary" @click="editBtnClick" id="editBtncg">{{ editBtn ? '저장' : '수정'
              }}</b-button>
            </div>
          </div>

          <div v-if="changeCate === 'userQna'" class="card" @click="showDetails('userQna')">
            <div class="card-body">
              <div v-if="!qnaEditBtn">
                <div v-if="!selectedQna">
                  <div v-for="qna in qnaAdminList" :key="qna.qnaId" class="post-item" @click="selectQna(qna)">
                    <div>
                      {{ qna.sqTitle }}
                      {{ qna.sqDate }}
                    </div>
                  </div>
                </div>

                <div v-if="selectedQna" class="qnatext">
                  <label for="emailInput">아이디</label>
                  <input v-model="selectedQna.id" type="text" id="qnaInput" class="form-control mb-2" disabled />
                  <label for="qnaTitle">제목</label>
                  <input v-model="selectedQna.sqTitle" type="text" id="qnaTitle" class="form-control mb-2"
                    placeholder="제목을 입력해주세요." disabled>
                  <label for="qnaContent">내용</label>
                  <textarea v-model="selectedQna.sqContent" placeholder="여기에 문의사항을 입력해주세요." class="form-control mb-2"
                    id="qnaContent" disabled></textarea>
                  <label for="qnaAnswer">답변</label>
                  <div v-if="selectedQna.sqAnswer == ''" >
                  <textarea v-model="singleQnaData.sqAnswer" placeholder="답변 합시다." class="form-control mb-2" id="qnaAnswer"></textarea>
                </div>
                <div v-if="selectedQna.sqAnswer != ''" >
                  <textarea v-model="selectedQna.sqAnswer" placeholder="답변 합시다2" class="form-control mb-2" id="qnaAnswer" disabled></textarea>
                </div>
                  <div class="divBtn d-flex justify-content-between">
                    <b-button variant="outline-primary" @click="qnaEditBtnCancel" id="editBtncg" class="ml-2">취소</b-button>
                  </div>
                </div>
              </div>
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
      userQna: {
        userNo:'',
        id:'',
      },
      login: {
        id: '',
        password: '',
        img: '',
      },
      singleQnaData: {
        sqNo: '',
        sqTitle: '',
        sqContent: '',
        sqAnswer: '',
      },
      qnaListData: [],
      boardPosts: [],
      qnaAdminList: [],
      editBtn: false,
      qnaEditBtn: false,
      changeCate: 'userinfo',
      selectedQna: null,
      sqAnswer: '',
    };
  },

  methods: {
    showDetails(category) {
      this.changeCate = category;
    },
    selectQna(qna) {
      this.selectedQna = qna;
      this.singleQnaData.sqNo = qna.sqNo;
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
    getUserList() {
      axios.get('http://localhost:5005/userlist', { withCredentials: true })
        .then(res => {
          this.user = res.data;
          console.log("우저목록", this.user);
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
    getName() {
      axios.get('http://localhost:5005/mypage', { withCredentials: true })
        .then(res => {
          console.log("유저네임임", res.data);
          this.userQna = res.data;
        });
    },
    singleQnaAnswer() {
      axios.put('http://localhost:5005/qnaanswer', { qna: this.singleQnaData }, { withCredentials: true })
        .then((res) => {
          alert("답변 성공적으로 보냈습니다.")
          this.qnaEditBtn = false;
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
          this.qnaListData = res.data;
          console.log('반갑다', this.qnaListData);
        })
    },

    getQnaListAdmin() {
      axios.post('http://localhost:5005/getqnalistadmin', { withCredentials: true })
        .then(res => {
          this.qnaAdminList = res.data;
          console.log("222222",this.qnaAdminList);
        })
    },

    deleteUser(userId) {
      console.log('확인입니다', userId);
      axios.delete(`http://localhost:5005/user/${userId}`, { withCredentials: true })
        .then((res) => {
          if (res.data.success) {
            alert('유저가 성공적으로 삭제되었습니다.');
            // 유저 목록을 업데이트
            this.getUserList();
          } else {
            alert('유저 삭제가 실패되었습니다.');
          }
        })
        .catch((error) => {
          console.error('Error deleting user:', error);
          alert('유저 삭제 중 오류가 발생했습니다.');
        });
    },
  },
  mounted() {
    this.getName();
    this.getUserList();
    this.getBoardPosts();
    this.getQnaList();
    this.getQnaListAdmin();
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

.delete-icon {
  border-radius: 5px;
}

.delete-icon:hover {
  background-color: rgba(16, 92, 255, 0.562);
}
</style>
  