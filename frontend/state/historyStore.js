import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

const useNavigateHistory = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const push = (path, state) => {
        navigate(path, {state});
    };
    const replace = (path, state) => {
        navigate(path, {state, replace: true});
    };
    return {location, push, replace};
}

export const useHistory = () => {
    const history = useNavigateHistory();
    const initialState = {
        currentTab: 0,
    }


const updateHistoryState = (newState) => {
    const updatedState = {...history.location.state, ...newState};
    history.replace({...history.location, state: updatedState });
};

const getHistoryState = () => {
    return history.location.state || initialState;
};

return {history, updateHistoryState, getHistoryState};
}


// create a history store here using useLocation & useHistory!!!

// Okay this is getting to complicated. Need to add one simple property to the project. the state has to remain the same while navigating through the app/webpage. That is the only thing I need to do. I cannot Change the App.js file with routes, I canot make new reducers or action-creators, and I cannot install new dependencies.