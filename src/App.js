import React from 'react';
import './App.css';
// import Menu from './components/Menu/Menu';
import routes from './routes';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="container">
                        <div className="row">

                            {this.showContentMenus(routes)}
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
    showContentMenus=(routes) => {
        var result='';
        if(routes.length>0) {
            result=routes.map((route,index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );

            });
        }

        return <Switch>{result}</Switch>
    }


}

export default App;
