<template>
      <div class="user-container"> 
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <div>
            {{ userInfo.id }}
          </div>
          <!-- <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link> -->
          <div class="time">
            {{ userInfo.created }}
          </div>
        </div>
      </div>
</template>

<script>

export default {
  // props: {
  //   info: Object,
  // },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
}
</script>

<style scoped>
  .user-container{
    display:flex;
    align-items:center;
    padding: 10px;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-description{
    padding-left: 8px;
  }
  .time {
    font-size: 0.8rem;
  }
</style>