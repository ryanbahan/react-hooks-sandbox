import React, { useState } from 'react';
import Ideas from './ideas';
import Form from './form';
import './App.css';

const App = () => {
  const [ideas, updateIdeas] = useState([
    {
      id: 1,
      title: 'dogs should vote',
      description: 'give them rights'
    },
    {
      id: 2,
      title: 'grocery shopping',
      description: 'get groceries'
    }
  ]);

    return (
    <div>
      <h1>Ideabox</h1>
      <Form addIdea={(idea) => updateIdeas([...ideas, idea])} />
      <Ideas ideas={ideas} deleteIdea={(id) => updateIdeas(ideas.filter(item => item.id !== id))} />
    </div>
  )
}

export default App;
