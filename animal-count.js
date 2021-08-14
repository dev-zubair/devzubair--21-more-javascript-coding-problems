function animalCount(miles){
    const animarDensityFirst10Miles = 10;
    const animarDensitySecond10Miles = 50;
    const animarDensityRestMiles = 100;
    if(miles <=10){
        const count = miles * animarDensityFirst10Miles;
        return count;
    }
    else if(miles <= 20);
    const firstDenseAnimals = 10 * animarDensityFirst10Miles;
    const restMiles = miles - 10 ;
    const secondDenseAnimals = restMiles * animarDensitySecond10Miles; 
    const totalAnimals = firstDenseAnimals + secondDenseAnimals;
    return totalAnimals;
}
else {
    const firstDenseAnimals = 10 * animarDensityFirst10Miles;
    const secondDenseAnimals = 10 * animarDensitySecond10Miles; 
    const restMiles = miles - 20;
    const restDenseAnimals = restMiles *  animarDensityRestMiles;
    const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals; 
    return totalAnimals;
}

const animals = animalCount(13);
console.log(animals);


WATCH THE CODE AGAIN. ITS SHOWING ERROR