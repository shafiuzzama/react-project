
import './App.css';
import UserProfile from './components/UserProfile';
import myimg from './Asset/photo.jpg'
function App() {
  const userdata={name:"pyare",img:myimg,title:"software developer" ,skill:"react.js"}
  return (
   <>
   <h1>heloo</h1>
   <UserProfile  userdata={userdata}/>
   </>
  );
}

export default App;
