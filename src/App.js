import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Product from "./pages/product";
import CartIcon from "./component/CartIcon";
import {Provider} from "react-redux";
import store from "./store/store";
import UserIcon from "./component/userIcon";
import User from "./pages/User";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Animal Store</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" >Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>
          
        </div>
        <CartIcon/>
        <UserIcon/>
      </nav>
      
      <Route path="/products" component={ProductPage} exact/>
      <Route path="/products/:id" component={Product}/>
      <Route path="/cart" component={CartPage}/>
      <Route path="/user" component={User}/>
      </div>
      <Route path="/" exact component={HomePage}/>
      </Router>
    </Provider>
    
  );
}
/*
// function AppWithStore() {
//     return <Provider store={store}>
//         <App/>
//     </Provider>
//   }
export default AppWithStore;

هذه الطريقة في حالة لو مش عاوز احط تاج البروفيدر ف الاول وعاوز احطة في حته لواحده اعمل كومبوننت جديد واخلي الاكسبورت بتاعة للكومبوننت الجديد

*/

export default App;