<template>
  <div>
    <div class="container mt-5">
      <h3>마이페이지</h3>

      <div class="card">
        <div class="card-body">
          <label for="nameInput">이름</label>
          <input v-model="user.name" type="text" id="nameInput" class="form-control mb-2" :disabled="!editBtn"/>
          
          <label for="emailInput">아이디</label>
          <input v-model="user.id" type="text" id="emailInput" class="form-control mb-2" :disabled="!editBtn"/>

          <label for="usernameInput">password</label>
          <input v-model="user.password" type="password" id="usernameInput" class="form-control mb-2" :disabled="!editBtn"/>

          <label for="emailInput">이메일</label>
          <input v-model="user.email" type="text" id="emailInput" class="form-control mb-2" :disabled="!editBtn"/>

          <label for="phoneInput">전화번호</label>
          <input v-model="user.phone" type="text" id="phoneInput" class="form-control mb-2" :disabled="!editBtn"/>

          <label for="joinInput">가입일</label>
          <input v-model="user.joinDay" type="text" id="joinInput" class="form-control mb-2" :disabled="!editBtn"/>
        </div>
        <div class="divBtn">
          <b-button variant="outline-primary" @click="editBtnClick">수정</b-button>
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
        name: "",
        id: "",
        password: "",
        email: "",
        phone: "",
        joinDay: "",
      },
      editBtn: false,
    };
  },
  
  methods: {
    editBtnClick() {
      this.editBtn = !this.editBtn;
    },
    getName() {
      axios.get('http://localhost:5005/wawa')
      .then(res => {
        this.user.name = res.data.name
        this.user.id = res.data.id
        this.user.password = res.data.password
        this.user.email = res.data.email
        this.user.phone = res.data.phone
        this.user.joinDay = res.data.joinDay
      });         
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
    border: 3px solid gray;
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
