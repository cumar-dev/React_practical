import React from 'react'
import Github from './Github'
import RealGithub from './RealGithub';
import Posts from './Posts';
import TodoApp from './TodoApp';

const App = () => {
  return (
    <>
   <h1>Github</h1>
    <Github />
    <RealGithub />
    <Posts />
    <TodoApp />
    </>
  )
}

export default App;