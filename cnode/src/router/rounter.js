/* import React,{Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Index from "../view/IndexI/Index";
import GittingStarted from "../view/GittingStarted/GittingStartded";
import API from "../view/API/API";
import About from "../view/About/About";
import register from "../view/register/register";
import SignIn from "../view/SignIn/SignIn";
import Details from "../view/Details/index";
import User from "../view/User/index";

export default class RouterIndex extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(<Redirect to="/index" />)}/>
                <Route path="/index" component={Index}/>
                <Route path="/gittingstarted" component={GittingStarted}/>
                <Route path="/api" component={API}/>
                <Route path="/about" component={About}/>
                <Route path="/resgister" component={register }/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/details/:id" component={Details}/>
                <Route path="/user/:id" component={User}/>
            </Switch>
        );
    }
} */