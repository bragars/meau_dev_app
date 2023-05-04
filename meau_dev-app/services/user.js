import { addUser, getUser, getUsers, removeUser, updateUser } from '../dao/user';

export const create = (name, age, email) => {
  addUser(name, age, email);
};

export const getAll = () => {
  return getUsers();
};

export const get = (id) => {
  return getUser(id);
};

export const remove = (id) => {
  return removeUser(id);
};

export const update = (id, data) => {
  return updateUser(id, data);
};
