import firestore from '@react-native-firebase/firestore';

export const getIngredients = async () => {
  const ingredientsSnapshot = await firestore()
    .collection('ingredients')
    .get();

  return ingredientsSnapshot.docs.map(doc => doc.data());
};
