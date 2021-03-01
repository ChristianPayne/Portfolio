import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/SiteWide/NavBar";
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';
// import Footer from './components/SiteWide/Footer';
import ContactMe from './pages/ContactMe';


// Contact Me, Keep in touch, 

function App() {
  return(
      <div className="bg-gray-200 h-full min-h-screen">
        <Router>
          {/* NavBar */}
          <Navbar />
            <Switch>

              {/* Home Page */}
              <Route exact path={["/", "/:project"]}>
                <LandingPage/>
                <ProjectsPage/>
                <ContactMe/>
              </Route>

              {/* Custom 404 */}
              <Route>
                <NotFoundPage/>
              </Route>

            </Switch>
          {/* <Footer/> */}
        </Router>
      </div>
  );
}

export default App;
