import React, { useState } from 'react';

const Form = ({ addIdea }) => {

  const [title, updateTitle] = useState("");
  const [desc, updateDesc] = useState("");

  const submitIdea = event => {
    event.preventDefault(); // prevents the page from refreshing when the form submits
    const newIdea = {
      id: Date.now(),
      title: title,
      description: desc,
    }
    addIdea(newIdea); // using the addIdea method from App that we passed as a prop to Form
    clearInputs(); // invoking the method I wrote below to reset the inputs
  }

  const clearInputs = () => {
    updateTitle("");
    updateDesc("");
  }


  return (
    <form>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={e => updateTitle(e.target.value)}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={desc}
        onChange={e => updateDesc(e.target.value)}
      />

      <button onClick={e => submitIdea(e)}>SUBMIT</button>
    </form>
  )
}

export default Form;
