<template>
    <div class="notice-container">
      <h1 class="notice-title">공지사항</h1>
      <ul class="notice-list">
        <li v-for="notice in notices" :key="notice.id" class="notice-item" @click="showNotice(notice)">
          <div class="notice-item-content">
            <span class="notice-item-title">{{ notice.title }}</span>
            <span class="notice-item-date">{{ formatDate(notice.date) }}</span>
          </div>
        </li>
      </ul>
  
      <!-- 공지사항 내용을 표시하는 부분 -->
      <div v-if="selectedNotice" class="notice-content">
        <h2>{{ selectedNotice.title }}</h2>
        <p>{{ selectedNotice.content }}</p>
      </div>
      <!-- 글쓰기 버튼 -->
      <button class="write-button" @click="showWriteForm">글쓰기</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notices: [
          { id: 1, title: '공지사항 1', content: '이것은 공지사항 1의 내용입니다.', date: '2024-01-20' },
          { id: 2, title: '공지사항 2', content: '이것은 공지사항 2의 내용입니다.', date: '2024-01-21' },
          { id: 3, title: '공지사항 3', content: '이것은 공지사항 3의 내용입니다.', date: '2024-01-22' },
          { id: 4, title: '공지사항 4', content: '이것은 공지사항 4의 내용입니다.', date: '2024-01-23' },
          { id: 5, title: '공지사항 5', content: '이것은 공지사항 5의 내용입니다.', date: '2024-01-24' },
          // 추가적인 공지사항 데이터
        ],
        selectedNotice: null,
        isWriting: false,
        newNoticeTitle: '',
        newNoticeContent: '',
      };
    },
    methods: {
      showNotice(notice) {
        this.selectedNotice = notice;
      },
      showWriteForm() {
        this.isWriting = true;
      },
      
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      },
    },
  };
  </script>
  
  <style scoped>
  .notice-container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  .notice-title {
    margin-top: 30px;
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .notice-list {
    list-style: none;
    padding: 0;
  }
  
  .notice-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .notice-item:hover {
    background-color: #e0e0e0;
  }
  
  .notice-item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .notice-item-title {
    font-size: 18px;
    font-weight: bold;
  }
  
  .notice-item-date {
    font-size: 14px;
    color: #777;
  }
  
  .notice-content {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .write-button {
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
  }
  
  .write-button:hover {
    background-color: #0056b3;
    
  }
  </style>