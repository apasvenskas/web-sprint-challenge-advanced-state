import React from 'react';
import { connect } from 'react-redux';
import { inputChange, resetForm, setQuiz, postQuiz } from '../state/action-creators';
//import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const onChange = evt => {
    props.inputChange(evt.target.id, evt.target.value); 
  }

  const onSubmit = evt => {
    evt.preventDefault();
    props.setQuiz(props.form);
    props.resetForm();
    props.postQuiz();
  }
  console.log('form', props.form);
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapStateProps = state => {
  return {
    form: state.form
  }
}

export default connect(mapStateProps, {inputChange, setQuiz, resetForm, postQuiz})(Form)
