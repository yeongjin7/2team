<template>
  <div>
  <div class="password-reset">
    <h2>비밀번호 찾기</h2>
    <form @submit.prevent="submitForm">
      <label for="id">아이디:</label>
      <input type="text" id="id" v-model="pwData.id" required />

      <label for="phone">전화번호:</label>
      <input type="text" id="phone" v-model="pwData.phone" required />

      <label for="email">이메일:</label>
      <input type="email" id="email" v-model="pwData.email" required />

      <button type="submit" @click="searchPw">찾기</button>
    </form>
  </div>
  <div class="id-reset">
    <h2>아이디 찾기</h2>
    <form @submit.prevent="submitForm">
      <label for="phone">전화번호:</label>
      <input type="text" id="phone" v-model="idData.phone" required />

      <label for="email">이메일:</label>
      <input type="email" id="email" v-model="idData.email" required />

      <button type="submit" @click="searchId">찾기</button>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      pwData:{
        id: '',
        phone: '',
        email: '',
      },
      idData:{
        phone: '',
        email: '',
      },

      successfindpw: false
    };
  },
  methods: {
    submitForm() {
      console.log('아이디:', this.id);
      console.log('전화번호:',this.phone);
      console.log('이메일:', this.email);
      console.log('비밀번호:', this.password);
    },
    searchPw(){
      axios.post('http://localhost:5005/searchPw', { searchPw : this.pwData })
      .then((res)=>{
        //success가 true면 사용 가능한 ID
        console.log(res.data.pass);
        if(res.data.success){
          
          alert('비밀번호는 ' + res.data.findPw.password + '입니다.');
            this.successfindpw = true;
            
          }else {
            alert('입력하신 정보가 일치하지 않습니다.');
          }
        });
    },
    
    searchId(){
      axios.post('http://localhost:5005/searchId', { searchId : this.idData })
      .then((res)=>{
        //success가 true면 사용 가능한 ID
        if(res.data.success){
          alert('아이디 꺼내줌');
            this.successfindId = true;
          }else {
            alert('입력하신 정보가 일치하지 않습니다.');
          }
        });
    },   
  },
};
</script>

<style scoped>
.password-reset {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.id-reset {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h2{
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px; /* 여백을 좀 더 늘립니다. */
}

input {
  padding: 10px;
  margin-bottom: 12px; /* 여백을 조정합니다. */
}

button {
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s; /* 부드러운 색상 전환을 위한 트랜지션을 추가합니다. */
}

button:hover {
  background-color: #0056b3; /* 호버 효과를 추가합니다. */
}

input[type="text"],
input[type="email"]{
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}
</style>