import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Users;