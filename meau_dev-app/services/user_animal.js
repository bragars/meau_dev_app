// https://medium.com/firebase-tips-tricks/how-to-secure-many-to-many-relationships-in-firestore-d19f972fd4d3

import db from '../database/firebaseDb';

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

async function pets(userId, animalId) {
  const junctionRef = db.doc(`junction_user_animal/${userId}_${animalId}`);
  await junctionRef.set({ userId, animalId });
}
