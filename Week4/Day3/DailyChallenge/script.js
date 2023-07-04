
//Part 1
const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
let carInventory = inventory;

const getCarHonda = carInventory.find(inventory => inventory.car_make === "Honda");

// console.log(getCarHonda)

//Part 2-
// let yearOfCar = inventory.map(inventory=>inventory.car_year)
// console.log(yearOfCar)


const sortCarInventory = carInventory.sort((a,b) => {
    if (a.car_year < b.car_year) {
        return -1;
    } else if (a.car_year > b.car_year) {
        return 1;
    } else {
        return 0
    }
})

console.log(sortCarInventory)
