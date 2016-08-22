import React from 'react';
import {connect} from 'react-redux';
import ColorPicker from 'react-color-picker';
import store from '../store';
import 'react-color-picker/index.css';
import styles  from '../index.css';

const changeColor = function(color) {
  return {
    type: 'NEW_COLOR',
    color: color
  }
}

class colorPick extends React.Component {

  componentDidMount() {
        
  }

  render() {

    let style = {
      background: this.props.color
    }
    return (
    	<div >
      <div className={styles.colorpick}>
        <h2>Select Color</h2>
        <ColorPicker value={ this.props.color } onDrag={ this.onDrag.bind(this) } />
      </div>
      <div style={ style } className={styles.divtest}>
      </div > 
      </div> 
    )
  }

  onDrag(color, c) {
    store.dispatch(changeColor(color));
  }
}


const mapStateToProps = function(store) {
  return {
    color: store.colorState.color
  };
}

export default connect(mapStateToProps)(colorPick);