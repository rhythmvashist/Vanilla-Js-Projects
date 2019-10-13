function LibraryHttp() {
    this.http=new XMLHttpRequest();
}

// make a get request
LibraryHttp.prototype.get=function (url,callback) {
    this.http.open('GET',url,true);
    self=this;
    this.http.onload=function () {
        if(self.http.status===200){
            callback(self.http.responseText);
        }else{
            callback("Error "+ self.status);
        }
    };
    this.http.send();
};