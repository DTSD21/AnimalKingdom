import Joi from "joi";
import nanoid from "nanoid";

interface Animal {
  id: string;
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

export const animalSchema = Joi.object<Animal, true>({
  id: Joi.string().required(),
  name: Joi.string().required().min(2),
  extinct: Joi.boolean().required(),
  taxonomy: Joi.string().required().min(2),
});

export let animals: Animal[] = [];

let monkey1: Monkey = {
  id: "1",
  name: "Nisse",
  extinct: false,
  taxonomy: "Hominidae gray",
  favfood: "Bananas",
  likestoswing: true,
};

let dog1: Dog = {
  id: "2",
  name: "Dog",
  extinct: false,
  taxonomy: "Canis lupus familiaris",
  petname: "Tuffa",
  age: 12,
};

animals.push(monkey1);
animals.push(dog1);
