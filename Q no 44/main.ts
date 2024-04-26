//define a function to create a car object with optional option...
function create_car(manufacture, model, ...options){
    //initialize a car object with manufacturer and model
    let car = {
        manufacture: manufacture,
        model: model
    };

    //add additional options to the car objects
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}

//call the function to create a car object
let my_car = create_car("Toyota","Corrolla","Year: 2024", "Color: Black", "Sunroof: True");


console.log(my_car);