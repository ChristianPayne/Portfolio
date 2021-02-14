import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactMeModal from './components/ContactMeModal';
import { PageCenter } from "./components/Styling/PageCenter";

// TODO: Get react-router-dom to display different pages.
// TODO: Make contact me a modal. That can be triggered from anywhere.


// Contact Me, Keep in touch, 

function App() {
  return(
      <>
        <Router>
          {/* NavBar */}
          <Navbar />
          <ContactMeModal/>
            <Switch>
              {/* Home Page */}
              <Route exact path={["/", "/about-me"]}>
                <LandingPage/>
              </Route>
              {/* Projects Page */}
              <Route exact path={["/projects"]}>
                <ProjectsPage/>
              </Route>
              {/* Custom 404 */}
              <Route>
                {/* Render a custom 404 */}
              </Route>
            </Switch>
        </Router>
      </>
  );
}

export default App;
