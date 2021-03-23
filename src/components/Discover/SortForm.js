import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


class SortForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value:'testvalue',
      }
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
      };
    
    render() {
      return (
        <div>
        <form className="center" style={{width: "100%", marginTop:"20px", color:"#555"}}>
            
            <FormControl component="fieldset" style={{width:'50%'}}>
            {/* <FormLabel component="legend">Sort By</FormLabel> */}
            <RadioGroup
                aria-label="Sort"
                name="sort"
                value={this.state.value}
                onChange={this.handleChange}
            >
                <div className="row">
                <div class="col-sm-2">
                    <p>Sort By: </p>
                </div>
                <div class="col-sm-3">
                <FormControlLabel value="price" control={<Radio />} label="Price" />
                </div>
                <div class="col-sm-3">
                <FormControlLabel value="rating" control={<Radio />} label="Rating" />
                </div>
                <div class="col-sm-3">
                <FormControlLabel value="distance" control={<Radio />} label="Distance" />
                </div>
                </div>                                
            </RadioGroup>
            </FormControl>
        </form>
        <hr style={{width:"50%"}}/>
        </div> 
        )
    }
  }
  
  export default SortForm