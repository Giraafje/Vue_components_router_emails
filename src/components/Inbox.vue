<template>
  <div>    
    <p class="showing">I am showing {{$route.params.count}} e-mails </p>
    <div class="listedEmails">
      <div
      class="singleEmail"
      v-for="email in emails"
      :key="email.name"
      >
      <span class="name"><strong>{{email.name}}</strong> from</span>
      <span class="email">{{email.email}}</span>
      <span class="time"> at {{email.time}}</span>
      
      <p class="subject">{{email.subject}}</p>
      </div>
    </div>
  </div>
</template>  

<script>
import {emails} from '../../emails.js'

export default {
  computed: {
    emails() {
      return emails.slice(0, this.$route.params.count) 
    }
  }
}
</script>

<style scoped>
  .showing {
    font-size: 0.8rem;
  }
  .listedEmails {
    display: flex;
    flex-direction: column;
  }
  .singleEmail {
    width: 250px;
    font-size: 0.8rem;
    background-color: rgb(231, 231, 231);
    border-radius: 5px;
    margin: 5px 5px 5px 0px;
    padding: 3px;

  }

  .time {
    color: gray;
  }

  .subject {
    font-size: 1rem;
    font-family: 'Times New Roman', Times, serif;
    margin: 3px 0;
  }
</style>