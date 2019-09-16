import React, { Component, Fragment } from 'react';

import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='page_container'>{this.props.children}</div>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
