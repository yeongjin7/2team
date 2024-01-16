<template>
  <div>
    <div class="container mt-5">
      <h3>마이페이지</h3>

      <div class="card">
        <div class="card-body">
          <label for="nameInput">이름</label>
          <input v-model="user.name" type="text" id="nameInput" class="form-control mb-2" disabled/>
          
          <label for="emailInput">아이디</label>
          <input v-model="user.id" type="text" id="emailInput" class="form-control mb-2" disabled/>

          <label for="usernameInput">비밀번호</label>
          <input v-model="user.password" type="password" id="usernameInput" class="form-control mb-2" :disabled="!editBtn"/>

          <label for="emailInput">이메일</label>
          <input v-model="user.email" type="text" id="emailInput" class="form-control mb-2" :disabled="!editBtn"/>

          <label for="phoneInput">전화번호</label>
          <input v-model="user.phone" type="text" id="phoneInput" class="form-control mb-2" :disabled="!editBtn"/>

          <label for="joinInput">가입일</label>
          <input v-model="user.joinDay" type="text" id="joinInput" class="form-control mb-2" disabled/>
        </div>
        <div class="divBtn">
          <b-button variant="outline-primary" @click="editBtnClick" id="editBtncg">{{ editBtn ? '저장' : '수정' }}</b-button>
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
      editBtn: false,
    };
  },
  
  methods: {
    editBtnClick() {
      if (this.editBtn) {
        this.updateUser();
      } else {
        this.editBtn = !this.editBtn;
      }
    },
    getName() {
      axios.get('http://localhost:5005/mypage')
      .then(res => {
        console.log(res.data);
        this.user = res.data ;
      });         
    },
    updateUser() {
      axios.put('http://localhost:5005/mypage/edituser', { user: this.user })
        .then((res)=>{
          if(res.data.success){
            alert('정보 변경이 완료되었습니다.');
          }else {
            alert('정보 변경이 실패되었습니다.');
          }
			});
      this.editBtn = !this.editBtn;
    }
  },

  mounted() {
  this.getName();
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
    border: 2px solid rgb(169, 203, 255);
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

</style>
