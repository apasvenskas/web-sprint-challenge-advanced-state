// import React, {useEffect} from 'react';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import * as actions from '../state/action-creators';

function Quiz(props) {
  // useSelector hook to acces the states.
 const quiz = useSelector(state => state.quiz);
 const selectedAnswer = useSelector(state => state.selectedAnswer);
 // use dispatch hook to create a dispatch
 const dispatch = useDispatch();

 if(quiz) {
  console.log('quiz.false_answer:', quiz.answers[0].answer_id);
  console.log('quiz.true_answer:',  quiz.answers[1].answer_id);
  console.log('submit button:', actions.postAnswer())
 }

 useEffect(() => {
  dispatch(actions.fetchQuiz())
 }, []);

  // return selected class name based on the answer state
  const getSelectedClass = (answer) => {
    return selectedAnswer === answer ? 'selected' : '';
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question_text}</h2>

            <div id="quizAnswers">
              <div className={`answer ${getSelectedClass(quiz.true_answer)}`}>
                {quiz.true_answer_text}
                <button onClick={() => dispatch(actions.selectAnswer(quiz.answers[0].answer_id))}>
                  {selectedAnswer === quiz.true_answer ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer ${getSelectedClass(quiz.false_answer)}`}>
                {quiz.false_answer_text}
                <button onClick={() => dispatch(actions.selectAnswer(quiz.answers[1].answer_id))}>
                  {selectedAnswer === quiz.false_answer ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={() => dispatch(actions.postAnswer())}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

// map redux state props
// const mapStateProps = (state) => {
//   return {
//     quiz: state.quiz, //get quiz state
//     selectedAnswer: state.selectedAnswer, //selected answer state
//   };
// };

// export default Quiz;

// export default connect(mapStateProps, {fetchQuiz: actions.fetchQuiz, selectAnswer: actions.selectAnswer, postAnswer: actions.postAnswer})(Quiz);