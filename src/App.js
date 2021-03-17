import './App.css';
import LandingPage from "./LandingPage/LandingPage";
import SignUpForm from "./Forms/SignUpForm";
import SignInForm from "./Forms/SignInForm";
import Dashboard from "./dashboard/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
        <div className="App">
          <Switch>        
        <Route path="/" exact component={LandingPage}/>
        <Route path="/loginform" component={SignInForm}/>
        <Route path="/signupform" component={SignUpForm}/>
        <Route path="/dashboard" component={Dashboard} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
