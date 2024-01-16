<template>
    <main class="main" v-if="weather">
        <MainContent/>
        <MainWeek/>
    </main>
    <div class="loading" v-else>
        <h1>Идет загрузка...</h1>
    </div>
</template>

<script>
 import MainContent from "@/components/MainContent.vue";
 import MainWeek from "@/components/MainWeek.vue";
 import { mapState, mapActions } from "vuex";
export default {
    components:{
        MainContent,
        MainWeek
    },
    computed:{
      ...mapState(['weather'])  
    },
    methods:{
        ...mapActions(['getWeather'])
    },
    mounted(){
        this.getWeather('Ташкент')
    }
}
</script>

<style>

</style>