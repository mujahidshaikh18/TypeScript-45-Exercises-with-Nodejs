//creating a function with parameter which return a value in string
function city_country(city: string, country: string) : string {
    return `${city} , ${country}`;
}

//calling a function in print the return value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Berlin", "Germany"));
