<template>
  <div class="password-reset">
    <h2>비밀번호 찾기</h2>
    <form @submit.prevent="submitForm">
      <label for="username">아이디:</label>
      <input type="text" id="username" v-model="username" required />

      <label for="phone">전화번호:</label>
      <input type="text" id="phone" v-model="phone" required />

      <label for="email">이메일:</label>
      <input type="email" id="email" v-model="email" required />

      <button type="submit">찾기</button>
    </form>

    <h2 style="margin-top: 30px;">아이디 찾기</h2>
    <form @submit.prevent="submitForm">
      <label for="phone">전화번호:</label>
      <input type="text" id="phone" v-model="phone" required />

      <label for="email">이메일:</label>
      <input type="email" id="email" v-model="email" required />

      <button type="submit">찾기</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      phone: '',
      email: '',
    };
  },
  methods: {
    submitForm() {
      // 여기에서 아이디 및 이메일을 사용하여 서버로 요청을 보낼 수 있습니다.
      // 비밀번호 찾기 로직을 구현하세요.
      console.log('아이디:', this.username);
      console.log('전화번호:',this.phone);
      console.log('이메일:', this.email);
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