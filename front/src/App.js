import React, { Component } from 'react';
import './css/App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import RoutesGeneral from './routes';

//Generals
import Header from './js/general/Header';
import Main from './js/Main';
import Footer from './js/general/Footer';

//Pages
import AboutPage from './js/pages/about';
import ContactPage from './js/pages/contact';
import ShopPage from './js/pages/shop';
import ShoppingPage from './js/pages/shopping';
import NotFound from './js/pages/404';

class App extends Component {

    render() {
        return (
        // <Router>
        //     <div className="app">
        //         <div className="app__wrapper">
        //             <Header/>
        //             <Route exact path='/' component={Main} />
        //             <Route exact path='/shop' component={ShopPage} />
        //             <Route exact path='/about' component={AboutPage} />
        //             <Route exact path='/contact' component={ContactPage} />
        //             <Route exact path='/shop/shopping' component={ShoppingPage} />
        //         </div>
        //         <Footer/>
        //     </div>
        // </Router>

        <Router>
            <Route render={(props) => {
                let HomePageStyling = '';
                if (props.location === '/') {
                    HomePageStyling = 'HOME';
                }
                return (

                    <div className={'app' + HomePageStyling }>
                        <div className="app__wrapper">
                            <Header location={this.props.location}/>
                            <Route exact path='/' component={Main} />
                            <Route exact path='/shop' component={ShopPage} />
                            <Route exact path='/about' component={AboutPage} />
                            <Route exact path='/contact' component={ContactPage} />
                            <Route exact path='/shop/shopping' component={ShoppingPage} />
                            {/* <Route exact path='*' component={NotFound} /> */}
                        </div>
                        <Footer/>
                    </div>
                );
            }}
            />
        </Router>

        );
    }
}

export default App;
