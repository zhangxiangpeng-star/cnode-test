import React, { Component } from 'react';
//import RouterIndex from "./router/index" ;
import MainHeader from "./view/main_header";
import MainFooter from "./view/main_footer";
import "./view/index.css";
class App extends Component{
  render(){
    return  <div className="pageWrap"> 
    <MainHeader/>
    <MainFooter />
    </div> 
  }
}
export default App;

