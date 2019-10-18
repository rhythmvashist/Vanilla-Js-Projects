class storage{
    constructor(){
        this.city;
        this.defaultCity='Vancouver';
    }

    getLocStorage(){
        if(localStorage.getItem('city')==null){
            this.city=this.defaultCity;
        }
        else{
            this.city=localStorage.getItem('city');
        }

        return this.city;
    }
    setLoc(city){
        this.city=city;
    }

}