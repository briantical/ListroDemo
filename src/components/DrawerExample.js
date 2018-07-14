import React, { Component } from 'react';
import { Drawer } from 'native-base';
import HomeInfo from './HomeInfo';
export default class DrawerExample extends Component {
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<HomeInfo navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
     
      </Drawer>
    );
  }
}