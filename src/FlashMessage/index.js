import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';
import AlertMessage from './AlertMessage';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
`;

class AlertContainer extends Component {
  constructor(props) {
    super(props);

    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.info = this.info.bind(this);
    this.show = this.show.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
  }

  static defaultProps = {
    offset: 0,
    time: 5000,
  };

  static propTypes = {
    offset: PropTypes.number,
    time: PropTypes.number,
  };

  state = {
    alerts: [],
  };

  success(message = '', options = {}) {
    options.type = 'success';
    return this.show(message, options);
  }

  error(message = '', options = {}) {
    options.type = 'error';
    return this.show(message, options);
  }

  info(message = '', options = {}) {
    options.type = 'info';
    return this.show(message, options);
  }

  show(message = '', options = {}) {
    const { theme, time } = this.props;

    const alert = {
      id: shortid.generate(),
      message,
      time,
      theme,
      ...options,
    };

    this.setState(prevState => ({
      alerts: prevState.alerts.concat(alert),
    }));
    return alert.id;
  }

  removeAll() {
    const alertsRemoved = this.state.alerts;
    this.setState({ alerts: [] });
    alertsRemoved.forEach(alert => alert.onClose && alert.onClose());
  }

  removeAlert(id) {
    const alertRemoved = this.state.alerts.filter(alert => alert.id === id)[0];
    this.setState(prevState => ({
      alerts: prevState.alerts.filter(alert => alert.id !== id),
    }));
    alertRemoved && alertRemoved.onClose && alertRemoved.onClose();
  }

  render() {
    const { offset } = this.props;

    return (
      <Container offset={offset}>
        {this.state.alerts.map(alert => {
          return (
            <AlertMessage
              key={alert.id}
              {...alert}
              onRemoveAlert={this.removeAlert}
            />
          );
        })}
      </Container>
    );
  }
}

export default AlertContainer;
