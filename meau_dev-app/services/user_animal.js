import db from '../database/firebaseDb';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

export const getUserAnimals = async () => {
  var animals = [];
  const uid = getAuth().currentUser.uid;

  await getDocs(collection(db, `users_animals/${uid}/animals`))
  .then((docs) => {
    docs.forEach((doc) => {
      animals.push(doc.data());
    });
  })
  .catch((error) => {
    console.log(error);
  });
  
  return animals;
}
