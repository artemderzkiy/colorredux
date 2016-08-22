import React            from 'react';
import { Link }         from 'react-router';
import { connect }      from 'react-redux';
import styles           from '../index.css';

class Main extends React.Component {
  render() {
    const {color} = this.props;
    const style = {
      background: color
    }
    return (

       <div>  
<ul className={ styles.navs }>
  <li className={ styles.navsit } style={ style }><Link to="/">Main</Link></li>
  <li className={ styles.navsit } style={ style }> <Link to="/color">Colors</Link></li>
  <li className={ styles.navsit } style={ style }> <Link to="/nodes">Nodes</Link></li>
</ul>


        <main className="container">
          { this.props.children }
        </main>


      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    color: store.colorState.color
  };
}

export default connect(mapStateToProps)(Main);