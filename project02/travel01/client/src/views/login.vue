<template>
  <div class="login-form">
    <h2>로그인</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="id">아이디:</label>
        <input type="text" id="id" placeholder="아이디를 입력하세요." v-model="user.id" required>
      </div>
      <div class="form-group">
        <label for="password">비밀번호:</label>
        <input type="password" id="password" placeholder="비밀번호를 입력하세요." v-model="user.password" required>
      </div>
      <button type="submit" class="button-primary" @click="login">로그인</button>
      <router-link to="/search" class="forgot-password-link">아이디/비밀번호 찾기</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user:{
        id: '',
        password: '',
      },
      successfindid: false,
    };
  },
  methods: {
    submitForm() {
      // 여기에 로그인 처리를 위한 코드를 추가합니다.
      // 예를 들어, 서버로 아이디와 비밀번호를 전송하여 인증을 수행할 수 있습니다.
      // 이 예시에서는 간단히 콘솔에 아이디와 비밀번호를 출력하는 것으로 대체합니다.
      console.log('아이디:', this.user.id);
      console.log('비밀번호:', this.user.password);
    },

    login(){
      axios.post('http://localhost:5005/login', { login : this.user }, { withCredentials: true })
      .then((res)=>{
        //success가 true면 사용 가능한 ID
        if(res.data.success){
          alert('로그인 되었습니다.');
            this.successfindid = true;
            
           this.$router.push('/main');
          }else {
            alert('아이디와 비밀번호가 일치하지 않습니다.');
          }
        });
    }
  },
};
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 100px;
  margin-bottom: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

input[type="text"],
input[type="password"] {
  width: 355px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.button-primary {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.button-primary:hover {
  background-color: #0056b3;
}

.forgot-password-link {
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

.forgot-password-link:hover {
  text-decoration: underline;
}
</style>