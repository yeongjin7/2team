<template>
    <div class="login-form">
      <h2>로그인</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">아이디:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">비밀번호:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit" class="button-primary">로그인</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      submitForm() {
        // 여기에 로그인 처리를 위한 코드를 추가합니다.
        // 예를 들어, 서버로 아이디와 비밀번호를 전송하여 인증을 수행할 수 있습니다.
        // 이 예시에서는 간단히 콘솔에 아이디와 비밀번호를 출력하는 것으로 대체합니다.
        console.log('아이디:', this.username);
        console.log('비밀번호:', this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .login-form h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
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
  </style>