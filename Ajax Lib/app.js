lib=new  LibraryHttp();
lib.get('https://jsonplaceholder.typicode.com/posts',function (err,serverResponse) {
    if(err){
        console.log(err);
    }
    else {
        console.log(serverResponse);
    }
});
