let currentUsers = ["Amjad","Usama","Adnan",'Rehan',"Zaid"];

let new_users = ["Hamza","adnan","Wahaj","Khalil","zaid"];

//loop through new_users to check for usernames avaibility
new_users.forEach(new_one_users => {
    
    //making a condition for username already exist and save in our_condition variable
    let our_condition = currentUsers.some(current_oneUsers => current_oneUsers.toLowerCase() === new_one_users.toLowerCase())

    //print different messages using if-else statement
    if(our_condition){
        console.log(`Sorry ${new_one_users} is already taken!`);
    }else{
        console.log(`This user name ${new_one_users} is available.`);
    }
})