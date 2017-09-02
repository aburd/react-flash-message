import styled from 'styled-components';

const Close = styled.div`
  width: 50px;
  height: 100%;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  &:hover: {
    opacity: 0.5;
  }
  background: url('data:image/svg+xml;utf8,<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>')
    no-repeat;
  background-position: 50%;
  background-size: 25px;
`;

export default Close;
