import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    let timer = setInterval(() => {
      console.log("fninterval");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>{name}</h2>
      <h4>{location}</h4>
      <h4>Profile</h4>
    </div>
  );
};

export default User;
