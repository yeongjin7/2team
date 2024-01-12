<template>
    <div class="forgot-password-form">
      <h2>아이디/비밀번호 찾기</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">이메일 :</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <button type="submit" class="button-primary">찾기</button>
        <router-link to="/login" class="login-link">로그인 페이지로 돌아가기</router-link>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      submitForm() {
        // 여기에 아이디/비밀번호 찾기 처리를 위한 코드를 추가합니다.
        // 예를 들어, 이메일을 서버로 전송하여 계정을 확인할 수 있습니다.
        // 이 예시에서는 간단히 콘솔에 이메일을 출력하는 것으로 대체합니다.
        console.log('이메일:', this.email);
      },
    },
  };
  </script>
  
  <style scoped>
  .forgot-password-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    text-align: center; /* 폼을 가운데 정렬하기 위해 추가 */
  }
  
  .forgot-password-form h2 {
    margin-bottom: 20px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: flex;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
  }
  
  input[type="email"] {
    width: 355px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  }
  
  .button-primary {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .button-primary:hover {
    background-color: #0056b3;
  }
  
  .login-link {
    display: inline-block; /* 가운데 정렬을 위해 수정 */
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
  }
  
  .login-link:hover {
    text-decoration: underline;
  }
  </style>