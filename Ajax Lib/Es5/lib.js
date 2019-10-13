function LibraryHttp() {
    this.http=new XMLHttpRequest();
}
// make a get request
LibraryHttp.prototype.get=function (url,callback) {
    this.http.open('GET',url,true);
    self=this;
    this.http.onload=function () {
        if(self.http.status===200){
            callback(null,self.http.responseText);
        }else{
            callback("Error "+ self.status);
        }
    };
    this.http.send();
};


// make a Post request
LibraryHttp.prototype.post=function (url,data,callback) {
    this.http.open('POST',url,true)
    this.http.setRequestHeader('Content-type','application/json');
    self=this;
    this.http.onload=function () {
        callback(null,self.http.responseText);
    };
    this.http.send(JSON.stringify(data));
};


LibraryHttp.prototype.put=function (url,data,callback) {
    this.http.open('POST',url,true)
    this.http.setRequestHeader('Content-type','application/json');
    self=this;
    this.http.onload=function () {
        callback(null,self.http.responseText);
    };
    this.http.send(JSON.stringify(data));
};


LibraryHttp.prototype.delete=function (url,callback) {
    this.http.open('GET',url,true);
    self=this;
    this.http.onload=function () {
        if(self.http.status===200){
            callback(null,'Post deleted ');
        }else{
            callback("Error "+ self.status);
        }
    };
    this.http.send();
};
