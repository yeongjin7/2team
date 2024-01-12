<template>
  <div class="signup-form">
    <h2>회원 가입</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">아이디:</label>
        <input type="text" id="username" v-model="username" required>
        <button type="button" class="button-secondary" @click="checkUsername">중복확인</button>
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
      <button type="submit" class="button-primary" :disabled="!isUsernameAvailable">가입하기</button>
      <router-link to="/login" class="login-link">이미 계정이 있으신가요? 로그인</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      isUsernameAvailable: false,
    };
  },
  methods: {
    submitForm() {
      // 회원 가입 처리를 위한 코드를 추가합니다.
      // 실제로는 서버로 사용자 정보를 전송하여 계정을 생성할 수 있습니다.
      // 이 예시에서는 간단히 콘솔에 사용자 정보를 출력하는 것으로 대체합니다.
      console.log('아이디:', this.username);
      console.log('이메일:', this.email);
      console.log('비밀번호:', this.password);
      console.log('비밀번호 확인:', this.confirmPassword);
    },
    checkUsername() {
      // 아이디 중복 확인을 위한 코드를 추가합니다.
      // 실제로는 서버로 아이디를 전송하여 중복 여부를 확인할 수 있습니다.
      // 이 예시에서는 간단히 아이디가 "test"일 때만 중복되지 않은 것으로 처리합니다.
      this.isUsernameAvailable = this.username.toLowerCase() !== 'test';
    },
  },
};
</script>

<style scoped>
.signup-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
}

.signup-form h2 {
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

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 95%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #007bff;
}

.button-primary {
  width: 100%;
  padding: 12px;
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
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}
.form-group:nth-of-type(1) input + button {
  width: 80px;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s ease;
}
</style>