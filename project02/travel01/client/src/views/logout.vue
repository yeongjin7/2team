<template>
    <div class="logoutpage">
      <form action="/logout" method="get">
          <button @click="logout()">로그아웃</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
      name : "LogOutPage",
          methods : {
          logout(){
              this.axios.get('http://localhost:5005/logout',  { 
                  headers : {
                      "Content-Type" : "application/x-www-form-urlencoded"
                  },
                      
                  }).then((response) => { //이 부분이 아예 동작 안함
                          alert(response.data.message); 
                      
              
                  }).catch((error) => {  
                      this.error=error    
                  
                      
              })
          }
    }
  
  }
  </script>
  
  <style>
  
  </style>