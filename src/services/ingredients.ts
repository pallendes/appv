import firestore from '@react-native-firebase/firestore';
import {intersection} from 'lodash';

export const getIngredients = async () => {
  const ingredientsSnapshot = await firestore()
    .collection('ingredients')
    .get();

  return ingredientsSnapshot.docs.map(doc => doc.data());
};

export const findIngredients = async (ingredients: string) => {
  const ingredientsSnapshot = await getIngredients();
  // const ingredientsArr = ingredients.split(' ');
  console.log(ingredients);

  const matchedIngredients = ingredientsSnapshot.filter(item =>
    ingredients.includes(item.name),
  );

  console.log(matchedIngredients);

  return null;
};
