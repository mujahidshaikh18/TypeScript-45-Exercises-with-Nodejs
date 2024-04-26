let userNames = ["Ali","Azhar","Huraira","Wahaj",'Admin'];

//remove all values from our array now our array is empty
userNames = []

//if statement for checking length of our arrayis empty?
if(userNames.length === 0){
    console.log("Your array is empty we need to find some users!" );
}else{
    //if array is not empty use foreach loop on array
    userNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }else{
            console.log(`Hello ${oneUser}, thank you for loggin in again.`);
        }
    })
}
