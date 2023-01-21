import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./features/theme";

import { login, logout } from "./features/user";
const Profile = () => {
  const [color, setColor] = React.useState("");
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
  React.useEffect(() => {
    setColor(theme);
  }, []);

  console.log("color", color);

  console.log("theme", theme);

  const dispatch = useDispatch();

  return (
    <div style={{ color: theme }}>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <h2>Email: {user.email}</h2>
      

      <button
        onClick={() => {
          dispatch(login({ name: "Musa" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
      <div>
        <input onChange={(e) => setColor(e.target.value)} />
        <button
          onClick={() => {
            dispatch(changeTheme(color));
          }}
        >
          Change Color
        </button>
      </div>
    </div>
  );
};

export default Profile;
