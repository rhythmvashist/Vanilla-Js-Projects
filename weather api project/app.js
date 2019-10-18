const w= new weather('vancouver','canada');

w.getWeather()
    .then(results => {

        console.log(results.weather[0].id);
        console.log(results.mainTemp);
    })
    .catch(err => console.log(err));