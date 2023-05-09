import { addUser, getUser, getUsers, removeUser, updateUser } from '../dao/user';
import firebase from 'firebase/app';

export const create = (user) => {
  addUser(user);
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
