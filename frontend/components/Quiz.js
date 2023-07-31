import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/action-creators';

function Quiz(props) {
  const {quiz, selectedAnswer, fetchQuiz, selectAnswer, postAnswer} = props;
  
  // function that runs when component mounts
  useEffect(() => {
    fetchQuiz();
  }, []);

  // return selected class name bosed on the answer state
  const getSelectedClass = (answer) => {
    return selectAnswer === answer ? 'selected' : '';
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.quastion_text}</h2>

            <div id="quizAnswers">
              <div className={`answer ${getSelectedClass(quiz.true_answer)}`}>
                {quiz.true_answer_text}
                <button onClick={() => selectAnswer(quiz.true_answer)}>
                  {selectedAnswer === quiz.true_answer ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer ${getSelectedClass(quiz.false_answer)}`}>
                {quiz.false_answer_text}
                <button onClick={() => selectAnswer(quiz.false_answer)}>
                  {selectAnswer === quiz.false_answer ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={postAnswer}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

// map redux state props
const mapStateProps = (state) => {
  return {
    quiz: state.quiz, //get quiz state
    selectedAnswer: state.selectedAnswer, //selected answer state
  };
};



export default connect(mapStateProps, {fetchQuiz: actions.fetchQuiz, selectAnswer: actions.selectAnswer, postAnswer: actions.postAnswer})(Quiz);