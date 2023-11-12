import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar /> 
      {/* the navbar is constant for all page */}
      <div className="content">
         <switch>
          <Route path ="/">
            <Home/>

          </Route>
         </switch>
      </div>
    </div>
    </Router>

  );
}

export default App;