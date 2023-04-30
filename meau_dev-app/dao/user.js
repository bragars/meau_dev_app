import db from '../database/firebaseDb';
import { collection } from 'firebase/firestore';
import { getDocs, getDoc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';

export const addUser = async (name, age, email) => {
  const usersCollection = collection(db, 'users');

  await addDoc(usersCollection, {
    name: name,
    age: age,
    email: email,
  }).then(() => {
    console.log("Document successfully written!");
  }).catch((error) => {
    console.log("error", error);
  });
};

export const getUsers = async () => {
  var users = [];

  await getDocs(collection(db, 'users'))
  .then((docs) => {
    docs.forEach((doc) => {
      users.push(doc.data());
    });
  })
  .catch((error) => {
    console.log(error);
  });

  console.log(users);
  return users;
};

export const getUser = async (id) => {
  const userDoc = await getDoc(doc(db, 'users', id))

  if (userDoc.exists()) {
    console.log(userDoc.data());
    return userDoc;

  } else {
    console.log('No such document!');
  }
};

export const removeUser = async (id) => {
  try {
    const userDoc = doc(db, 'users', id);

    await deleteDoc(userDoc);    
    console.log('User successfully deleted!');
  } catch (error) {
    console.error('Error removing user: ', error);
  }
};

export const updateUser = async (id, data) => {
  try {
    const userDoc = doc(db, 'users', id);

    await updateDoc(userDoc, data);    
    console.log('User successfully updated!');
  } catch (error) {
    console.error('Error updating user: ', error);
  }
};
