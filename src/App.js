import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import Register from './Pages/Register'
// reset password pages
import Resetpassword from "./Pages/Resetpassword"
import Forgotpassword from './Pages/Forgotpassword'
import Checkemail from "./Pages/Checkemail"
import Passwordchanged from './Pages/Passwordchanged'
import EmailReq from "./Pages/EmailReq"
// Dashboard Links
import Dashboard from "./Pages/Dashboard"
import Myplan from "./Pages/Myplan"
import Myprofile from "./Pages/Myprofile"
import GroceryList from "./Pages/GroceryList";
import Dietplan from "./Pages/Dietplan";
import RecipeView from "./Pages/Recipe"
import RecipeInstructionsView from "./Pages/recipeInstructions"
import Habbits from "./Pages/Habbits"

// Pages
import BloodBiomarker from './Pages/BloodBiomarker'

// error Pages
import PageNotFound from './Errors/PageNotFound'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/'  element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
        {/* PasswordReset */}
        <Route path="/Resetpassword" element={<Resetpassword/>}/>
        <Route path="/Checkemail" element={<Checkemail/>}/>
        <Route path="/Passwordchanged" element={<Passwordchanged/>}/>
        <Route path="/EmailReq" element={<EmailReq/>}/>
        {/* Dashboard */}
        <Route path="/Myplan" element={<Myplan/>}/>
        <Route path="/Myprofile" element={<Myprofile/>}/>
        <Route path="/GroceryList" element={<GroceryList/>}/>
        <Route path="/Dietplan" element={<Dietplan/>}/>
        <Route path="/RecipeView" element={<RecipeView/>}/>
        {/* Pages */}
        <Route path="/BloodBiomarker" element={<BloodBiomarker/>}/>
        {/* errors */}
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/RecipeInstructionsView" element={<RecipeInstructionsView/>}/>
        <Route path="/Habbits" element={<Habbits/>}/>
       </Routes>
    </Router>
  </>
  );
}

export default App;
