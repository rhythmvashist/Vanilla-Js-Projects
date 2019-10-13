lib=new LibraryHttp;
url='https://jsonplaceholder.typicode.com/users';
lib.get(url)
    .then(data=>console.log(data))
    .catch(err=>console.log(err));



lib.delete(url+'/1',{
    name:'rhythm',
    hobbies:'music'
})
    .then(function (res){
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });