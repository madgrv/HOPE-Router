import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catgenerator');
  };

  return (
    <div>
      <h1>Welcome to the About page</h1>
      <h2>Not much to be seen here yet</h2>
      <p>Check out the cat generator page instead!</p>
    </div>
  );
}
