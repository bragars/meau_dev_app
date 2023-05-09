import { addAnimal, getAnimal, getAnimals, removeAnimal, updateAnimal } from '../dao/animal';

export const create = (name, age, email) => {
  console.log("asas");
  addAnimal(name, age, email);
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
