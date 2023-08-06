 import React, {useEffect} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/action-creators';

function Quiz(props) {
  // useSelector hook to acces the states.
 const quiz = useSelector(state => state.quiz);
 const selectedAnswer = useSelector(state => state.selectedAnswer);
 // use dispatch hook to create a dispatch
 const dispatch = useDispatch();

//  if(quiz) {
//   console.log('quiz0', quiz.answers[0])
//   console.log('quiz1', quiz.answers[1])
//  }

 useEffect(() => {
  dispatch(actions.fetchQuiz())
 }, []);

  // return selected class name based on the answer state
  const getSelectedClass = (answer) => {
    return selectedAnswer === answer ? 'selected' : '';
  };

  return (
    <div id="wrapper">
{/*       
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..." */}
        {quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              {quiz.answers?.map((answer) => ( 
              <div key={answer.answer_id} className={`answer ${getSelectedClass(answer.answer_id)}`}>
                {answer.text}
                <button onClick={() => dispatch(actions.selectAnswer(answer.answer_id))}>
                  {selectedAnswer === answer.answer_id ? 'SELECTED' : 'Select'}
                </button>
                </div>
                ))}
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

export default Quiz;

// export default connect(mapStateProps, {fetchQuiz: actions.fetchQuiz, selectAnswer: actions.selectAnswer, postAnswer: actions.postAnswer})(Quiz);
