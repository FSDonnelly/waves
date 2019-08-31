import React, { Component, Fragment } from 'react';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='container'>{this.props.children}</div>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
