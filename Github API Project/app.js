const github=new Github;
const ui=new UI;

// SEARCH INPUT
const searchUser=document.getElementById('searchuser').addEventListener('keyup',(e)=>{
    userTest = e.target.value;
    if (userTest !==""){
        //make a http call
        github.getUser(userTest)
            .then(data =>{
                // message is the property for error in console.
                if(data.profile.message ==='Not Found'){
                    // show alert user not found (ui.js file)
                    ui.showAlert("No user exist",".alert")

                }else{
                    // show profile(ui.js)
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })

    } else{
        //clear profile(ui.js)
        ui.clearProfile();
    }
});

