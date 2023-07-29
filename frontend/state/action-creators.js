import axios from "axios";
import { response } from "express";

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() { }

export function moveCounterClockwise() { }

export function selectAnswer() { }

export function setMessage() { }

export function setQuiz() { }

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz());
    axios.get('http://localhost:9000/api/quiz/next')
      .then(response => {
        dispatch(setQuiz(response.data));
      })
      .catch(error => {
        console.error(error);
      })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    const selectedAnswer = getState().selectAnswer
    axios.post('http://localhost:9000/api/quiz/new', selectedAnswer)
    .then(response => {
      dispatch(resetAnswer());
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
  return function (dispatch) {
    const quizData = getState().quizData;
    axios.post('http://localhost:9000/api/quiz/new', quizData)
      .then(response => {
        dispatch(setMessage(response.data.message));
        dispatch(resetForm());
      })
      .catch(error => {
        console.error(error);
      })
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
