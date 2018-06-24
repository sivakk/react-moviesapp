import React,{Component} from 'react';
import Search from './Search';
import {connect} from 'react-redux';
import Movieitem from './Movieitem';

 class Movieresult extends Component {

    render() {
        return (
            <div >
              <Search/>
              {
                this.props.movies.map(item=>
                {
                  return <Movieitem movie={item} key={item.id}/>;
                }
            )}
            </div>
        );
    }
}

function mapStateToProps(state) {
  console.log(state )
  return{
    movies:state.tasks
  }
}

export default connect(mapStateToProps)(Movieresult)
