// reducer.js

import { useReducer } from 'react';

// Initial state for basket and user
const initialState = {
  basket: [], // Shopping basket details of logged-in user (An array of items)
  user: null, // Details of the logged-in user (null if no user is logged in)
};

// Reducer function to manage state changes
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, action.item] };
    case 'REMOVE_FROM_BASKET':
      return { ...state, basket: state.basket.filter((item) => item.id !== action.id) };
    case 'SET_USER':
      return { ...state, user: action.user };
    default:
      return state;
  }
};

// Function to calculate the total amount of items in the shopping basket
const calculateTotalAmount = (basket) => {
  return basket.reduce((total, item) => total + item.price, 0);
};

// Custom hook to use the reducer and manage application-level state
const useAppState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch, calculateTotalAmount };
};

export default useAppState;
