const w= new weather('vancouver','canada');

w.getweather()
    .then(results => {
        console.log(results)
    })
    .catch(err => console.log(err));