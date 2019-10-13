lib=new  LibraryHttp();
url='https://jsonplaceholder.typicode.com/posts';
lib.get('https://jsonplaceholder.typicode.com/posts',function (err,serverResponse) {
    if(err){
        console.log(err);
    }
    else {
        console.log(serverResponse);
    }
});

//POST
const data ={
    title:'custom title',
    body:' this is the body of '
};

lib.post(url,data,function (err,resp) {
    if(err){
        console.log(err);
    }else{
        console.log(resp);
    }

});



