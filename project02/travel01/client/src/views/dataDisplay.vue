<template>
  <div>
    <h2>게시판 만들기</h2>
    <div class="loadingBtn">
      <button @click="loadData">불러오기</button>
    </div>

    <!-- Form for Input -->
    <div class="boardCreate">
      <form @submit.prevent="submitForm">
        <label id="titleBox">Title</label>
        <div class="boardGroup">
        <input type="text" id="boardTitle" placeholder="제목을 입력하세요." v-model="board.title">
        </div>
        <label id="userBox">User ID</label>
        <div class="boardGroup">
        <input type="text" id="userArea" placeholder="아이디를 입력하세요." v-model="board.userNo">
        </div>
        <label id="contentBox">Cont</label>
        <div class="boardGroup">
          <textarea  id="contentArea" type="text" v-model="board.content"></textarea>
          <div class="loadedDataContainer" v-if="showStoredData && storedData && storedData.length > 0">
          <div class="loadPlace" v-for="item in storedData" :key="item.id">
            <div>
              <img class="loadPlaceImg" :src="item.mapImg">
                <p>
                  Title: <input type="text" v-model="item.mapName" />
                </p>
                <p>
                  Content: <textarea v-model="item.mapCont"></textarea>
                </p>
            </div>  
          </div>
        </div>

        </div>

        <div class="boardGroup">
          <button class="boardWriteBtn" @click="boardSubmitBtn">게시글 작성</button>
        </div>
      </form>
    </div>

    <!-- Display Loaded Data -->

  </div>
</template>

<script>
import axios from 'axios';

export default {
  computed: {
    storedData() {
      return this.$store.getters.getStoredData;
    },
  },
  data() {
    return {
      showStoredData: false, // Flag to control visibility
      board: {
        title: '',
        userNo: '',
        content: '',
      },
    };
  },
  methods: {
    loadData() {
      this.showStoredData = !this.showStoredData;
    },
    submitForm() {
      console.log('Form submitted:', this.board);
      this.board = { title: '', userNo: '', content: '' };
    },
    boardSubmitBtn(){
      axios.post('http://localhost:5005/createBoard', {slide: this.board})
      .then((res)=>{
        if(res.data.success){
          alert("성공적으로 저장하였습니다.")
          this.board.title = '';
          this.board.userNo = '';
          this.board.content = '';
        }
        else{
          alert("잠시후에 시도해 주세요")
        }
      })
    }
  },
};
</script>

<style>

.boardCreate {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.loadPlaceImg {
  width: 100px;
  height: 50px;
}

.loadingBtn {
  float: right;
}

.boardGroup {
  margin-bottom: 15px;
  margin-left: 50px;
  border: solid 1px black;
}

textarea {
  width: 100%;
  height: 100%; 
  white-space: pre-line; 
}

.loadedDataContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; 
}

.loadPlace {
  width: calc(33.33% - 20px); 
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-left: 50px;
}

.boardWriteBtn {
  float: right;
}

#titleBox,
#userBox,
#contentBox {
  margin-left: 50px;
  margin-bottom: 20px;
}

#contentArea {
  width: 100%;
  height: 100%; 
  padding: 10px;
  box-sizing: border-box;
}
</style>


