import React, { Component } from 'react';
import FlashMessage from './FlashMessage';
import Checkbox from './FlashMessage/Checkbox';

export default class App extends Component {
  alertOptions = {
    offset: 14,
    time: 5000,
  };

  showAlert = () => {
    this.msg.show('マガジンを配信しました', {
      time: 2000,
      type: 'info',
      icon: <Checkbox />,
    });
  };

  render() {
    return (
      <div>
        <FlashMessage ref={a => (this.msg = a)} {...this.alertOptions} />
        <button onClick={this.showAlert}>Show Alert</button>
      </div>
    );
  }
}
