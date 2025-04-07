import React, { useEffect, useState } from "react";
function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <ul>
      {users.map(user => (
        <li key={user._id}>{user.username} - {user.email}</li>
      ))}
    </ul>
  );
}
export default UserList;