import axios from "axios";
import * as types from './action-types';

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() { 
  return {
    type: types.MOVE_CLOCKWISE
  }
}

export function moveCounterClockwise() {
  return{
    type: types.MOVE_COUNTERCLOCKWISE
  }
 }

export function selectAnswer(answer) {
  const questions = {type: types.SET_SELECTED_ANSWER, payload: answer}
  return questions;
 }

export function setMessage(message) {
  const notification = {type: types.SET_INFO_MESSAGE, payload: message}
  return notification;
 }

export function setQuiz(quiz) { 
  console.log('1', quiz)
  const info = {type: types.SET_QUIZ_INTO_STATE, payload: quiz}
  return info;
}

export function inputChange(name, value) {
  return {
    type: types.INPUT_CHANGE,
    payload: {
      name: name,
      value: value
    }
  }
 }

export function resetForm() {
  return {
    type: types.RESET_FORM
  }
 }

// ❗ Async action creators
// export async function fetchQuiz() {
//   try {
//     const API_URL = 'http://localhost:9000/api/quiz/next';
//     const response = await axios.get(API_URL);
//     dispatch(setQuiz(response.data));
//   } catch (error) {
//     console.error(error);
//   }
// }
export function fetchQuiz() {
  return function (dispatch) {
    const API_URL = 'http://localhost:9000/api/quiz/next';
      axios.get(API_URL)
      .then((response) => {
        dispatch(setQuiz(response.data));
      })
      .catch(error => {
        console.error(error);
      })
    }
  }
    
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  

export function postAnswer() {
  return function (dispatch, getState) {
    const selectedAnswer = getState().selectedAnswer;
    const quizId = getState().quiz.quiz_id;
    const requestData = { answer_id: selectedAnswer, quiz_id: quizId };
    axios.post('http://localhost:9000/api/quiz/answer', requestData)
    .then(response => {
      dispatch(resetForm());
      dispatch(setMessage(response.data.message));
      dispatch(fetchQuiz());
    })
    .catch(error => {
      console.error(error);
    });
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch, getState) {
    const form = getState().form;
    const quizData = {
      question_text : form.question_text,
      true_answer_text: form.true_answer_text,
      false_answer_text: form.false_answer_text,
    };
    
    axios.post('http://localhost:9000/api/quiz/new', quizData)
      .then(response => {
        dispatch(setMessage(response.data.message));
        dispatch(resetForm());
      })
      .catch(error => {
        if(error.response && error.response.status === 422){
          dispatch(setMessage('Validation error: Please check your input'));
        } else {
          console.error(error);
        }
      });
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state



