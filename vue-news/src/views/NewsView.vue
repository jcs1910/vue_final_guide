<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" class="post">
        <a v-bind:href="item.url">
          {{ item.title }}
        </a>
        <small>
          {{ item.time_ago }} by 
          <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </li>
    </ul>
    <!-- <div v-for="user in this.$store.state.news">
      {{ user.title }}
    </div> -->
    <!-- <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by 
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p> -->
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>
.news-list {
  margin:0;
  padding:0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
</style>