<template>
  <div>
    <div v-for="item in askItems">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    // 3
    ...mapGetters({
      askItems: 'ask'
    }) 


    // 2
    // ...mapState({
    //   ask: state => state.ask
    // })

    // 1
    // ask() {
    //   return this.$store.state.ask
    // }
  }, 
  created() {
    this.$store.dispatch('FETCH_ASK')
  },
}
</script>

<style>

</style>