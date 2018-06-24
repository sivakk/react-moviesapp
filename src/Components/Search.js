import React,{Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap';
import {API_KEY} from './API';
import {movies} from '../Actions/index';
import {connect} from 'react-redux';

class Search extends Component {

  search=()=>{
    console.log('clicked');
  }
  query=(event)=>{
  let  term=event.target.value;
  console.log(term);
  let url=`https://api.themoviedb.org/3/search/movie?api_key=8c11273ebd6ca1da940de58834dad79f&query=${term}`;
    console.log(url);
    fetch(url,{
      method:'GET'
    }).then(response=>response.json())
    .then(jsonObj=>{this.props.movies(jsonObj.results)});
  }

    render() {
        return (
            <div >
              <Form inline className="col-md-12 col-md-offset-4 text-center">
              <FormGroup  >
              <ControlLabel>Search </ControlLabel>
              {'  '}
              <FormControl
                type="text"
                placeholder="wonder woman"
                onChange={this.query}
                />
              {' '}
              <Button bsStyle="success"
                onClick={this.search}>
                Submit
              </Button>
            </FormGroup>
          </Form>

          </div>
        );
    }
}

export default connect(null, {movies})(Search)
