import {Ingredient} from './ingredient';

export type User = {
  id: number;
  name: string;
  email: string;
  preferences: Ingredient[];
  allergies: Ingredient[];
};

export const hasPreference = (user: User, ingredient: Ingredient) => {
  return user.preferences.includes(ingredient);
};

export const hasAllergy = (user: User, ingredient: Ingredient) => {
  return user.allergies.includes(ingredient);
};