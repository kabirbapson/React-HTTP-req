import W3SchoolTest from "./W3SchoolTest";
import "./App.css";
import YbTest from "./YbTest";
import Todo from "./Todo";
import Profile from "./Profile";

try {
  console.log(first)
} catch {
  console.log('second')
} finally {
  console.log('final')
}

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
