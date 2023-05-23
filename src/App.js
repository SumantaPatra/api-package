
import Login from "./components/login";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { ProductList } from "./components/products";
import { ErrorPage } from "./components/error";
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" Component={Login} /> 
      <Route exact path="/product" Component={ProductList} /> 
      <Route exact path="/error" Component={ErrorPage} /> 
      </Routes>
   </Router>
  )
}

export default App;
