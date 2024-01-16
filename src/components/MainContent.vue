<template>
  <div class="main__content">
    <div class="main__content-left">
      <p class="main__content-degree">
        {{ Math.round(weather.current.temp) }}°
      </p>
      <p class="main__content-today">Сегодня</p>
      <p class="main__content-time">Время: {{ getTime }}</p>
      <p class="main__content-city">Город: {{ weather.name }}</p>
      <div class="main__content-left-img">
        <img :src="getImg" alt="" />
      </div>
    </div>

    <div class="main__content-right">
      <img
        src="@/assets/img/headerBg.svg"
        alt=""
        class="main__content-right-bg"
      />
      <div class="main__content-right-item">
        <div class="main__content-right-img">
          <img src="@/assets/img/temp.svg" alt="" />
        </div>
        <span>Температура</span>
        <p>{{ Math.round(weather.current.temp) }}° - ощущается как {{ Math.round(weather.current.feels_like) }}°</p>
      </div>
      <div class="main__content-right-item">
        <div class="main__content-right-img">
          <img src="@/assets/img/pressure.svg" alt="" />
        </div>
        <span>Давление </span>
        <p>{{ getPressure }} мм ртутного столба - нормальное</p>
      </div>
      <div class="main__content-right-item">
        <div class="main__content-right-img">
          <img src="@/assets/img/osadki.svg" alt="" />
        </div>
        <span>Осадки</span>
        <p>Вероятность осадков {{ weather.current.clouds }} %</p>
      </div>
      <div class="main__content-right-item">
        <div class="main__content-right-img">
          <img src="@/assets/img/wind.svg" alt="" />
        </div>
        <span>Ветер</span>
        <p>{{ weather.current.wind_speed }} м/с {{ getK }} - легкий ветер</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { weatherIcon } from "@/icons";
import { getPressure } from "@/utils";
export default {
  computed: {
    ...mapState(["weather"]),
    description() {
      return this.weather.current.weather[0].description;
    },
    getImg() {
      return weatherIcon[this.description] || weatherIcon["ясно"];
    },
    getTime() {
      return new Date().toLocaleString("en-US", {
        timeZone: this.weather.timezone,
        timeStyle: "short",
        hourCycle: "h23",
      });
    },
    getPressure(){
      return getPressure(this.weather.current.pressure)
    },
    getK(){
      if (this.weather.current.wind_deg > 90 && this.weather.current.wind_deg < 180) {
        return 'юго-восток'
      }
    }
  },
 
};
</script>

<style>
</style>