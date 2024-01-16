<template>
  <div class="signup-form">
    <p class="title">회원 가입</p>
    <form @submit.prevent="submitForm">

      <div class="form-group">
        <label for="name">이름:</label>
        <input type="text" id="name" placeholder="이름을 입력하세요." v-model="user.name" required>
      </div>

      <div class="form-group">
        <label for="id">아이디:</label>
        <input type="text" id="id" placeholder="아이디를 입력하세요." v-model="user.id" required>
        <button type="button" class="button-secondary" @click="checkUsername">중복확인</button>
      </div>

      <div class="form-group">
        <label for="password">비밀번호:</label>
        <input type="password" id="password" placeholder="비밀번호를 입력하세요." v-model="user.password" required @input="validatePassword">
      </div>
      
      <div class="form-group">
        <label for="confirmPassword">비밀번호 확인:</label>
        <input type="password" id="confirmPassword" placeholder="비밀번호를 확인해 주세요." v-model="confirmPassword" required @input="validateConfirmPassword">
      </div>

      <div class="form-group">
        <label for="phone">전화번호:</label>
        <input type="phone" id="phone" placeholder="전화번호를 입력하세요." v-model="user.phone" required>
      </div>
      
      <div class="form-group">
        <label for="email">이메일:</label>
        <input type="email" id="email" placeholder="이메일를 입력하세요." v-model="user.email" required>
      </div>
          
      

      <p v-if="passwordError">{{ passwordError }}</p>
      <p v-if="confirmPasswordError">{{ confirmPasswordError }}</p>

      <label> <input type="checkbox" v-model="agreeTerms" @change="updateSubmitStatus"> 이용약관 개인정보 수집 및 이용, 마케팅 활동 선택에 모두 동의합니다. </label>
      
      <button @click="register" type="submit" class="button-primary" >가입하기</button>
      <router-link to="/login" class="login-link" >이미 계정이 있으신가요? 로그인</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      user:{
        name: '',
        id: '',
        email: '',
        phone: '',
        password: '',
    },
      confirmPassword: '',
      passwordError: '',
      confirmPasswordError: '',
      isUsernameAvailable: false,
      agreeTerms: false,
      isSubmitEnabled: false
    };
  },
  methods: {
    submitForm() {
      // 회원 가입 처리를 위한 코드를 추가합니다.
      // 실제로는 서버로 사용자 정보를 전송하여 계정을 생성할 수 있습니다.
      // 이 예시에서는 간단히 콘솔에 사용자 정보를 출력하는 것으로 대체합니다.
      console.log('아이디:', this.username);
      console.log('이메일:', this.email);
      console.log('전화번호:', this.phone);
      console.log('비밀번호:', this.password);
      console.log('비밀번호 확인:', this.confirmPassword);
    },
    checkUsername() {
      // 아이디 중복 확인을 위한 코드를 추가합니다.
      // 실제로는 서버로 아이디를 전송하여 중복 여부를 확인할 수 있습니다.
      // 이 예시에서는 간단히 아이디가 "test"일 때만 중복되지 않은 것으로 처리합니다.
      this.isUsernameAvailable = this.username.toLowerCase() !== 'test';
    },
    validatePassword() {
      // Password validation logic
      if (this.user.password.length < 8) {
        this.passwordError = '비밀번호 8자리 이상 입력하세요.';
      } else {
        this.passwordError = '';
      }
    },
    validateConfirmPassword() {
      // Confirm password validation logic
      if (this.confirmPassword !== this.user.password) {
        this.confirmPasswordError = '비밀번호가 일치하지 않습니다.';
      } else {
        this.confirmPasswordError = '';
      }
    },
    register() {
      // Check if passwords match
      if (this.user.password === this.confirmPassword && this.user.password.length >= 8 && this.isSubmitEnabled) {
        axios.post('http://localhost:5005/member', { member : this.user })
        .then((res)=>{
          if(res.data.success){
            alert("가입을 축하드립니다!");
            location.href= 'login';
          }else {
            alert('가입 실패');
          }
			});

      }else if (this.user.password === this.confirmPassword && this.user.password.length >= 8 !== this.isSubmitEnabled){
        alert("개인정보 수집에 동의해 주세요.")
      }else{
        alert("빈칸을 입력해 주세요")
      }
    },
    updateSubmitStatus() {
            // 이용약관 체크박스 상태 변경에 따라 가입 완료 버튼 활성/비활성 상태 업데이트
            this.isSubmitEnabled = this.agreeTerms;
        },
      },
    };


</script>

<style scoped>
.signup-form {
  max-width: 580px;
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

.title{
  color : #706e6e;
  font-size: 30px;
  font-weight: bold;
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
input[type="password"],
input[type="phone"] {
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