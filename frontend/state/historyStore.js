// If you are already using Redux with the connect function, then you should be able to preserve state across different pages of your app by using the combineReducers function from Redux. This function allows you to create a single root reducer from multiple slice reducers, each of which handles a specific part of the state. For example, you can have a wheelReducer, a quizReducer, and a formReducer, each of which returns the updated state for their respective slice. Then, you can use combineReducers to create a rootReducer like this:




// import React from 'react';
// import {useNavigate, useLocation} from 'react-router-dom';

// const useNavigateHistory = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const push = (path, state) => {
//         navigate(path, {state});
//     };
//     const replace = (path, state) => {
//         navigate(path, {state, replace: true});
//     };
//     return {location, push, replace};
// }

// export const useHistory = () => {
//     const history = useNavigateHistory();
//     const initialState = {
//         currentTab: 0,
//     }


// const updateHistoryState = (newState) => {
//     const updatedState = {...history.location.state, ...newState};
//     history.replace({...history.location, state: updatedState });
// };

// const getHistoryState = () => {
//     return history.location.state || initialState;
// };

// return {history, updateHistoryState, getHistoryState};
// }


