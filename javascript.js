const URL = "https://restmasterairflow.azurewebsites.net/api/Measure"
const ThirdPartyURL = "http://api.weatherapi.com/v1/current.json?key=d3b84167d2494d668ac113611211312&q=Roskilde&aqi=no"
Vue.createApp({
    data(){
        return{
            Data: [],
            date: new Date(),
            ThirdPartyData: []
        }
    },
    async created() {
        const response = await axios.get(URL)
        this.Data = await response.data
        const response2 = await axios.get(ThirdPartyURL)
        this.ThirdPartyData = await response2.data
    }
}).mount("#app")