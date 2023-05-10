import db from '../database/firebaseDb';
import { collection, doc } from 'firebase/firestore';
import { getDocs, getDoc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';

export const addAnimal = async (animal) => {
  const animalsCollection = collection(db, 'animals');

  await addDoc(animalsCollection, animal)
  .then(() => {
    console.log("Document successfully written!");
  }).catch((error) => {
    console.log("error", error);
  });
};

export const getAnimals = async () => {
  var animals = [];

  await getDocs(collection(db, 'animals'))
  .then((docs) => {
    docs.forEach((doc) => {
      animals.push(doc.data());
    });
  })
  .catch((error) => {
    console.log(error);
  });

  console.log(animals);
  return animals;
};

export const getAnimal = async (id) => {
  const animalDoc = await getDoc(doc(db, 'animals', id))

  if (animalDoc.exists())
    return animalDoc;
  else {
    console.log('No such document!');
  }
};

export const removeAnimal = async (id) => {
  try {
    const animalDoc = doc(db, 'animals', id);

    await deleteDoc(animalDoc);    
    console.log('animal successfully deleted!');
  } catch (error) {
    console.error('Error removing animal: ', error);
  }
};

export const updateAnimal = async (id, data) => {
  try {
    const animalDoc = doc(db, 'animals', id);
    console.log(data);
    await updateDoc(animalDoc, data);
    console.log('animal successfully updated!');
  } catch (error) {
    console.error('Error updating animal: ', error);
  }
};
