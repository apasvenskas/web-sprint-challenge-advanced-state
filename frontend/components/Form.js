import React from 'react';
import { connect } from 'react-redux';
import { inputChange, resetForm, setQuiz, postQuiz} from '../state/action-creators';
//import * as actionCreators from '../state/action-creators'

export function Form(props) {
  console.log('Form state', props.form)
  const onChange = evt => { 
    let payloadChange;
    switch (evt.target.id){
      case "new_Question":
        payloadChange = "question_text";
        break;
      case "new_True_Answer":
        payloadChange = "true_answer_text";
        break;
      case "new_False_Answer":
        payloadChange = "false_answer_text";
        break;
      default:
        payloadChange = "";
    }
    props.inputChange(payloadChange, evt.target.value);
    // console.log('onchange', evt.target.value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    props.setQuiz(props.form);
    props.resetForm();
    props.form; 
    props.postQuiz(props.form)
    console.log('onSubmit', 'Form submitted')
  }
  console.log('form', props.form);
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="new_Question" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="new_True_Answer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="new_False_Answer" placeholder="Enter false answer" />

      <button type='submit' id="submitNewQuizBtn">Submit new quiz</button>
      {props.error && <p className="error">{props.error}</p>}
      {props.success && <p className='success'>{props.success}</p>}
    </form>
  )
}

const mapStateToProps = state => {
  return {
    form: state.form
  }
}

export default connect(mapStateToProps, {inputChange, setQuiz, resetForm, postQuiz})(Form)
