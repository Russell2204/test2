import {
    createStore
} from "vuex";
import axios from 'axios'

const store = createStore({
    state: {
        apiKey: 'a6fbb52b2f2bc00b4cf4aaa2411f4e48',
        weather: null
    },

    mutations: {
        getWeather(state, payload) {
            state.weather = payload
        }
    },

    actions: {
        async getWeather({
            commit,
            state
        }, city) {
            try {
                if (location.protocol === 'http:') {
                    let responce = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
                    let {
                        lat,
                        lon,
                        local_names
                    } = responce.data[0]
                    let response2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&units=metric&lang=ru`)
                    let weatherInfo = {
                        ...response2.data,
                        name: city
                    }
                    commit('getWeather', weatherInfo)
                }else{
                    let responce = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
                    let {
                        lat,
                        lon,
                        local_names
                    } = responce.data[0]
                    let response2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&units=metric&lang=ru`)
                    let weatherInfo = {
                        ...response2.data,
                        name: city
                    }
                    commit('getWeather', weatherInfo)
                }
            } catch (error) {
                console.log(error);
            }
        }
    },

    getters: {}
})
export default store