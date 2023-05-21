import db from '../database/firebaseDb';
import { collection, doc, getDocs } from 'firebase/firestore';

export const getUsers = async (userId) => {
  const junctions = await db
    .collection(`junction_user_animal`)
    .where("userId", "==", userId)
    .get();

  const animals = await Promise.all(
    junctions.docs
      .filter(doc => doc.exists)
      .map(doc => db.doc(`animals/${doc.data().courseId}`).get())
  );

  return animals.filter(doc => doc.exists).map(doc => ({ id: doc.id, ...doc.data() }));
}

export const getUserAnimals = async (userToken) => {
  var animals = [];

  console.log(userToken);
  const uid = doc(userToken).id;
  console.log(uid);

  // await getDocs(collection(db, `users_animals/${userId}/animals`))
  // .then((docs) => {
  //   docs.forEach((doc) => {
  //     console.log(doc.data());
  //     animals.push(doc.data());
  //   });
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  
  console.log(animals);
  return animals;
}
