<template>
    <div class="signup-form">
      <h2>회원 가입</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">아이디:</label>
        
            <input class="input-group" type="text" id="username" v-model="username" required>
            <button type="button" @click="checkUsername" class="button-secondary">중복<br>확인</button>
       
          <!-- <div class="input-group">
            <input type="text" id="username" v-model="username" required>
            <button type="button" @click="checkUsername" class="button-secondary">중복<br>확인</button>
          </div> -->
          
          
        </div>
        <div class="form-group">
          <label for="name">이름:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">이메일:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">비밀번호:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">비밀번호 확인:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <div class="form-group">
          <button type="submit">가입하기</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      submitForm() {
        // 폼 제출 로직을 여기에 추가합니다.
        console.log('폼이 제출되었습니다.');
        console.log('아이디:', this.username);
        console.log('이름:', this.name);
        console.log('이메일:', this.email);
        console.log('비밀번호:', this.password);
        console.log('비밀번호 확인:', this.confirmPassword);
      },
      checkUsername() {
        // 아이디 중복 확인 로직을 여기에 추가합니다.
        console.log('아이디 중복 확인');
        console.log('아이디:', this.username);
      }
    }
  };
  </script>
  
  <style scoped>
  .signup-form {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color: #333;
    font-weight: bold;
  }

.input-group input {
  margin-right: 50px; /* 아이디 입력창과 버튼 사이의 간격 조정 */
}
  
  .input-group input[type="text"],
  .input-group input[type="email"],
  .input-group input[type="password"] {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #f2f2f2;
    color: #333;
    font-size: 16px;
  }
  
  .input-group button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    font-size: 10px;
    transition: background-color 0.3s ease;
  }
  
  .button-primary {
    background-color: #007bff;
  }
  
  .button-primary:hover {
    background-color: #0056b3;
  }
  
  button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #f2f2f2;
    color: #333;
    font-size: 16px;
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }
  
  input[type="password"] {
    margin-top: 5px;
  }
  
  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="password"]:focus {
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
  }
  
  button:focus {
    outline: auto;
  }
  .button-secondary {
    text-align: center;
  padding: 10px 20px;
  background-color: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  white-space: nowrap; /*텍스트 줄 바꿈 방지*/
  
}

.button-secondary br {
  display: none; /* 줄 바꿈 태그 숨김 */
}

.button-secondary:hover {
  background-color: #ccc;
}
</style>
