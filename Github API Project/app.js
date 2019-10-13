const github=new Github;

// SEARCH INPUT
const searchUser=document.getElementById('searchuser').addEventListener('keyup',(e)=>{
    userTest = e.target.value;
    if (userTest !==""){
        //make a http call
        github.getUser(userTest)
            .then(data =>{
                if(data.profile.message ==='Not Found'){
                    // show alert user not found (ui.js file)
                }else{
                    // show profile(ui.js)
                }
            })
    } else{
        //clear profile
    }
});