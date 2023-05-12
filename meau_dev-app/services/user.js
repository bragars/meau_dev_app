import { addUser, getUser, getUsers, removeUser, updateUser } from '../dao/user';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

export const getCurrentUser = async () => {
  const currentUser = getAuth().currentUser;

  if (currentUser)
    return currentUser;
}

export const getToken = async () => {
  const currentUser = getAuth().currentUser;

  if (currentUser) {
    const token = await currentUser.getIdToken();
    return token;
  }
};

export const tokenIsValid = async (lastLogin) => {
  const currentTime = new Date().getTime();
  const lastLoginTime = new Date(lastLogin).getTime();
  const timeDiffInHours = (currentTime - lastLoginTime) / (1000 * 60 * 60);

  if (timeDiffInHours > 72)
    return false;
  else 
    return true;
}

const verifyToken = async (navigation) => {
  const currentUser = firebase.auth().currentUser;

  // Verify if the user is authenticated
  if (currentUser) {
    // Get the user's token from Firestore
    const userDoc = await firebase.firestore().collection('users').doc(currentUser.uid).get();
    const lastLogin = userDoc.data().lastLogin;

    // Verify the token is valid
    const tokenIsValid = tokenIsValid(lastLogin);

    if (!tokenIsValid) {
      // Log the user out or take other appropriate action
      await firebase.auth().signOut();
      navigation.navigate('Login');
    } else {
      await userDoc.ref.update({ lastLogin: new Date().toISOString() });
    }

  }
};
