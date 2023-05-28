import { createUserAnimals } from "../dao/user_animals";

export const createUserAnimal = (user, animal, idAnimal) => {
  createUserAnimals(user, animal, idAnimal)
};
