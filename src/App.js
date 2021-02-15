import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/SiteWide/NavBar";
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/SiteWide/Footer';
import ContactMe from './pages/ContactMe';


// Contact Me, Keep in touch, 

function App() {
  return(
      <>
        <Router>
          {/* NavBar */}
          <Navbar />
            <Switch>

              {/* Home Page */}
              <Route exact path={["/", "/about-me"]}>
                <LandingPage/>
              </Route>

              {/* Projects Page */}
              <Route exact path={["/projects"]}>
                <ProjectsPage/>
              </Route>

              <Route exact path={["/contact-me"]}>
              <ContactMe/>
              </Route>

              {/* Custom 404 */}
              <Route>
                <NotFoundPage/>
              </Route>

            </Switch>
          <Footer/>
        </Router>
      </>
  );
}

export default App;
