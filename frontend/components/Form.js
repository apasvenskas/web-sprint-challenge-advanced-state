import React from 'react';
import { connect } from 'react-redux';
import { inputChange, resetForm, setQuiz } from '../state/action-creators';
//import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const onChange = evt => {
    props.inputChange(evt.target.id, evt.target.value); 
  }

  const onSubmit = evt => {
    evt.preventDefault();
    props.setQuiz(props.form);
    props.resetForm();
  }

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

export default connect(st => st, {inputChange, setQuiz, resetForm})(Form)
