<template>
  <div class="main__week">
    <Day v-for="(day, index) in weather.daily" :key="index" :day="day" />
  </div>
</template>

<script>
import Day from "./Day.vue";
import { mapState } from "vuex";
export default {
  components: {
    Day,
  },
  computed: {
    ...mapState(["weather"]),
    
  },
};
</script>

<style>
</style>