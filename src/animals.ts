interface Animal {
    name: string;
    extinct: boolean;
    taxonomy: string;
}

interface Dog extends Animal {
    petname: string;
    age: number;
}

interface Monkey extends Animal {
    favfood: string;
    likestoswing: boolean;
}

let animals: Animal[] = [];

let monkey1: Monkey = {
    name: "Nisse",
    extinct: false,
    taxonomy: "Hominidae gray",
    favfood: "Bananas",
    likestoswing: true
}

let dog1: Dog = {
    name: "Dog",
    extinct: false,
    taxonomy: "Canis lupus familiaris",
    petname: "Tuffa",
    age: 12
}

animals.push(monkey1);
animals.push(dog1);

console.log(animals);