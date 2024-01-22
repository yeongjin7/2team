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
                <div v-for="users in user" :key="users.usersId" class="post-item">
                  <div>
                    {{ users.name }}
                    {{ users.id }}
                  </div>
                </div>
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
              <textarea  v-model="singleQnaData.sqAnswer" placeholder="답변 합시다." class="form-control mb-2" id="qnaAnswer"></textarea>
              <div class="divBtn d-flex justify-content-between">
                <b-button variant="outline-primary" @click="singleQnaAnswer" id="editBtncg" class="ml-2">작성</b-button>
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
        user: {
          name: '',
          id: '',
        },
        login: {
            id: '',
            password: '',
            img: '',
        },
        singleQnaData:{
            sqNo: '',
            sqTitle: '',
            sqContent: '',
            sqAnswer:'',
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
      getName() {
        axios.get('http://localhost:5005/mypage', { withCredentials: true })
          .then(res => {
            console.log(res.data);
            this.user.id = res.data.id;
            this.user.name = res.data.name;
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
  