import React from 'react'
import UserProfile from './UserProfile';
import ErrorBoundry from './ErrorBoundry';

const App = () => {
  const userData = {
    name: 'John Doe',
    age: 25
  };
  const userData1 = null;
  return (
    <div>
      <ErrorBoundry>
        <UserProfile userData={userData} />  
      </ErrorBoundry>
      
      <ErrorBoundry fallback={<p>something wrong in data</p>}>
        <UserProfile userData={userData1} />  
      </ErrorBoundry>  
    </div>
  )
}

export default App
