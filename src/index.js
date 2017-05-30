import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

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
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
        	BName:
        	<input
        	name="bName"
        	type="text"
        	value={this.state.bName}
        	onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
        	Bphone:
        	<input
        	name="bPhone"
        	type="text"
        	value={this.state.bPhone}
        	onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
        	Address:
        	<input
        	name="Address"
        	type="text"
        	value={this.state.Address}
        	onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
        	Landmark:
        	<input
        	name="Landmark"
        	type="text"
        	value={this.state.Landmark}
        	onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
        	Days:
        	<input
        	name="Days"
        	type="text"
        	value={this.state.Days}
        	onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
        	AC:
        	<input
        	name="AC"
        	type="checkbox"
        	value={this.state.AC}
        	onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
        	Sex:
        	<select 
        	name="sex"
        	value={this.state.sex}
        	onChange={this.handleInputChange}>
        	<option value="M">Male</option>
        	<option value="F">Female</option>
        	<option value = "U">Unisex</option>
        	</select>
        </label>
        <br/>
        <label>
        	kids friendly:
        	<input
        	name="kids"
        	type="checkbox"
        	value={this.state.kids}
        	onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
        	wifi:
        	<input
        	name="wifi"
        	type="checkbox"
        	value={this.state.wifi}
        	onChange={this.handleInputChange}/>
        </label>
        <br/><label>
        	TV:
        	<input
        	name="tv"
        	type="checkbox"
        	value={this.state.tv}
        	onChange={this.handleInputChange}/>
        </label>
        <br/><label>
        	music:
        	<input
        	name="music"
        	type="checkbox"
        	value={this.state.music}
        	onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
          Number of chairs:
          <input
            name="numberOfChairs"
            type="number"
            value={this.state.numberOfChairs}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
        	Certification:
        	<input
        	name="Certification"
        	type="text"
        	value={this.state.Certification}
        	onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
        	maleService:
        	<input
        	name="maleService"
        	type="checkbox"
        	value={this.state.maleService}
        	onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
        	femaleService:
        	<input
        	name="tv"
        	type="checkbox"
        	value={this.state.femaleService}
        	onChange={this.handleInputChange}/>
        </label>
        <br/>
        <input type="submit" value="Submit"/>

      </form>
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
