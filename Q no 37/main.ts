//creat a function
function describe_city(city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

//calling the function
describe_city("Karachi");

describe_city("Lahore");

//calling a function by default value
describe_city("Tokyo", "Japan");