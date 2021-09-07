import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './components/navbar';
import UserList from './components/user-list';
import './App.css';


function App() {
  const [thirtyUsers, setThirtyUsers] = useState(null);

  const getTopThirtyUsers = () => {
    axios.get('https://api.github.com/repos/scala/scala/contributors?q=commits&order=desc')
    .then(({ data }) => setThirtyUsers(data))
    .catch(({ message }) => console.log(message))
  }

  useEffect(() => {
    return getTopThirtyUsers();
  }, [])

  return (
    <div className="body-container">
      <Navbar />
      <UserList users={thirtyUsers} />
    </div>
  );
}

export default App;
