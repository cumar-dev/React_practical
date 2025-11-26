import React from 'react'
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  console.log(`type of errors: ${error}`);
  return (
    <div>
      <h1>Eror</h1>
      <p>Sorry This page is not exsist. {error.statusText}</p>
    </div>
  )
}

export default NotFound;