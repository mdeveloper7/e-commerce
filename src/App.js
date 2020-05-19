import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {
  unsuscribeFromAuth = null;

  componentDidMount() {
    const { setCurentUser } = this.props;

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/signin' render={() => this.props.currentUser
             ? (<Redirect to='/' />) 
             : (<SignInAndSignUpPage />)} />
          {/* <Route exact path='/hats' component={HatsPage}/>
          <Route path='/hats/:hatId' component={HatsDetailsPage}/> */}
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurentUser: user => dispatch(setCurentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
