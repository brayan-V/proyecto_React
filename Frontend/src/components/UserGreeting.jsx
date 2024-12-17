import React from "react";

const UserGreeting = ({ user }) => {    
  return (
    <div className="user-greeting">
      <p>Hola, {user?.nombreUsuario || "Usuario"}!</p>
    </div>
  );
};

export default UserGreeting;
