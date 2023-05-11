import { addUser, getUser, getUsers, removeUser, updateUser } from '../dao/user';
import firebase from 'firebase/app';

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
<<<<<<< HEAD

// export const getCurrentUser = () => {
//   firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
//   .then(function(idToken) {
//     console.log(idToken);
//     return doc[idToken], idToken;
//   }).catch(function(error) {
//     console.log(error);
//   });
// }

export const tokenIsValid = async (lastLogin) => {
  // Calculate the difference between the current time and the lastLogin timestamp
  const currentTime = new Date().getTime();
  const lastLoginTime = new Date(lastLogin).getTime();
  const timeDiffInHours = (currentTime - lastLoginTime) / (1000 * 60 * 60);

  if (timeDiffInHours > 72) {
    // Log the user out or take other appropriate action
    return false;
  } else {
    // Update the lastLogin timestamp to the current time
    return true;
  }
}

const verifyToken = async (navigation) => {
  const currentUser = firebase.auth().currentUser;

  // Verify if the user is authenticated
  if (currentUser) {
    // Get the user's token from Firestore
    const userDoc = await firebase.firestore().collection('users').doc(currentUser.uid).get();
    const token = userDoc.data().token;
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
=======
>>>>>>> c22b064c798ba5b7e7140c2ead81fca39e2e01cb
