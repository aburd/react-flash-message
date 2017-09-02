import styled from 'styled-components';

const Alert = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &.scale-enter: {
    transform: scale(0);
  }
  ,
  &.scale-enter.scale-enter-active: {
    transform: scale(1);
    transition: all 250ms cubic-bezier(0, 0, 0.5, 1.5);
  }
  ,
  &.scale-leave: {
    transform: scale(1);
  }
  ,
  &.scale-leave.scale-leave-active: {
    transform: scale(0);
    transition: all 250ms ease-in-out;
  }
  ,
  &.fade-enter: {
    opacity: 0.1;
  }
  ,
  &.fade-enter.fade-enter-active: {
    opacity: 1;
    transition: all 250ms ease-out;
  }
  ,
  &.fade-leave: {
    opacity: 1;
  }
  ,
  &.fade-leave.fade-leave-active: {
    opacity: 0.1;
    transition: all 250ms ease-in;
  }
  background: linear-gradient(90deg, #58e2c5, #4bdaee);
  color: #fff;
`;

export default Alert;
