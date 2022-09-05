import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";
import { Route, Switch } from "react-router-dom";
import UserPostList from "./components/UserPostList";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/posts" component={UserPostList} />
        <Route exact path="/add/:UserId" component={AddPost} />
        <Route exact path="/edit/:postId" component={EditPost} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
