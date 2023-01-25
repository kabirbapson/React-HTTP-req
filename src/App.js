import W3SchoolTest from "./W3SchoolTest";
import "./App.css";
import YbTest from "./YbTest";
import Todo from "./Todo";
import Profile from "./Profile";

const text = async () => {
  let resp = fetch("google.com")
    .then((data) => {
      console.dir(data);
    })
    .catch((err) => {
      console.dir("dfrf", err);
    });
  // console.log(data)
  // console.log(resp)
};

text();

function App() {
  return (
    <div className="App">
      {/* <YbTest /> */}
      {/* <TestObjects /> */}
      {/* <PostForm />
      <PostList /> */}
      {/* <W3SchoolTest /> */}
      {/* <Todo /> */}
      <Profile />
    </div>
  );
}

export default App;
