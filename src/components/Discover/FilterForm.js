import React, { Component } from 'react'

import jane from '../../Images/jane.jpg';
import jane2 from '../../Images/jane2.jpg';
import jane3 from '../../Images/jane3.jpg';
import john from '../../Images/john.jpg';
import john2 from '../../Images/john2.jpg';
import john3 from '../../Images/john3.jpg';

class FilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switch1: true,
    }
  }

  handleSwitchChange = nr => () => {
    let switchNumber = `switch${nr}`;
    this.setState({
      [switchNumber]: !this.state[switchNumber]
    });
  }
  
  handleChange = (e) => {
    this.setState({
      poetFilter: e.target.value
    })
    this.props.onChange(e.target.value)
  }
  
  render() {
    return (
        <div>
            <div class="card-group" className="center" style={{marginLeft: '25%', marginTop: '2.5%'}}>
            <form style={{width: "100%", margin:0}}>
                <div class="row">
                    <div class="col-sm-3">                        
                    <div className="form-group" style={{borderRadius:"5px", borderWidth:"0px", color:"#555"}}>
                        <div className="col-3 col-sm-12">
                            <label className="form-label" htmlFor="postcode">
                                Day
                            </label>
                        </div>
                        <div className="col-3 col-sm-12">
                            <label>
                            <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                Monday
                            </label>
                        </div>
                        <div className="col-3 col-sm-12">
                            <label>
                            <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                Tuesday
                            </label>
                        </div>
                        <div className="col-3 col-sm-12">
                            <label>
                            <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                Wednesday
                            </label>
                        </div>

                        <div className="col-3 col-sm-12">
                            <label>
                            <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                Thursday
                            </label>
                        </div>

                        <div className="col-3 col-sm-12">
                            <label>
                            <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                Friday
                            </label>
                        </div>

                        <div className="col-3 col-sm-12">
                            <label>
                            <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                Saturday
                            </label>
                        </div>

                        <div className="col-3 col-sm-12">
                            <label>
                            <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                Sunday
                            </label>
                        </div>
                    </div>
                    </div>

                    <div class="col-sm-3">                        
                    
                    <div className="form-group" style={{borderRadius:"5px", borderWidth:"0px", color:"#555"}}>
                        <div className="col-3 col-sm-12">
                            <label className="form-label" htmlFor="postcode">
                                Day
                            </label>
                        </div>

                        <div className="row" >
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                06 am
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                07 am
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                08 am
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                09 am
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                10 am 
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                11 am 
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                12 pm 
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                01 pm 
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                02 pm 
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                03 pm 
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                04 pm 
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                05 pm 
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                06 pm 
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                07 pm 
                            </label>
                            <label style={{marginLeft:"15px"}}>
                                <input name="isChecked" 
                                type="checkbox" 
                                checked={this.state.isChecked} 
                                onChange={this.handleCheckboxChange}/>
                                08 pm 
                            </label>
                        </div>
                        
                    </div>

                    </div>

                    <div class="col-sm-3">                        
                    <div className="form-group">
                        <div className="col-9 col-sm-12">
                        <select className="form-select" id="distance" style={{borderRadius:"5px", borderWidth:"0px", color:"#555"}}>
                            <option value="">Distance</option>
                            <option value="2">2 mi</option>
                            <option value="5">5mi</option>
                            <option value="10">10mi</option>
                            <option value="15">15mi</option>
                        </select>
                        </div>
                    </div>
                    </div>                 
                </div>
            </form>     
            </div>
            <hr style={{width:"55%"}}/>
        </div>      
      )
  }
}

export default FilterForm