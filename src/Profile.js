import React from "react";
// import {usesele} from '@reduxjs/toolkit'
import { useSelector } from "react-redux";
const Profile = () => {
    const  user  = useSelector((state) => state.user.value);
    console.log(user)
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  );
};

export default Profile;
