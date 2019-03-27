import React, { Component } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  sideDrawerClosedHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };

  render() {
    return (
    <>
      <Toolbar drawerToggleClicked={this.sideDrawerClosedHandler} />
      <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
      <main className={classes.Content}>
        {this.props.children}
      </main>
    </>
    )
  }
}

export default Layout;