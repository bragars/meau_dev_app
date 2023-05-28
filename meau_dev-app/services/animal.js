import { addAnimal, getAnimal, getAnimals, removeAnimal, updateAnimal } from '../dao/animal';
import { createUserAnimal } from './user_animal';

export const create = async (animal, user) => {
  try {
    addAnimal(animal, user);
  } catch (error) {
    console.log(error)
  }
};

export const getAll = () => {
  return getAnimals();
};

export const get = (id) => {
  return getAnimal(id);
};

export const remove = (id) => {
  return removeAnimal(id);
};

export const update = (id, data) => {
  return updateAnimal(id, data);
};
