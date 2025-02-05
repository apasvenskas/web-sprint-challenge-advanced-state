
// import React, {useEffect, useRef} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import * as actions from '../state/action-creators';


// function Quiz(props) {
//   // useSelector hook to acces the states.
//  const quiz = useSelector(state => state.quiz);
//  const selectedAnswer = useSelector(state => state.selectedAnswer);
//  // use dispatch hook to create a dispatch
//  const isMounted = useRef(false);
//  const dispatch = useDispatch();




//  useEffect(() => {
//     if(document.getElementById('submitAnswerBtn') || !isMounted.current){
//       dispatch(actions.fetchQuiz());
//     } 
//  }, [dispatch]); 

//   // return selected class name based on the answer state
//   const getSelectedClass = (answer) => {
//     return selectedAnswer === answer ? 'selected' : '';
//   };

//   const isAnswerSelected = useSelector(state => state.selectedAnswer !== null);


//   return (
//     <div id="wrapper">
// {/*       
//         // quiz already in state? Let's use that, otherwise render "Loading next quiz..." */}
//         {quiz ? (
//           <>
//             <h2>{quiz.question}</h2>

//             <div id="quizAnswers">
//               {quiz.answers?.map((answer) => ( 
//               <div key={answer.answer_id} className={`answer ${getSelectedClass(answer.answer_id)}`}>
//                 {answer.text}
//                 <button onClick={() => dispatch(actions.selectAnswer(answer.answer_id))} >
//                   {selectedAnswer === answer.answer_id ? 'SELECTED' : 'Select'}
//                 </button>
//                 </div>
//                 ))}
//               </div>

//             <button id="submitAnswerBtn" onClick={() => {
//             dispatch(actions.postAnswer());
//             // dispatch(actions.fetchQuiz());
//             }}
//             disabled={!isAnswerSelected}>
//               Submit answer
//             </button>
//           </>
//         ) : 'Loading next quiz...'
//       }
//     </div>
//   )
// }


// export default Quiz;