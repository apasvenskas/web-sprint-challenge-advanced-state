import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { inputChange, resetForm, setQuiz, postQuiz} from '../state/action-creators';
//import * as actionCreators from '../state/action-creators'

export function Form(props) {
  console.log('Form state', props.form)

  // const useLocalStorage = (key, initialValue) => {
  //   const [storedValue, setStoredValue] = React.useState(() => {
  //     const item = localStorage.getItem(key);
  //     return item ? JSON.parse(item) : initialValue;
  //   });

  //   useEffect(() => {
  //     localStorage.setItem(key, JSON.stringify(storedValue));
  //   }, [key, storedValue]);

  //   return [storedValue, setStoredValue];
  // }

  // useEffect(() => {
  //   const handleLocationChange = (location) => {
  //     if(location.pathname === '/form') {
  //       const storedForm = localStorage.getItem('form');
  //       if(storedForm){
  //         const parsedForm = JSON.parse(storedForm);
  //         props.inputChange('question_text', parsedForm.question_text);
  //         props.inputChange('true_answer_text', parsedForm.true_answer_text);
  //         props.inputChange('false_answer_text_text', parsedForm.false_answer_text_text);
  //       }
  //     }
  //   }
  //   const unlisten = history.listen(handleLocationChange);
  //   return() => unlisten(); 
  // }, [history, props]);

  

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

  const inputField = () => {
    return (
      props.form.question_text.trim().length === 0 ||
      props.form.true_answer_text.trim().length === 0 || 
      props.form.false_answer_text.trim().length === 0
    )
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="new_Question" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="new_True_Answer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="new_False_Answer" placeholder="Enter false answer" />

      <button type='submit' id="submitNewQuizBtn" disabled={inputField()}>Submit new quiz</button>
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
