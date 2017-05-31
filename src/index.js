import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Grid,Row,Form, FormGroup, ControlLabel, FormControl, HelpBlock,Col,Checkbox} from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
     <Grid>
     <Row><Col sm={2}> 
      <ControlLabel>{label}</ControlLabel>
      </Col>
      <Col sm={10}>
      	<FormControl {...props} />
      	</Col>	</Row>
      {help && <HelpBlock>{help}</HelpBlock>}
      </Grid>
    </FormGroup>
  );
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      bName:"",
      bPhone:"",
      Address:"",
      Landmark:"",
      Timings:0,
      Days:"",
      AC:true,
      sex:"M",
      kids:false,
      numberOfChairs:3,
      established:"",
      maleService:false,
      femaleService:false,
      wifi:false,
      tv:false,
      music:false,
      lat:0,
      lang:0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // getValue(target){
  // 	if(target.type === 'checkbox')
  // 			return target.checked;
  // 	if(target.type === 'list' || target.type === 'text')
  // 			return target.va;ue

  // }

  handleInputChange(event) {
    const target = event.target;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if(name==='bPhone'){
    	var nonNumericRegex = /[^0-9.]+/g;

		value= value.replace(nonNumericRegex, "");
   
    }
    this.setState({
      [name]: value
    });
  }
  // handleSubmit(event){
  // 	alert('Name :'+ this.state.bName+" phone :"+this.state.bPhone );
  // 	event.preventDefault();
  // }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.bName);
    event.preventDefault();
  }

  
  render() {
    return (
    <center>
      <Form  horizontal onSubmit={this.handleSubmit}>
       <Grid >
       { // <label>
        //   Is going:
        //   <input
        //     name="isGoing"
        //     type="checkbox"
        //     checked={this.state.isGoing}
        //     onChange={this.handleInputChange} />
        // </label>
        // <br />
        // <label>
        //   Number of guests:
        //   <input
        //     name="numberOfGuests"
        //     type="number"
        //     value={this.state.numberOfGuests}
        //     onChange={this.handleInputChange} />
        // </label>
        // <br />
        // <label>
        // 	BName:
        // 	<input
        // 	name="bName"
        // 	type="text"
        // 	value={this.state.bName}
        // 	onChange={this.handleInputChange}/>
        // </label>
       }
        <FieldGroup
        	id="bName"
        	label="bName"
        	name="bName"
        	type="text"
        	placeholder="Enter Name"
        	value={this.state.bName}
        	onChange={this.handleInputChange}
        	/>
		
        <FieldGroup
        	id="bPhone"
        	label="bPhone"
        	name="bPhone"
        	type="text"
        	placeholder="Enter phone"
        	value={this.state.bPhone}
        	onChange={this.handleInputChange}/>
       
        <FieldGroup
        	id="Address"
        	label="Address"
        	name="Address"
        	type="text"
        	placeholder="Enter Address"
        	value={this.state.Address}
        	onChange={this.handleInputChange}/>
        
       
        <FieldGroup
        	id="Landmark"
        	label="Landmark"
        	name="Landmark"
        	type="text"
        	placeholder="Enter Landmark"
        	value={this.state.Landmark}
        	onChange={this.handleInputChange}/>
        
       
        <FieldGroup
        	id="Days"
        	label="Days"
        	name="Days"
        	type="text"
        	value={this.state.Days}
        	placeholder="Enter Days"
        	onChange={this.handleInputChange}/>
        <FieldGroup
          id="Number of chairs"
          label="Number of chairs"
          name="numberOfChairs"
          type="number"
           value={this.state.numberOfChairs}
            onChange={this.handleInputChange} />
        <FieldGroup
        	id="Certification"
        	label="Certification"
        	name="Certification"
        	type="text"
        	value={this.state.Certification}
        	onChange={this.handleInputChange}/>
        

        <FormGroup>
        <Checkbox inline
        	id="AC"
    		label="AC"
        	name="AC"
        	type="checkbox"
        	value={this.state.AC}
        	onChange={this.handleInputChange}>AC</Checkbox>
        
     
        { "  "}
        <Checkbox inline
        	id="kids friendly"
        	label="Kids friendly"
        	name="kids"
        	type="checkbox"
        	value={this.state.kids}
        	onChange={this.handleInputChange}>Kids friendly</Checkbox>
        	{"  "}
        <Checkbox inline
        	name="wifi"
        	type="checkbox"
        	value={this.state.wifi}
        	onChange={this.handleInputChange}>Wifi</Checkbox>
        	{"  "}

        
      
        
        
        <Checkbox inline
        	name="tv"
        	type="checkbox"
        	value={this.state.tv}
        	onChange={this.handleInputChange}>TV</Checkbox>
        	{"  "}
        <Checkbox inline
		   	name="music"
        	type="checkbox"
        	value={this.state.music}
        	onChange={this.handleInputChange}>Music</Checkbox>
        	</FormGroup>
        	<FormGroup>
        	<Checkbox inline
        	name="maleService"
        	type="checkbox"
        	value={this.state.maleService}
        	onChange={this.handleInputChange}>Male Service</Checkbox>
        	{"  "}
        <Checkbox inline
        	name="femaleService"
        	type="checkbox"
        	value={this.state.femaleService}
        	onChange={this.handleInputChange}>Female Service</Checkbox>
        	{"  "}
        </FormGroup>
                
        
        

      <FormGroup controlId="formControlsSelect">
      <ControlLabel>Sex</ControlLabel>
      <FormControl componentClass="select" 
      	value={this.state.sex} 
      	onChange={this.handleInputChange}>
        <option value="M">Male</option>
        	<option value="F">Female</option>
        	<option value = "U">Unisex</option>
      </FormControl>
    </FormGroup>
        
        <input type="submit" value="Submit"/>
        </Grid>
      </Form>
      </center>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
