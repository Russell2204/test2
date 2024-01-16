<template>
  <header class="header">
    <nav class="header__nav">
        <a href="" class="logo">
            <img src="@/assets/img/logo.svg" alt="">
            <span class="logo__span">vue weather</span>
        </a>
        <div class="header__search">
          <img src="@/assets/img/water.svg" alt="" @click="darkMode">
          <input 
          type="text" 
          class="header__search-input" 
          placeholder="Выбрать город"
          v-model="city"
          @keydown.enter="getWeather(city)"
          >
        </div>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data(){
    return{
      city: ''
    }
  },
  methods:{
    ...mapActions(['getWeather']),
    darkMode(){
      let value = document.body.style.getPropertyValue('--bg')
      if (value == 'white') {
        document.body.style.setProperty('--bg', 'rgb(27, 27, 27)')
        document.body.style.setProperty('--text', 'white')
      }else{
         document.body.style.setProperty('--bg', 'white')
         document.body.style.setProperty('--text', 'black')
      }
    }
  },
  created(){
    document.body.style.setProperty('--bg', 'white')
    document.body.style.setProperty('--text', 'black')
  }
}
</script>

<style>
.header__search img{
  cursor: pointer;
}
</style>