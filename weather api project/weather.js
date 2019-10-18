class weather{
    constructor(city,country){
        this.key='a6c14e4e06034ca370d90dc610a25c7e';
        this.city=city;
        //this.country='Canada';
    }


    async getweather(){

        const  response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
        const weatherinfo  =await  response.json();

        //
        //
        //
        // return weatherinfo
        return {
            weather: weatherinfo.weather,
            mainTemp:weatherinfo.main,
        }
    }
}