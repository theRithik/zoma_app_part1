import React,{Component} from 'react'
import {BrowserRouter, Route,} from 'react-router-dom'
import Home from './component/home/home';
import Header from './header';
import Footer from './footer';
import Listing from './component/listing/listing.Api';
import Details from './component/details/details'

class App extends Component{

    render(){
        return(
        <BrowserRouter>
        <Header/>
         <Route exact path='/' component={Home}/>
            <Route path={`/listing/:mealId`} component={Listing}/>
            <Route path='/details' component={Details}/>
        <Footer/>
        </BrowserRouter>
        
    
            )
    }
   
}
export default App;