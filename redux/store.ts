// // store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers/DarkReducer'; // Import your reducers

// export interface RootState {
//   // Define your RootState interface here
//   dark: ReturnType<typeof rootReducer>;
// }

// let store: any = null;

// if (typeof window !== 'undefined') {
//   // This check ensures that the store is only created in the client-side context
//   store = configureStore({
//     reducer: rootReducer,
//   });
// } else {
//   // In server-side or during pre-rendering, set store to an empty or default value
//   store = {}; // Or any default value you want to assign for server-side rendering
// }

// export { store };
