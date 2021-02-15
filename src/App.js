import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/SiteWide/NavBar";
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactMeModal from './components/ContactMeModal';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/SiteWide/Footer';

// TODO: Get react-router-dom to display different pages.
// TODO: Make contact me a modal. That can be triggered from anywhere.


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
              <ContactMeModal/>
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
