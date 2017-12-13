import React, {PropTypes} from 'react';
import Header from './common/Header';

//react router will be passing child components as properties onto our app component
class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

//proptype validation
//add children as a required proptype
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
