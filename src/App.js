import logo from './logo.svg';
import './App.css';
import PostList from './PostList';
import PostForm from './PostForm';

function App() {
  return (
    <div className="App">
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
