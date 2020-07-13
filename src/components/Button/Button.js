import React from 'react';

// import { Container } from './styles';

function Button(props) {
  return (
      <button onClick={props.onPress}>
          {props.children}
      </button>
  )
}

export default Button;