import React from 'react';
import Card from './card'

const Ideas = (props) => {
  const ideaCards = props.ideas.map(idea => {
  return (
    <Card
      title={idea.title}
      description={idea.description}
      id={idea.id}
      key={idea.id}
      deleteIdea={props.deleteIdea}
    />
  )
})

  return (<section>{ideaCards}</section>)
}

export default Ideas;
