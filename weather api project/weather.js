class weather{
    constructor(city,country){
        this.key='a6c14e4e06034ca370d90dc610a25c7e';
        this.city=city;
        //this.country='Canada';
    }
    changeLocation(city){
        this.city=city;

    }
    async getWeather(){

        const  response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
        const weatherInfo  =await  response.json();

        //
        //
        //
        // return weatherInfo
        return {
            weather: weatherInfo.weather,
            mainTemp:weatherInfo.main,
        }
    }
}