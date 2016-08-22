import React from 'react';
import styles from '../index.css';
import {connect} from 'react-redux';

class Text extends React.Component {
  render() {
    const {color} = this.props;
    const style = {
      background: color
      
    }
    return (
      <div className={ styles.text }>
        <h2 >Text</h2>
        <p style={ style }>Hello React</p>
        <h2>Text</h2>
        <p style={ style }>Hello Redux</p>
        <h2>Text</h2>
        <p style={ style }>Hello Router</p>        
      </div>
    )
  }
}


const mapStateToProps = function(store) {
  return {
    color: store.colorState.color
  };
}

export default connect(mapStateToProps)(Text);