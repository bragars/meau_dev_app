import { createUserAnimals, getUserAnimals } from "../dao/user_animals";

export const createUserAnimal = (user, animal, idAnimal) => {
  createUserAnimals(user, animal, idAnimal)
};

export const getUserPets = async () => {
  return await getUserAnimals();
};
