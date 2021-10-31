import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddOrder from './Pages/AddOrder/AddOrder';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import MyOrder from './Pages/MyOrder/MyOrder';
import AddANewItem from './Pages/AddANewItem/AddANewItem';
import Order from './Pages/Order/Order';
import About from './Pages/About/About';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
         <Header></Header>
         <Switch>
           <Route exact path='/' >
            <Home></Home>
           </Route>
           <Route exact path="/home" >
            <Home></Home>
           </Route>

           <PrivateRoute exact path='/order/:detailId' >
            <Order></Order>
           </PrivateRoute>

        
           <PrivateRoute exact path='/myOrders' >
             <MyOrder></MyOrder>
           </PrivateRoute>

           <Route exact path='/addOrder' >
             <AddOrder></AddOrder>
           </Route>

           <Route exact path='/login' >
             <Login></Login>
           </Route>

           <PrivateRoute exact path='/addANewItem' >
             <AddANewItem></AddANewItem>
           </PrivateRoute>

           <Route exact path='/about'>
            <About></About>
         </Route>

           <Route exact path='*'>
            <NotFound></NotFound>
         </Route>

         </Switch>
       </Router>
             <Footer></Footer>
    </AuthProvider>
    </div>
  );
}

export default App;
