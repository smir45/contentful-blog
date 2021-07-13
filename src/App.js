import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FullPost from './components/fullpost'
import Home from './components/Home';
import postDetails from './components/postdetails'
const App = () => {
  return(
    <Router>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fullpost" exact component={FullPost} />
          <Route path="/fullpost/:id" component={postDetails} />
        </Switch>
      </main>
    </Router>
  );
}
export default App;
