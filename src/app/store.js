import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import categoryReducer from '../Components/mainPage/subCategory/SubcategorySlice';
import studioReducer from '../Components/mainPage/studio/studioSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    studio: studioReducer,
    category: categoryReducer
  },
});
