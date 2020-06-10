<template>
  <div class="container">
    <div class="nav">
      <router-link 
      tag="li" 
      class="link" 
      to="/inbox">All e-mails</router-link>
      <router-link 
      tag="li" 
      class="link" 
      to="/inbox/2">First 2 e-mails</router-link>
      <router-link 
      tag="li" 
      class="link" 
      to="/inbox/5">First 5 e-mails</router-link>
      <router-link 
      tag="li" 
      class="link" 
      to="/inbox/50">First 50 e-mails</router-link>
    </div>
    <div class="mailbox">
    <h2>Mailbox</h2>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

.nav {
  position: fixed;
  width: 150px;
  height: 100vh;
  float: left;
  padding: 15px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  border-right: 2px solid gray;
}

li{ 
    list-style-type: none;
    padding: 5px;  
    margin: 5px; 
    border-radius: 5px; 
    background-color: rgb(147, 206, 245);
    box-shadow: 0px 2px 4px 1px rgb(94, 159, 219);
    
}

li:hover {
      background-color:  rgb(72, 172, 238);
      cursor: pointer;
    }

.mailbox {
  margin-left: 150px;
  padding: 15px;
}

h2 {
  margin: 0;
}

</style>